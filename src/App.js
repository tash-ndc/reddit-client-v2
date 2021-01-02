import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Posts from "./Components/Posts";
import SubredditList from "./Components/SubredditList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/subreddit" exact component={SubredditList} />
          <Route path="/subreddit/:subreddit" component={Posts} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
