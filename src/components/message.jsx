import { colors } from "@mui/material"
import { Css, Info } from "@mui/icons-material";
const Message=({classname="Message",val,heading=1})=>{
    if(heading===1)return(<h1 className="text-center" font-color="White" bgcolor="blue" >{classname}{val}</h1>);
    else if(heading===2)return(<h2 align="center" >{classname}{val}</h2>);
    else if(heading===3)return(<h3 align="center">{classname}{val}</h3>);
}
export default Message;