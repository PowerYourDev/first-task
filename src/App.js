import Sidebar from "./Components/Sidebar"
import Header from "./Components/Header";
import Body from "./Components/Body";


function App() {
  return (
   <div className="App"  >
      <div><Sidebar /></div>
      <div>
      <Header/>
      <Body/>
      </div>
   
   </div>
  );
}

export default App;
