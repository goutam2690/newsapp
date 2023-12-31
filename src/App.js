
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize = 15;

  const apiKey = process.env.REACT_APP_NEWS_API



  const [progress, setProgress] = useState(0)



  console.log(process.env.REACT_APP_NEWS_API)
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
        />
        <Switch>
          {/* <Route exact path="/NewsFeed"> <News setProgress = {setProgress}  pageSize={pageSize} country="in" category="general" /></Route> */}
          <Route exact path="/NewsFeed"> <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" /></Route>
          <Route exact path="/general"> <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" /></Route>
          <Route exact path="/business"> <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="business" /></Route>
          <Route exact path="/entertainment"> <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment" /></Route>
          <Route exact path="/health"> <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="health" /></Route>
          <Route exact path="/science"> <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="science" /></Route>
          <Route exact path="/sports"> <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="sports" /></Route>
          <Route exact path="/technology"> <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="technology" /></Route>

        </Switch>
      </Router>
    </div>

  )

}
export default App;

