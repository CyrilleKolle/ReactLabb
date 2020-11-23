import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllStrains from "../screens/AllBikes";
import StrainEffects from "./FormComponent";

import styled from "styled-components";

const Vi = styled.div`
  position: relative;
  font-size: 28px;
  margin: 50px;
`;
function Content() {
  return (
    <Router>
      <Vi>
        <Switch>
          <Route exact path="/">
            <AllStrains />
          </Route>
          <Route path="/effects">
            <StrainEffects />
          </Route>
        </Switch>
      </Vi>
    </Router>
  );
}

export default Content;
