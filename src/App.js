import Header from "./Components/Header";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import RecommendedVideos from "./Components/RecommendedVideos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./Components/SearchPage";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Router>
        {/* Header will always render  */}
        <Header />

        <Switch>
          {/* Search page */}
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          {/* Home page */}
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
