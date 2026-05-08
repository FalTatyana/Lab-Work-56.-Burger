import { useState } from 'react'
import IngredientItem from './components/ingredient/ingredient'
import Burger from './components/burger/burger'
import bacon from './assets/bacon.jpg'
import salad from './assets/salad.jpg'
import meat from './assets/meat.jpg'
import cheese from './assets/cheese.jpg'
import './App.css'
import type { IngredientData, Item } from './types'

function App() {
  const INGREDIENT: IngredientData[] = [
    { name: 'Meat', price: 200, img: meat },
    { name: 'Cheese', price: 150, img: cheese },
    { name: 'Salad', price: 80, img: salad },
    { name: 'Bacon', price: 180, img: bacon }
  ]

  const [ingr, setIngr] = useState<Item[]>([
    {
      img: bacon,
      name: 'Bacon',
      amount: 0,
      price: INGREDIENT.find(item => item.name === 'Bacon')!.price
    },
    {
      img: salad,
      name: 'Salad',
      amount: 0,
      price: INGREDIENT.find(item => item.name === 'Salad')!.price
    },
    {
      img: meat,
      name: 'Meat',
      amount: 0,
      price: INGREDIENT.find(item => item.name === 'Meat')!.price
    },
    {
      img: cheese,
      name: 'Cheese',
      amount: 0,
      price: INGREDIENT.find(item => item.name === 'Cheese')!.price
    }
  ]);

  const [burger, setBurger] = useState<string[]>([]);

  const sum = ingr.reduce((acc, item) => acc + (item.price * item.amount), 0);

  const addTopping = (name: string) => {
    const copyIngr = [...ingr];
    const index = copyIngr.findIndex(item => item.name === name);
    copyIngr[index].amount++;

    const copyBurger = [...burger];
    copyBurger.push(name);

    setBurger(copyBurger);
    setIngr(copyIngr);
  }

  const removeTopping = (name: string) => {
    const copyIngr = [...ingr];
    const index = copyIngr.findIndex(item => item.name === name);
    if (copyIngr[index].amount > 0) {
      copyIngr[index].amount--;
    } else {
      return;
    }

    const copyBurger = [...burger];
    if (copyBurger.length > 0) {
      const indexBurger = copyBurger.findIndex(item => item === name);
      if (indexBurger !== -1) {
        copyBurger.splice(indexBurger, 1);
      } else {
        return;
      }

    }

    setBurger(copyBurger);
    setIngr(copyIngr);
  }

  return (
    <div className="wrapper">
      <div className="wrapperItem">
        <h2 className='ingrTitle'>Ingredients</h2>
        {ingr.map((item) => (
          <IngredientItem
            key={item.name}
            img={item.img}
            name={item.name}
            amount={item.amount}
            price={item.price}
            toppingClick={() => addTopping(item.name)}
            removeOnClick={() => removeTopping(item.name)}
          />
        ))}
      </div>
      <div className="wrapperBurger">
        <h2 className="burgerTitle">Burger</h2>
        <Burger
          burger={burger}
        />
        <div className="totalPrice">Price: {sum}</div>
      </div>
    </div>
  )
}

export default App
