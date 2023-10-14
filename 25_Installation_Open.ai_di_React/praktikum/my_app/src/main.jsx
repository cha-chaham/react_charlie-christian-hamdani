import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/routes";
import "./styles/index.css";
import { Provider } from "react-redux";
import store from "./utils/state/redux/store/store";
import { TokenProvider } from "./utils/state/contexts/token-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <TokenProvider>
      <App />
    </TokenProvider>
  </Provider>
);
