import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import DashboardContainer from "./components/DashboardContainer";
import ItinerariesContainer from "./components/itinerary/ItinerariesContainer";
import TripsContainer from "./components/trip/TripsContainer";
import HomeContainer from "./components/HomeContainer";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      } else {
        console.log(response);
        console.log("no users logged in");
      }
    });
  }, []);

  console.log(user);

  return (
    <>
      <Header user={user} setUser={setUser}></Header>
      <Switch>
        <Route exact path="/">
          <HomeContainer></HomeContainer>
        </Route>
        <Route exact path="/discover">
          <DashboardContainer />
        </Route>
        <Route exact path="/trips">
          <TripsContainer></TripsContainer>
        </Route>
        <Route path="/trips/:trip_id">
          <ItinerariesContainer></ItinerariesContainer>
        </Route>
      </Switch>
    </>
  );
}

export default App;
