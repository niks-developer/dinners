import { useState } from "react";
import { dataPotato} from "./dataPotato";
import "./App.css"


function Potato () {

    const [recipePotato, setRecipePotato] = useState(0);
    const { id, image, step} = dataPotato[recipePotato];

    const previousStep = () => {
        setRecipePotato((recipePotato => {
            recipePotato --;
            if(recipePotato < 0) {
                return dataPotato.length-1;
            }
            return recipePotato
        }))
    }

    const nextStep = () => {
        setRecipePotato((recipePotato => {
            recipePotato ++;
            if (recipePotato > dataPotato.length -1) {
                recipePotato = 0;
            }
            return recipePotato;
        }))
    }

    return (
        <div>

            <div>
                <h2> ШАГ {id}</h2>
            </div>
            <div>
                <img src={image} alt="potato" width="400px" />
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

export default Potato;