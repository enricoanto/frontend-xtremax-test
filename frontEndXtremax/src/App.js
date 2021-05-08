import SideBar from './Components/NavbarSide';
import { AboutPage, BrowsePage, BlogPage, SuggestAttractionPage, VideosPage } from './Page'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App flex-row">
          <SideBar />
          <Route exact={`${true}`} path="/browse" component={BrowsePage} />
          <Switch>
            <Route path="/suggest-attraction" component={SuggestAttractionPage} />
            <Route path="/videos" component={VideosPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

