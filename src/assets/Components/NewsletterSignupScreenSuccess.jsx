import OvalBig from "../img/oval-big.png"
import CheckBig from "../img/check-big.png"
import "../../App"

export default function NewsletterSignupScreenSuccess() {
  return (
    <>
      <div className="check-and-oval">
        <img src={CheckBig} className="check-big" alt="resim" />
        <img src={OvalBig} className="oval-big" alt="resim" />
      </div>
    </>
  )
}