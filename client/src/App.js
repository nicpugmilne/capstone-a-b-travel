import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ItinerariesContainer from "./components/itinerary/ItinerariesContainer";
import TripsContainer from "./components/trip/TripsContainer";

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <TripsContainer></TripsContainer>
        </Route>
        <Route path="/trips">
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