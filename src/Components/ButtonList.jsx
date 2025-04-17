import Button from "./Button.jsx"
const List = ["All","Tranding","Sports","Dancing","Songs","Movies","Cooking","....."]
const ButtonList = () =>{
return(
<div className = "flex" >
      {
        List.map((item, index) =>(
        <Button key={index} label = {item} />
        ))
      }
    </div>
)
} 
export default ButtonList;
