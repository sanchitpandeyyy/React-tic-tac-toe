import Players from "./components/Players";

function App() {
  

  return (
  <main>
    <div id="game-container">
      <ol id="players">
        <Players initialName="Sanchit" symbol="X"/>
        <Players initialName="Sanchit2" symbol="O"/>
      </ol>
      GAME Board
    </div> 
  </main>
  );
}

export default App
