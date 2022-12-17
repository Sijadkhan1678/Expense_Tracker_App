import React,{FC,useContext} from "react";
import plus from '../assets/add.svg';
import appContext from "../context/AppContext";

const Navbar:FC = () =>{

  const {showForm} = useContext(appContext)

    return(
      <nav>
        <ul  className="nav showform">
         
          <li onClick={() =>showForm(false)} id="plus"><img src={plus} alt='plus'/></li>
 
        </ul>
      </nav>

    )
}
export default Navbar