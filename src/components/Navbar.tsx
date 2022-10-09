import React,{FC,useContext} from "react";
import home from '../assets/home.png';
import plus from '../assets/add.svg';
import appContext from "../context/AppContext";

const Navbar:FC = () =>{

  const {showForm} = useContext(appContext)

    return(
      <nav>
        <ul  className="nav showform">
          <li><img onClick={()=>showForm(true)} src={home} alt='home icon'/></li>

          <li onClick={() =>showForm(false)} id="plus"><img src={plus} alt='plus'/></li>

          <li><img onClick={()=> showForm(true)} src={home} alt='home icon'/></li>
          
          
        </ul>
      </nav>

    )
}
export default Navbar