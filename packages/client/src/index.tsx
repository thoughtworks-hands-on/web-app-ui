import React, { Suspense } from "react";
import "regenerator-runtime/runtime.js"; // Required for async/await to work with ES5 browserlist target
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

import "./style.scss";

import configureStore from "./redux/store";
import HelloWorld from "./pages/hello-world/hello-world";

const LazyLogin = React.lazy(() => import("./pages/login/login"));
const LazyHome = React.lazy(() => import("./pages/home/home"));
const LazyAbout = React.lazy(() => import("./pages/about/about"));

const loadingScreen = <span className="loading">Loading</span>;

export default function App() {
  return (
    <Router>
      <nav style={{ backgroundColor: "#140d0b", borderWidth: '0'}}>
        <ul>
          <li>
            <Link style={{ color: "#fff", textDecoration: 'none'}} to="/">THOUGHTFLIX</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/login">
          <Suspense fallback={loadingScreen}>
            <LazyLogin />
          </Suspense>
        </Route>
        <Route path="/hello-world">
          <Suspense fallback={loadingScreen}>
            <HelloWorld />
          </Suspense>
        </Route>
        <Route path="/about">
          <Suspense fallback={loadingScreen}>
            <LazyAbout />
          </Suspense>
        </Route>
        <Route path="/">
          <Suspense fallback={loadingScreen}>
            <LazyHome />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);

module?.hot?.accept();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}

reportWebVitals(console.log);
