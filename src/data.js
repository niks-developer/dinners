import Potato from "./Potato";
import Pasta from "./Pasta";

export const data = [
    {
        id: 1,
        day: "Понедельник",
        nameFood: "Картофель по-французски",
        image: "/pictures/potato/kartoshka-po-frantsuzski-s-myasom.jpg",
        slides: <Potato />
       
    },

    {
        id: 2,
        day: "Вторник",
        nameFood: "Спагетти с фаршем и томатной пастой",
        image: "/pictures/pasta/pasta-s-farshem-i-tomatnoi-pastoi.jpg",
        slides: <Pasta />
        
    }

]