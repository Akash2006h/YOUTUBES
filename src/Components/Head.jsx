import React from "react";
import { useDispatch, useSelector} from "react-redux";
import {toggleMenu} from "../Utils/appSlice.jsx";
import {Link} from "react-router-dom";
import {YOUTUBE_SEARCH_API} from "../Utils/constant.jsx"
import {useState, useEffect} from "react";
import {cacheResults} from "../Utils/searchSlice.jsx";

const Head = () =>{
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([])
  const [showSuggestion, setShowSuggestion] = useState(true)
  const searchCache = useSelector((store) => store.search)
  const dispatch = useDispatch();
  console.log(searchQuery)
  const toggleMenuHandler = () =>{
    dispatch(toggleMenu())
  }
  useEffect(() => {
  const timer = setTimeout(() => {
    if (searchQuery && !searchCache[searchQuery]) {
      getSearchSuggestion();
    } else if (searchQuery) {
      setSuggestion(searchCache[searchQuery]);
    }
  }, 200);

  return () => clearTimeout(timer);
}, [searchQuery]);


  const getSearchSuggestion = async() =>{
    const data = await fetch (YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1])
    setSuggestion(json[1])
    dispatch(cacheResults({
      [searchQuery]: json[1]
    }))
  }


  return (
    <div>
        <div className = "grid grid-flow-col p-5 shadow-lg">
        <div className = "flex col-span-1">
        <img
        onClick = {() => toggleMenuHandler()}
        className = "h-24 cursor-pointer"
        alt = "HamBurger"
        src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEX///8AAADy8vL5+fmioqIrKyt0dHTQ0NDf39/u7u719fVSUlJ/f3+7u7teXl6QkJDW1tbm5uYxMTFDQ0NpaWmcnJw9PT2urq4ODg60tLSKiorGxsY4ODioqKgUFBRXV1e2YQktAAACRUlEQVR4nO3d6U7DMAzA8bKOpe16baOwk73/W3JMSPAhhyUkJ9b/9wS2lKapkzpVBQAAAAAAAAAAUKq6W2WsqwWp7Nw07p+ztR8nt0tN5XR4yt7hlJSOe9EONM2Li+dy2WtHmWp/ieZy1Y4x3TWSTTNqRygxNqFc6kU7PpklNEe7V+3wZF5Dk8CbdnRSb/5c2o12cFKb1v/4FzbKPseZfwpw2rHJ+R8aktHlT2Y+ascmdZz9E8BWOziprX8CWJ21g5M6r7zJVIN2cFKDP5fC1pmxleZJOzyZUyiXqivqqTl3wWSqXUHLs020DND02jGm6oMPzEO7LuLL+br2L5h/c0v2L8/tklCbeagbN9zW2boNrpHUND8TypgoEQAAAAAAAOD/1NpHF0NEhbN2HqZNxqZhTis0V1V36d+1a8kxx/4S2Zt5aCbtSNNMCTsarphtzTG6ETDftWNMd/efaPhW0i5gdB/wph2fzC04yLLfMvtrGxpohR0DCB4EaIvZaf7RB441FvATwF8H/8tm1o5Nzv/QmDoJaCoZU8PM1ARgamo29dK0tZwxtdC09Qlg6uPM1mezrYKGrVJTZaoI+M1OeRYAAAAAAAD4R9q//IbIEjH0o7ahX+gtNTew1HaipH3A2C6gqVYthR0ECDbRMdXeyFLjKVMtwUw1azPVRs/USUCS0eVPxlS7VlONdE21OLbVfNpUW/DCVprhNpq2WunbuuTA1vUTti4G+UrHLfecr2y5L8lXtnwxdJkOAAAAAAAAAABAXj4AlepeD4L3RxcAAAAASUVORK5CYII=
" />
       <img
        className = "mx-2 h-24"
        src ="data:image/png;base64,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" /> 

        </div>

        <div className ="col-span-10 text-center">
          <div>
          <input className = "w-1/2 border border-gray-400 p-2 rounded-l-full"

            type="text"
            value = {searchQuery}
            onChange = {(e) => setSearchQuery(e.target.value)}
            onFocus = {() => setShowSuggestion(true)}
            onBlur = {() => setShowSuggestion(false)}  
          />
          
          <button className = "border border-gray-400 p-2 rounded-r-full bg-gray-100" >Search</button>
        </div>

         {showSuggestion && ( <div className = "fixed bg-white px-100 w-[37rem] shadow-lg rounded-lg border-gray-100">
            <ul>             
              {suggestion.map(s => <li key ={s} className = "py-2 shadow-sm border-gray-400 hover:bg-gray-100">{s}</li>
)}
            </ul>
          </div>)}
        </div>

        <img
        className = "h-15 p-2 m-2 col-span-1"
        src = "data:image/png;base64,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"
          alt = "userIcon" 
        />

      </div>
  </div>
  )

}
export default Head; 
