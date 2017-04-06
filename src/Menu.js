import React from 'react';
import {Link} from 'react-router';

const Menu = (props)=>{
    const activeTag = ()=>{
        let url = document.location.href;
        let childMenu = document.getElementById("menu").childNodes;    
        for(var i = 0; childMenu.length; i++){
            if(childMenu[i].href === url){
                childMenu[i].className = 'active';   
                      
            }  else{
                childMenu[i].className = '';   
            }      
        }
            
    }

    return(
        <div id="menu" className="menu" onClick={activeTag}>
             
            <Link to="/About" > About</Link> 
            <Link to="/Home"> Home</Link>
        </div>);
}

export default Menu;