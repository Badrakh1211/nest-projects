import logo from './logo.svg';
import './App.css';

 const App = () => {
  const array = [
  { price: "price: 2500", name: "apple"},
  { price: "price: 2000", name: "banana"}, 
  { price: "price: 2300", name: "orange"}, 
  { price: "price: 2300", name: "grape"}
  ]
  return (
    <div className="App" key="container" >
    {
      array.map((el, index) => <button key={el.name} onClick={() => console.log(el.name)} >{el.name} {el.price}</button>)
    }
    </div>
  );
}

export default App;
