import { useState } from 'react'
import IngredientItem from './components/ingredient/ingredient'
import Burger from './components/burger/burger'
import bacon from './assets/bacon.jpg'
import salad from './assets/salad.jpg'
import meat from './assets/meat.jpg'
import cheese from './assets/cheese.jpg'
import './App.css'

type IngredientData = {
  name: string
  price: number
  img: string
};
interface item {
  img: string
  name: string
  amount: number
  price: number
}

function App() {
  const INGREDIENT: IngredientData[] = [
    { name: 'Meat', price: 200, img: meat },
    { name: 'Cheese', price: 150, img: cheese },
    { name: 'Salad', price: 80, img: salad },
    { name: 'Bacon', price: 180, img: bacon }
  ]

  const [ingr, setIngr] = useState<item[]>([
    {
      img: bacon,
      name: 'Bacon',
      amount: 1,
      price: INGREDIENT.find(item => item.name === 'Bacon')!.price
    },
    {
      img: salad,
      name: 'Salad',
      amount: 1,
      price: INGREDIENT.find(item => item.name === 'Salad')!.price
    },
    {
      img: meat,
      name: 'Meat',
      amount: 1,
      price: INGREDIENT.find(item => item.name === 'Meat')!.price
    },
    {
      img: cheese,
      name: 'Cheese',
      amount: 1,
      price: INGREDIENT.find(item => item.name === 'Cheese')!.price
    }
  ]);

  const sum = ingr.reduce((acc, item) => acc + (item.price * item.amount), 0);

  const addTopping = (name: string) => {
    const copyIngr = [...ingr];
    const index = copyIngr.findIndex(item => item.name === name);
    copyIngr[index].amount++;
    setIngr(copyIngr)
  }

  return (
    <div className="wrapper">
      <div className="wrapperItem">
        <h2 className='ingrTitle'>Ingridients</h2>
        {ingr.map((item, index) => (
          <IngredientItem
            key={index}
            img={item.img}
            name={item.name}
            amount={item.amount}
            price={item.price}
            toppingClick={() => addTopping(item.name)}
          />
        ))}
      </div>
      <div className="wrapperBurger">
        <h2 className="burderTitle">Burger</h2>
        <Burger />
        <div className="totalPrice">Price: {sum}</div>
      </div>

    </div>
  )
}

export default App
