import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HelmetProvider } from "react-helmet-async";
import App from "./main/App";
import "./shared/styles/index.css";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || "pk_test_dG9sZXJhbnQtcm9iaW4tOTAuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <BrowserRouter>
      <ClerkProvider 
        publishableKey={PUBLISHABLE_KEY}
        appearance={{
          layout: {
            logoImageUrl: "/scaro_technologies%20.png",
            logoPlacement: "inside",
            socialButtonsVariant: "iconButton"
          },
          variables: {
            colorPrimary: "#5C141D",
          }
        }}
        localization={{
          signIn: {
            start: {
              title: 'Sign in to Scaro Technologie',
              subtitle: 'to continue to Scaro Technologie',
            },
          },
          signUp: {
            start: {
              title: 'Create an account',
              subtitle: 'to continue to Scaro Technologie',
            },
          },
        }}
      >
        <App />
      </ClerkProvider>
    </BrowserRouter>
    <Analytics />
    <SpeedInsights />
  </HelmetProvider>
);