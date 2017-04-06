import React, {Component} from 'react';
import Menu from './Menu';


class Header extends Component{

    render(){
        return(
            <header className="header">
                <h1>header</h1>
                <nav>
                    <Menu />
                    
                </nav>
            </header>
            );
    }
}
export default Header;
