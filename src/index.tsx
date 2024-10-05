/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

import App from "./App";
import Home from "./pages/Home";
import SocialPage from "./pages/LinksPage";
import DonationPage from "./pages/DonationsPage";
import NotFound from "./pages/NotFound";
import CryptoPage from "./pages/CryptoPage";

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
      <Route path="/donate" component={DonationPage} />
      <Route path="/cryptocurrencies" component={CryptoPage} />
      <Route path="*paramName" component={Home} />
    </Router>
  ),
  root,
);
