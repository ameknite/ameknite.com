/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

import App from "./App";
import Home from "./pages/Home";
import SocialPage from "./pages/SocialPage";
import DonationPage from "./pages/DonationsPage";
import NotFound from "./pages/NotFound";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/links" component={SocialPage} />
      <Route path="/donations" component={DonationPage} />
      <Route path="*paramName" component={Home} />
    </Router>
  ),
  root,
);
