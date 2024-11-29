import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Sepolia } from "@thirdweb-dev/chains";
import {
  ThirdwebProvider,
  coinbaseWallet,
  metamaskWallet,
  rainbowWallet,
  trustWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";
import {
  Home,
  CampaignDetails,
  CreateCampaign,
  Disconnect,
  Profile,
  UpdateCampaign,
  Withdraw,
  
} from "./pages";

import LandingPage from "./pages/LandingPage";
const router = createBrowserRouter([
  {
    path: "/", // Redirect to /landing by default
    element: <LandingPage />,
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "create-campaign",
        element: <CreateCampaign />,
      },
      {
        path: "update-campaign/:campaignId",
        element: <UpdateCampaign />,
      },
      {
        path: "campaign-details/:campaignId",
        element: <CampaignDetails />,
      },
      {
        path: "withdraw",
        element: <Withdraw />,
      },
      {
        path: "disconnect",
        element: <Disconnect />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider
    activeChain={Sepolia}
    clientId={`${process.env.CLIENT_ID}`}
    supportedWallets={[
      metamaskWallet({
        recommended: true,
      }),
      coinbaseWallet(),
      rainbowWallet(),
      walletConnect(),
      trustWallet(),
    ]}
  >
    <StateContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </StateContextProvider>
  </ThirdwebProvider>
);
