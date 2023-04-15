
import './easy.css';
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import  Card  from './components/card'
const arr = [
  {"src": require("./images/anaconda.png"), matched: false },
  {"src": require("./images/bee.png"), matched: false },
  {"src": require("./images/capybara.png"), matched: false },
  {"src": require("./images/crocodile.png"), matched: false },
  {"src": require("./images/macaw.png"), matched: false },
  {"src": require("./images/monkey.png"), matched: false },
  {"src": require("./images/piranha.png"), matched: false },
  {"src": require("./images/tiger.png"), matched: false },
  {"src": require("./images/koala.png"), matched: false },
  {"src": require("./images/giraffe (2).png"), matched: false },
]

function Easy() {

  const [cards, setCards] = useState([])
  const [moves, setMoves] = useState(0)
  const [firstclick, setFirstclick] = useState(null)
  const [secondclick, setSecondclick] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const handleCard = (card) => {
    firstclick ? setSecondclick(card) : setFirstclick(card)
  }

  // compare 2 cards
  // when there is a change on 2 cards this function will start working
  useEffect(() => {
    if (firstclick && secondclick){
      setDisabled(true)
      if(firstclick.src === secondclick.src){
        setCards(prevCards => { 
          return prevCards.map(card => {
            if(card.src === firstclick.src){
              return{...card, matched: true}
            } else {
              return card
            }
          })
        })
        reset()
      } else {
        console.log("not same")
        setTimeout(() => reset(), 1000)
      }
    }
  }, [firstclick, secondclick])

  console.log(cards)

  // reset cards
  const reset = () => {
    setFirstclick(null)
    setSecondclick(null)
    setDisabled(false)
    setMoves(moves + 1)
  }
  const Shuffle = () => {

    // duplicating cards
    const shuffled = [...arr, ...arr]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random() }))
    setCards(shuffled)
    setMoves(0)
  }
  return (
    <div className="Container">
      <div className='start-game'>
      <button onClick={Shuffle} className="ready" >Restart</button>
      <h2 className='moves'>Moves:{moves}</h2>
      </div>
      <div className='cards-container'>

        <div className='cards'>{
          cards.map(card => (
            <Card key={card.id} card={card} handleCard={handleCard} 
            flipped={card === firstclick || card === secondclick || card.matched}
            disabled={disabled}
            /> 
          ))}
          </div>
      </div>
    </div>
  );
}

export default Easy;