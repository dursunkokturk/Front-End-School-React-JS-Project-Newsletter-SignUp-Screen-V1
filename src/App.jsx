import NewsletterSignupScreenDesign from "./assets/Components/NewsletterSignupScreenDesign";
import NewsletterSignupScreenWrite from "./assets/Components/NewsletterSignupScreenWrite";
import "../src/App.css"
import { useState } from "react";
import NewsletterSignupScreenSuccess from "./assets/Components/NewsletterSignupScreenSuccess";

export default function App() {

  const [subscription, setSubscription] = useState(false);

  if (subscription) {
    return (
      <>
        <NewsletterSignupScreenSuccess />
      </>
    )
  }

  return (
    <>
      <NewsletterSignupScreenDesign setSubscription={setSubscription}/>
      <NewsletterSignupScreenWrite setSubscription={setSubscription}/>
    </>
  )
}