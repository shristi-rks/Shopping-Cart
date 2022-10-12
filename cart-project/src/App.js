import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from 'react';
import { Button, Items, MoreItems } from './components/Button'


function App() {
  const [click, setClick] = useState(0);
  const handleClick = () => {
    setClick(click + 1)
  }
  const handleRemove = () => {
    setClick(click - 1)
  }
  return (
    <div className="App">
     <Header />
     <div id= "page">
     <div>
      <Main></Main>
      <Button handleClick={handleClick} text="Add Item" />
      <Items click = {click} />
      <MoreItems handleClick={handleClick}  handleRemove={handleRemove} click = {click} />
     </div>
     <div>
      <Main></Main>
      <Button handleClick={handleClick} text="Add Item" />
      <Items click = {click} />
      <MoreItems handleClick={handleClick}  handleRemove={handleRemove} click = {click} />
     </div>
     <div>
      <Main></Main>
      <Button handleClick={handleClick} text="Add Item" />
      <Items click = {click} />
      <MoreItems handleClick={handleClick}  handleRemove={handleRemove} click = {click} />
     </div>
     <div>
      <Main></Main>
      <Button handleClick={handleClick} text="Add Item" />
      <Items click = {click} />
      <MoreItems handleClick={handleClick}  handleRemove={handleRemove} click = {click} />
     </div>
     </div>

    </div>
  );
}

export default App;
