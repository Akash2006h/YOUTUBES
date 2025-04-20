import './App.css';
import Head from "./Components/Head.jsx";
import Body from "./Components/Body.jsx";
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import store from "./Utils/store.jsx";
import MainContainer from "./Components/MainContailer.jsx";
import WatchPage from "./Components/WatchPage.jsx";
const appRouter = createBrowserRouter([{
  path: "/",
  element:<Body/>,
  children: [{
    path: "/",
    element:<MainContainer />
    
  },{
      path: "watch",
      element: <WatchPage />
    }

  ]
}]) 
function App() {
  return (
   <Provider store = {store}> 
    <div>
      <Head />
      <RouterProvider router = {appRouter} />
     </div>
    </Provider>

  )
}

export default App
