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
      <div className="title-and-write">
        <h1>Abone olduğunuz için teşekkürler!</h1>
        <h4><strong>ash@loremcompany.com</strong> adresine bir onay e-postası gönderildi. Lütfen e-postayı açın ve içindeki düğmeye tıklayarak aboneliğinizi onaylayın.</h4>
        <button>Mesajı kapat</button>
      </div>
    </>
  )
}