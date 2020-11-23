import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllStrains from "../screens/AllBikes";
import SearchBike from "../screens/SearchBike";
import styled from "styled-components";

const Ul = styled.ul`
  list-style-type: none;

  overflow: hidden;
  top: 0;
  width: 100%;
`;

const Li = styled.div`
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;
const Lk = styled.div`
  color: #d6e3e0;
`;
const Content = styled.div`
  margin-top: 100px;
  position: inline;
  font-size: 28px;
`;

const Ro = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: #546f68;
  border: 2px;
`;

function Routes() {
  return (
    <Router>
      <Ro>
        <nav>
          <Ul>
            <ul>
              <Li>
                <li>
                  <Link to="/">
                    <Lk>All</Lk>
                  </Link>
                </li>
              </Li>
              <Li>
                <li>
                  <Link to="/search">
                    <Lk> Search</Lk>
                  </Link>
                </li>
              </Li>
            </ul>
          </Ul>
        </nav>
      </Ro>
      <Content>
        <Switch>
          <Route exact path="/">
            <AllStrains />
          </Route>
          <Route path="/search">
            <SearchBike />
          </Route>
        </Switch>
      </Content>
    </Router>
  );
}

export default Routes;
