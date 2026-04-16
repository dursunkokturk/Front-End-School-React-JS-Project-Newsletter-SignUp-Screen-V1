import NewsletterSignupScreen from "./assets/Components/NewsletterSignupScreen";
import NewsletterSignupScreenSuccess from "./assets/Components/NewsletterSignupScreenSuccess";
import { useState } from "react";
import "../src/App.css"

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
      <NewsletterSignupScreen setSubscription={setSubscription}/>
    </>
  )
}