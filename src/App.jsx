import './App.css';
import Head from "./Components/Head.jsx";
import Body from "./Components/Body.jsx";
import {Provider} from "react-redux";
import store from "./Utils/store.jsx";
function App() {

  return (
   <Provider store = {store}> 
    <div>
      <Head />
      <Body />
     </div>
    </Provider>

  )
}

export default App
