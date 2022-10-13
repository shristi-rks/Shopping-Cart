import Header from "./components/Header";
import Main from "./components/Main";
import Column from "./components/Column"


function App() {
 
  return (
    <div className="App">
     <Header />
     <div id= "page">
     <div>
      <Main></Main>
      <Column />
     </div>
     <div>
     <Main></Main>
      <Column />
     </div>
     <div>
      <Main></Main>
      <Main></Main>
      <Column />
     </div>
     <div>
      <Main></Main>
      <Main></Main>
      <Column />
     </div>
     </div>

    </div>
  );
}

export default App;
