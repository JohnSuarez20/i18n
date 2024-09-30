import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

import JobsList from "./components/jobslist";

const messages = {
  'es': localeEsMessages,
  'en': localeEnMessages
};

const language = navigator.language.split(/[-_]/)[0] === "es" ? "es" : "en"; // Detección de idioma

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);

