import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Axios from "axios";
import { myHistory } from "./index.js";
import baseURL from "./services/base";
import "bootstrap/dist/css/bootstrap.min.css";
//Components
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import Loading from "./components/Loading/Loading.js";
import ListOfParks from "./components/ListOfParks/ListOfParks";
import ListOfEvents from "./components/ListOfEvents/ListOfEvents";
import SinglePark from "./components/SinglePark/SinglePark";
// import Random from "./components/RandomPark/RandomPark";
import AddNewEvent from "./components/AddNewEvent/AddNewEvent";
import SingleEvent from "./components/SingleEvent/SingleEvent";
import SearchMap from "./components/Map/MapEventsOld";
import Navbar from "./components/Navbar/Navbar.js";
import SignUp from "./components/SignUp/SignUp.js";
import Login from "./components/Login/Login.js";
import Home from "./components/Home/Home.js";

// testing files
// import FilterTesting from "./components/testing/filtertesting";

class App extends Component {
  state = {
    theParksFromMiamiDade: null,
    eventsFromDB: null,
    ready: false,
    message: "",
    errorMsg: null,
    successMsg: null,
    userLoggedIn: null,
    sports: ["Soccer", "Basketball", "Volleyball", "Baseball"],
    eventTitleOptions: ["Pick-Up", "League", "Practice", "Try-Outs"],
    filteredEvents: [],
    filteredParks: [],
    userLocation: {
      latitude: 0,
      longitude: 0
    },
    basketball: true,
    soccer: false,
    yoga: false,
    selectedOption: "all",
    eventDescriptionLorem: ["Foul line 4-bagger slide hardball outfielder, rally left on base field. Fair right field 1-2-3 dead red bag passed ball double play. At-bat bleeder warning track starter wins cycle arm reds around the horn. Bunt shift shutout off-speed second base left on base rip sacrifice. Gap robbed outside range right fielder hey batter national pastime wins. Fair first base bunt chin music pine tar hot dog dead ball era astroturf lineup.",
      "Leadoff airmail team at-bat bunt at-bat field fan. Second baseman earned run sacrifice fly squeeze third base loss second base. World series cup of coffee stadium field 1-2-3, out fastball. Rally ground ball stretch rake sweep stretch left fielder gapper rally. No-hitter sacrifice bunt bag fall classic league second base rip. Cycle rally dodgers friendly confines take butcher boy sacrifice fly.",
      "Bleeder full count series first baseman contact ground ball outfield. Take astroturf third base cellar fielder's choice line drive can of corn in the hole. Bunt helmet series ground ball peanuts count base on balls. Starter count extra innings choke up left field petey pine tar. Robbed count good eye losses pinch hitter, sabremetrics error. Basehit mound extra innings warning track baseball pitchout rookie blue bush league.",
      "Cardinals doubleheader nubber sacrifice bunt mitt silver slugger national pastime left fielder mendoza line. No decision assist left field outfield around the horn, 4-bagger swing walk off dodgers. Fair rhubarb run batted in second baseman starting pitcher gapper catcher. Astroturf stretch left field helmet loogy no decision force. Rotation baltimore chop butcher boy suicide squeeze third base slugging bases loaded strikeout play. Strikeout world series baltimore chop robbed second base left fielder line drive.",
      "Ejection balk bench game grounder ground ball gapper. Forkball grand slam cheese pennant leather tigers bag balk airmail. 1-2-3 range run loogy steal bat wild pitch bench cellar. Grass backstop sport shift second baseman plate foul mendoza line. Full count cork game good eye chin music, team field rally season. League rubber cup of coffee passed ball unearned run outfielder slide warning track."]
  };

  async componentDidMount() {
    this.getUser();
    this.fetchData();
    this.getUserLocation();
  }

  fetchData = () => {
    //Miami Dade Parks and Recs JSON API
    Axios
      .get(
        "https://gisweb.miamidade.gov/arcgis/rest/services/Parks/MD_Parks305/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
      )
      .then(theResults => {
        let x = theResults.data.features;
        this.setState({
          theParksFromMiamiDade: x,
          filteredParks: x,
          ready: true
        });
      })
      .catch(err => {
        console.log(err);
      });

    //Events from DB
    Axios
      .get(`${baseURL}/api/events`, { withCredentials: true })
      // `${baseURL}/api/event}`, { withCredentials: true }
      // https://ironrest.herokuapp.com/avrahm
      .then(res => {
        let x = res.data;
        // console.log(x)
        this.setState({
          eventsFromDB: x,
          filteredEvents: x,
          ready: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getUserLocation = () => {
    let geo_success = position => {
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      });
    };

    let geo_error = () => {
      console.log("Sorry, no position available.");
    };

    let geo_options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 7000
    };

    navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
  }

  submitNewEvent = (
    e,
    title,
    location,
    description,
    sport,
    date,
    time,
    user
  ) => {
    e.preventDefault();

    // let theEventsCopy = {...this.state.eventsFromDB}
    let imgGen = sport.toLowerCase() + Math.floor(Math.random() * 3) + ".jpg";
    let titleGen = sport + " " + this.state.eventTitleOptions[Math.floor(Math.random() * 3)]
    const newEvent = {
      title: titleGen,
      description: description,
      location: location,
      user: user,
      date: date,
      sport: sport,
      img: imgGen,
      time: time,
      // status: status
    };

    Axios
      .post(`${baseURL}/api/event`, newEvent
        , { withCredentials: true }
      )
      .then(res => {
        let eventCopy = [...this.state.eventsFromDB];
        // console.log(res)
        eventCopy.push(res.data.ops[0]);
        // console.log(event)
        console.log(res)
        this.fetchData();
        this.setState(
          {
            message: "Posted Successfully",
            eventsFromDB: eventCopy
          },
          () =>
            setTimeout(() => {
              this.setState({
                message: ""
              });
              myHistory.push("/singleevent/" + res.data.ops[0]._id);
            }, 1000)
        );
      })
      .catch(err => {
        // console.error(newEvent)
        this.setState({
          message: "Error!"
        });
      });
  };

  submitParkUpdateFunction = (
    e,
    location,
    sport,
    phone,
    user
  ) => {
    e.preventDefault();

    // let theEventsCopy = {...this.state.eventsFromDB}
    const parkUpdate = {
      location: location,
      sport: sport,
      phone: phone,
      user: user
    };

    Axios
      .post("https://ironrest.herokuapp.com/avrahm", { event: parkUpdate })
      .then(res => {
        // let eventCopy = [...this.state.eventsFromDB];
        // console.log(res)
        // eventCopy.push(res.data.ops[0]);
        // console.log(event)
        // console.log(res)
        this.setState(
          {
            message: "Posted Successfully",
            // eventsFromDB: eventCopy
          },
          // () =>
          //   setTimeout(() => {
          //     this.setState({
          //       message: ""
          //     });
          //     // myHistory.push("/singleevent/" + res.data.ops[0]._id);
          //   }, 1000)
        );
      })
      .catch(err => {
        // console.error(err)
        this.setState({
          message: "Error!"
        });
      });
  };

  distanceFunction = (lat1, lon1, lat2, lon2, unit) => {
    if ((lat1 === lat2) && (lon1 === lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1 / 180;
      var radlat2 = Math.PI * lat2 / 180;
      var theta = lon1 - lon2;
      var radtheta = Math.PI * theta / 180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit === "K") { dist = dist * 1.609344 }
      if (unit === "N") { dist = dist * 0.8684 }
      return dist;
    }
  }

  filterFunction = e => {
    let parksFiltered;
    let eventsFiltered;
    let sportButton = e.target.id.toUpperCase();
    // console.log(sportButton)
    //if target checked is true then filter parks by sport with the target name (ie. basketball, soccer, etc)
    if (e.target.id === "all") {
      this.setState({
        filteredParks: this.state.theParksFromMiamiDade,
        filteredEvents: this.state.eventsFromDB,
        selectedOption: e.target.id
      });
    } else if (e.target.checked === true) {
      parksFiltered = this.state.theParksFromMiamiDade.filter(
        res => res.attributes[sportButton] === "Yes"
      );
      eventsFiltered = this.state.eventsFromDB.filter(
        res => res.sport.toLowerCase() === e.target.id
      );
      this.setState({
        filteredParks: parksFiltered,
        filteredEvents: eventsFiltered,
        selectedOption: e.target.id
      });
      // console.log(this.state.parks)
    } else {
      this.setState({
        filteredParks: this.state.theParksFromMiamiDade,
        filteredEvents: this.state.eventsFromDB,
        selectedOption: "all"
      });
    }
  };

  /**
   * save the user data to the state
   */
  setUser = userObj => {
    this.setState({
      userLoggedIn: userObj
    });
  };

  /**
  * make call to server to get the user data and save to set state
  */
  getUser = () => {
    Axios.get(`${baseURL}/api/isLoggedIn`, { withCredentials: true })
      .then(res => {
        // if there is a user logged in then fetch the user data and set the state
        if (res.data) {
          this.setUser(res.data);
          this.fetchData();
          // this.setFeedbackMessage(
          //   `${res.data.username} successfully logged in`,
          //   true
          // );
          // this.setFeedbackMessage(`${res.data.username} successfully logged in`, true);
          setTimeout(() => {
            this.setState({ apiIsAwake: true });
          }, 2000);
        } else {
          // this.setFeedbackMessage(`No user is currently logged in`, false);
          setTimeout(() => {
            this.setState({ apiIsAwake: true });
          }, 2000);
        }
        this.setState({ apiIsAwake: true });
      })
      .catch(err => {
        this.setFeedbackMessage(
          `Failed to verify if there is a user logged in. Error: ${err}`,
          false
        );
      });
  };

  /**
   * logout the user from the backend and delete all user data from state
   */
  logout = () => {
    Axios.get(`${baseURL}/api/logout`, { withCredentials: true })
      .then(res => {
        this.setUser(null);
        // this.setState({
        //   listOfTasks: [],
        //   filterTaskList: [],
        //   taskDataIsReady: false
        // });
        this.setFeedbackMessage(`${res.data.message}`, true);
      })
      .catch(err => {
        this.setFeedbackMessage(`Failed to logout user. Error: ${err}`, false);
      });
  };

  setFeedbackMessage = (message, itIsSuccess) => {
    if (itIsSuccess) {
      this.setState({
        successMsg: message
      });
    } else {
      this.setState({
        errorMsg: message
      });
    }

    // only display message for x amount of time
    setTimeout(() => {
      this.setState({
        errorMsg: null,
        successMsg: null
      });
    }, 3000);
  };

  render() {
    if (this.state.ready) {
      return (
        <div className="App">
          <Navbar
            {...this.props}
            userObj={this.state.userLoggedIn}
            logout={this.logout}
            setUser={this.setUser}
            fetchData={this.fetchData}
            setFlashMessage={this.setFeedbackMessage}
          />
          {/* <SignIn /> */}
          {/* <Header /> */}
          <Switch>
            <Route
              exact
              path="/"
              render={props => (<Home />)} />
            <Route
              exact
              path="/signup/"
              render={props => (
                <SignUp
                  {...props}
                  ready={this.state.ready}
                  userObj={this.state.userLoggedIn}
                  setUser={this.setUser}
                  // fetchData={this.fetchData}
                  setFlashMessage={this.setFeedbackMessage}
                />
              )}
            />
            <Route
              exact
              path="/login/"
              render={props => (
                <Login
                  {...props}
                  ready={this.state.ready}
                  userObj={this.state.userLoggedIn}
                  setUser={this.setUser}
                  // fetchData={this.fetchData}
                  setFlashMessage={this.setFeedbackMessage}
                />
              )}
            />
            <Route
              exact
              path="/map/"
              render={props => (
                <SearchMap
                  {...props}
                  parkData={this.state.filteredParks}
                  eventData={this.state.filteredEvents}
                  filterFunction={this.filterFunction}
                  selectedOption={this.state.selectedOption}
                  ready={this.state.ready}
                  userLocation={this.state.userLocation}
                />
              )}
            />

            <Route
              exact
              path="/singlepark/:id"
              render={props => (
                <SinglePark
                  {...props}
                  listOfParks={this.state.theParksFromMiamiDade}
                  listOfEvents={this.state.eventsFromDB}
                  ready={this.state.ready}
                  userLocation={this.state.userLocation}
                  distanceFunction={this.distanceFunction}
                  submitParkUpdateFunction={this.submitParkUpdateFunction}
                  message={this.state.message}
                />
              )}
            />
            <Route
              exact
              path="/parks/"
              render={props => (
                <ListOfParks
                  {...props}
                  listOfParks={this.state.filteredParks}
                  ready={this.state.ready}
                  filterFunction={this.filterFunction}
                  selectedOption={this.state.selectedOption}
                  userLocation={this.state.userLocation}
                  distanceFunction={this.distanceFunction}
                />
              )}
            />
            <Route
              exact
              path="/events/"
              render={props => (
                <ListOfEvents
                  {...props}
                  listOfEvents={this.state.filteredEvents}
                  ready={this.state.ready}
                  filterFunction={this.filterFunction}
                  selectedOption={this.state.selectedOption}
                />
              )}
            />
            <Route
              exact
              path="/singleevent/:id"
              render={props => (
                <SingleEvent
                  {...props}
                  listOfEvents={this.state.eventsFromDB}
                  ready={this.state.ready}
                  message={this.state.message}
                />
              )}
            />
            <Route
              exact
              path="/newevent/"
              render={props => (
                <AddNewEvent
                  {...props}
                  listOfParks={this.state.theParksFromMiamiDade}
                  message={this.state.message}
                  submitEventFunction={this.submitNewEvent}
                  sports={this.state.sports}
                  descriptionLorem={this.state.eventDescriptionLorem}
                  eventTitleOptions={this.state.eventTitleOptions}
                />
              )}
            />
          </Switch>
          {this.state.successMsg && (
            <div className="alert alert-success" role="alert">
              {this.state.successMsg}
            </div>
          )}

          {this.state.errorMsg && (
            <div className="alert alert-danger" role="alert">
              {this.state.errorMsg}
            </div>
          )}
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}

export default App;
