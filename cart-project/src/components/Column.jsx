import { useState } from "react";
export const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>
};

export const Items = ({click}) => {
    console.log(click)
    if (click === 1) {
        return <p>{click} item added to the cart</p>
    } else if (click > 1) {
       return  <p>{click} items added to the cart</p>
    }
};

export const MoreItems = ({click, handleClick, handleRemove}) => {
    if (click >= 1) {
        return (
            <>
                <button onClick={handleClick}>+</button>
                <button onClick={handleClick}>{click}</button>
                <button onClick={handleRemove}>-</button>
            </>
           
        );
    }
};

const Column = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
    setCount(count + 1) 
    }
    const handleRemove = () => {
    setCount(count - 1)       
    }
    return (
    <div>
      <Button handleClick={handleClick} text="Add To Cart" />
      <Items click = {count} />
      <MoreItems handleClick={handleClick}  handleRemove={handleRemove} click = {count} />
     </div>

   );
};
export default Column;