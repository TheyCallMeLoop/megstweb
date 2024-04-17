import "./App.css";
import Router from "./Routes/Router";
import "./assets/css/style.css";

// _____custom css____
import "./assets/css/style.css" 
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const logged = window.localStorage.getItem('checked')
  return (
    <div className="App">
    {/* <Header/> */}
    <Router />
  </div>
  );
}

export default App;
