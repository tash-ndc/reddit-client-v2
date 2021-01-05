import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Posts from "./Components/Posts/Posts";
import SearchResults from "./Components/SearchResults/SearchResults";
import SubredditList from "./Components/SubredditList/SubredditList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div className="main">
          <SubredditList />
          <Switch>
            <Route path="/subreddit/:subreddit" component={Posts} />
            <Route path="/:search" component={SearchResults} />
            <Route path="/reddit-client-v2" exact component={Home} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
