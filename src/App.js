import { useState } from 'react';
import { data } from "./data";
import './App.css';
import Carousel from './Carousel';

function App() {

const [dinners, setDinners] = useState(data);
const [show, setShow] = useState(false);

const showCarousel = (dinner) => {
  dinner.showMore =!dinner.showMore
  setShow(!show)
}

  return (
    <div>
      <div>
        <h1>УЖИНЫ НА НЕДЕЛЮ</h1>
      </div>
       {dinners.map((dinner => {
        const { id, day, nameFood, image, recipe, showMore } = dinner;
      return (
        <div>
          <div key={id}>
            <h2>{day}</h2>
            <h3>{nameFood}</h3>
          </div>
          <div>
            <img src={image} alt="food" width="400px"/>
          </div>
          <div>
            <div>
            <h4>рецепт</h4>
            </div>
            <div>
              <button onClick={()=> showCarousel(dinner)}>Показать</button>
            </div>
            <div>
              <Carousel recipe={show && recipe}/> 
            </div>
          </div>
         
        </div>



      )
       }))}
    </div>
    )
  }


export default App;
