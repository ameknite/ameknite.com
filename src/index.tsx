/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

import App from "./App";
import Home from "./pages/Home";
import SocialPage from "./pages/LinksPage";
import DonationPage from "./pages/DonationsPage";
import NotFound from "./pages/NotFound";
import CryptoPage from "./pages/CryptoPage";
import PgpKey from "./pages/PgpKey";
import {
  crypto,
  donate,
  home,
  kofi,
  links,
  not_found,
  pgp_key,
} from "./data/routes";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <Router root={App}>
      <Route path={home} component={Home} />
      <Route path={links} component={SocialPage} />
      <Route path={donate} component={DonationPage} />
      <Route path={crypto} component={CryptoPage} />
      <Route path={pgp_key} component={PgpKey} />
      <Route path={not_found} component={Home} />
    </Router>
  ),
  root,
);
