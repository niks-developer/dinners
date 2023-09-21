import { useState } from "react";

function Carousel({ recipe }) {

    const [index, setIndex] = useState(0);
    const { image, step } = recipe[index];

    const previousStep = () => {
        setIndex((index => {
            index--;
            if (index < 0) {
                return recipe.length - 1;
            }
            return index
        }))
    }

    const nextStep = () => {
        setIndex((index => {
            index++;
            if (index > recipe.length - 1) {
                index = 0;
            }
            return index;
        }))
    }

    return (
        <div>

            <div>
                <h2> ШАГ {index + 1}</h2>
            </div>
            <div>
                <img src={image} alt="pasta" width="400px" />
            </div>
            <div>
                <p>{step}</p>
            </div>

            <div>
                <button onClick={previousStep}>назад</button>
                <button onClick={nextStep}>вперёд</button>
            </div>
        </div>
    )
}

export default Carousel;