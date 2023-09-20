import { useState } from 'react';
import { data } from "./data";
import './App.css';

function App() {

const [dinners, setDinners] = useState(data);

  return (
    <div>
      <div>
        <h1>УЖИНЫ НА НЕДЕЛЮ</h1>
      </div>
       {dinners.map((dinner => {
        const { id, day, nameFood, image, slides } = dinner;
      return (
        <div>
          <div>
            <h2>{day}</h2>
            <h3>{nameFood}</h3>
          </div>
          <div>
            <img src={image} alt="food" width="400px"/>
          </div>
          <div>
            <h4>рецепт  {slides}</h4>
          </div>
         
        </div>



      )
       }))}
    </div>
    )
  }


export default App;
