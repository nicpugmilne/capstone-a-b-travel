import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeContainer from "./components/HomeContainer";
import ItinerariesContainer from "./components/itinerary/ItinerariesContainer";
import TripsContainer from "./components/trip/TripsContainer";
import UnknownUserContainer from "./components/UnknownUserContainer";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      } else {
        console.log(response);
      }
    });
  }, []);

  console.log(user);

  return (
    <>
      <Header user={user} setUser={setUser}></Header>
      <Switch>
        <Route exact path="/">
          <UnknownUserContainer
            setUser={setUser}
            user={user}
          ></UnknownUserContainer>
        </Route>
        <Route exact path="/home">
          <HomeContainer setUser={setUser} user={user} />
        </Route>
        <Route exact path="/trips">
          <TripsContainer></TripsContainer>
        </Route>
        <Route path="/trips/:trip_id">
          <ItinerariesContainer></ItinerariesContainer>
        </Route>
      </Switch>
    </>

    // <BrowserRouter>
    //   <div className="App">
    //     <Switch>
    //       <Route path="/testing">
    //         <h1>Test Route</h1>
    //       </Route>
    //       <Route path="/">
    //         <h1>Page Count: {count}</h1>
    //       </Route>
    //     </Switch>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
