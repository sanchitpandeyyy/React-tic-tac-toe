import Players from "./components/Players";

function App() {
  

  return (
  <main>
    <div id="game-container">
      <ol id="players">
        <Players name="Sanchit" symbol="X"/>
        <Players name="Sanchit2" symbol="O"/>
      </ol>
      GAME Board
    </div> 
  </main>
  );
}

export default App
