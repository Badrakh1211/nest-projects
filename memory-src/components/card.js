import './card.css'

export default function Card({card, handleCard, flipped, disabled}) {
    const handleClick = () => {
      if(!disabled){
        handleCard(card)
      }
    }
    return (
        <div className="card">
        {/* holds 2 image front and back */}
        <div className={flipped ? "flipped" : ''}>
          <img className="front" src={card.src} ></img>
          <img className='back' onClick={handleClick} src={require("../images/comic-style-question-mark-speech-bubble-background_1017-23978.webp")} ></img>
        </div>
      </div>
    )
}