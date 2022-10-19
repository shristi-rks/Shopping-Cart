import { useState } from "react";
export const Button = ({ handleAdd, text }) => {
    return <button onClick={handleAdd}>{text}</button>
};

export const Items = ({click}) => {
    console.log(click)
    if (click === 1) {
        return <p>{click} item added to the cart</p>
    } else if (click > 1) {
       return  <p>{click} items added to the cart</p>
    }
};

export const MoreItems = ({click, handleAdd, handleRemove}) => {
    if (click >= 1) {
        return (
            <>
                <button onClick={handleAdd}>+</button>
                <button onClick={handleAdd}>{click}</button>
                <button onClick={handleRemove}>-</button>
            </>
           
        );
    }
};

const Column = () => {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
    setCount(count + 1) 
    }
    const handleRemove = () => {
    setCount(count - 1)       
    }
    return (
    <div>
      <Button handleAdd={handleAdd} text="Add To Cart" />
      <Items click = {count} />
      <MoreItems handleAdd={handleAdd}  handleRemove={handleRemove} click = {count} />
     </div>

   );
};
export default Column;