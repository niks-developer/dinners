import { useState } from "react";
import { dataPasta} from "./dataPasta";
import "./App.css"


function Pasta () {

    const [recipePasta, setRecipePasta] = useState(0);
    const { id, image, step} = dataPasta[recipePasta];

    const previousStep = () => {
        setRecipePasta((recipePasta => {
            recipePasta --;
            if(recipePasta < 0) {
                return dataPasta.length-1;
            }
            return recipePasta
        }))
    }

    const nextStep = () => {
        setRecipePasta((recipePasta=> {
            recipePasta ++;
            if (recipePasta > dataPasta.length -1) {
                recipePasta = 0;
            }
            return recipePasta;
        }))
    }

    return (
        <div>

            <div>
                <h2> ШАГ {id}</h2>
            </div>
            <div>
                <img src={image} alt="pasta" width="400px" />
            </div>
            <div>
                <p>{step}</p>
            </div>

            <div>
                <button onClick ={previousStep}>назад</button>
                <button onClick ={nextStep}>вперёд</button>
            </div>
        </div>

    )
}

export default Pasta;