import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
  FUNDING,
} from "@paypal/react-paypal-js";
import { auth } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and show loading spinner
const ButtonWrapper = ({ showSpinner }) => {
  const [{ isPending }] = usePayPalScriptReducer();
};

function paypalDonate() {
  window.location.href =
    "https://www.sandbox.paypal.com/donate/?hosted_button_id=3FQKL4X289YBW";
}

export default function DonationDetails() {
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (!user) {
          window.location.href = "/vd/login"; // Redirect to login page if not signed in
        } else {
          // User is signed in, continue with page functionality
          console.log("User is logged in:", user);
        }
      },
      []
    );
  });
  return (
    <div className="App flex flex-col justify-center items-center min-h-screen">
      <PayPalScriptProvider
        options={{
          clientId:
            "Adr_2Smsx_jambx2RBQGnTXuqUmCSQXDgOOIESjkkeeybJ-9dDDlyLJm_JsRIU5MOvdk9OtBfmDohPKE",
          currency: "USD",
          intent: "capture",
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative", top: "100px"  }}/>
          <PayPalButtons
            fundingSource={FUNDING.PAYPAL}
            style={{
              layout: "vertical",
              label: "donate",
              shape: "pill",
              tagline: false,
              paddingLeft: "500rem",
            }}
            onCancel={paypalDonate}
          />

        <PayPalButtons
          fundingSource={FUNDING.CARD}
          style={{
            layout: "vertical",
            label: "donate",
            shape: "pill",
            tagline: false,
            paddingLeft: "500rem"
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}
