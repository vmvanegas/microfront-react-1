import React from "react";
import "./index.css";
import App from "./App.tsx";
import singleSpaReact from "single-spa-react";
import ReactDOMClient from "react-dom/client";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: App,
  errorBoundary(err) {
    console.error("Error en microfrontend:", err);
    return <div>Error en la aplicación</div>;
  },
});

export const { mount, unmount, bootstrap } = lifecycles;