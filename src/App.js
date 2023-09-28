import { useState } from 'react';
import { data } from "./data";
import './App.css';
import Carousel from './Carousel';

function App() {

const [dinners, setDinners] = useState(data);
const [show, setShow] = useState(false);

// const showRecipeClick = (recipe) => {
//   recipe.showMore = !recipe.showMore
//   setShow(!show)
// }

  return (
    <div className="container">
      <div>
        <h1>УЖИНЫ НА НЕДЕЛЮ</h1>
      </div>
       {dinners.map((dinner => {
        const { id, day, nameFood, image, recipe } = dinner;
      return (
        <div className="container">
          <div key={id} className="container">
            <h2>{day}</h2>
            <h3>{nameFood}</h3>
          </div>
          <div className="container">
            <img src={image} alt="food" width="400px"/>
          </div>
          <div>
           <br />
            <div className="container">
              <button onClick={()=> setShow(!show)}>{show ? "Скрыть рецепт" : "Показать рецепт"}</button>
            </div>
            <div className="container">
              {show&& <Carousel recipe={recipe}/>}
            </div>
          </div>
         
        </div>



      )
       }))}
    </div>
    )
  }


export default App;
