import { FaStar } from "react-icons/fa"
import "./style.css";
import { useState } from "react";


export const Star = ({numStars = 20}) => {
 const [hovered , setHovered] = useState(0);
 const [clicked , setClicked] = useState(0);
 const [entered , setEntered] = useState(0);

    const stars = []
    for (let index = 0; index < numStars; index++) {
        let color = "grey"
        if(entered){
            color = index <= hovered ? "gold" : "grey"
        }else{
            color = index <= clicked ? "gold" : "grey"
        }
        stars.push(<FaStar key={index} size={60} color={color} onMouseOver={() => setHovered(index) } onClick={()=> setClicked(index)}/>);
    }
   


  return (
    <div onMouseEnter={() => setEntered(true)} onMouseLeave={() => setEntered(false)}>
       {stars}
    </div>
  )
}
