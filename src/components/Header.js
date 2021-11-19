import React from "react";
import { Link } from 'react-router-dom';
import Logo from "./../design/quizmaster-logo.svg";
import './header.css';

class Header extends React.PureComponent {

    render() {

        let renderHeader =  (
                            <>
                            <Link to="/" aria-label="back to home">
                                <figure>
                                    <img 
                                        src={Logo} 
                                        alt="quiz master logo" 
                                        className="block__header__logo" 
                                    />
                                </figure>
                            </Link>
                            </>
                             )

        let renderPage;
        if(this.props.page === "home") {
            renderPage = (
                        
                            <header className = "block__header-home">
                                <figure>
                                    <img 
                                        src={Logo} 
                                        alt="quiz master logo" 
                                        className="block__header__logo" 
                                    />
                                </figure>
                                <button onClick={this.props.onClickMenuButton} aria-label="Open menu" aria-expanded="false" className="block__header-home__Header__menu-button">
                                        <i className="Header__menu-icon material-icons" aria-hidden="true" >menu</i>
                                </button>
                            </header>
                        
                        )
        } else if(this.props.page === "quiz") {
            renderPage = (
                        
                            <header className = "block__header-other">
                                {renderHeader}
                                <nav className="block__header--nav">
                                    <h4>CLASSIC {'</DEV>'}</h4>
                                    <span>|</span>
                                    <Link to="/" className="block__header--nav--link" aria-label="back to home">INÍCIO</Link>
                                    <button onClick={this.props.onClickMenuButton} aria-label="Open menu" className="Header__menu-button">
                                        <i className="Header__menu-icon material-icons" aria-hidden="true" >menu</i>
                                    </button>
                                </nav>
                            </header>
                      
                        )
        } else if(this.props.page === "stats") {
            renderPage = (
                        
                            <header className = "block__header-other">
                                {renderHeader}
                                <nav className="block__header--nav">
                                    <h4>ESTATISTICAS</h4>
                                    <span>|</span>
                                    <Link to="/" className="block__header--nav--link" aria-label="back to home">INÍCIO</Link>
                                    <button onClick={this.props.onClickMenuButton} aria-label="Open menu" className="Header__menu-button">
                                        <i className="Header__menu-icon material-icons" aria-hidden="true" >menu</i>
                                    </button>
                                </nav>
                            </header>
                       
                        )
        } else if(this.props.page === "about") {
            renderPage = (
                       
                            <header className = "block__header-other">
                                {renderHeader}
                                <nav className="block__header--nav">
                                    <h4>SOBRE O JOGO</h4>
                                    <span>|</span>
                                    <Link to="/" className="block__header--nav--link" aria-label="back to home">INÍCIO</Link>
                                    <button onClick={this.props.onClickMenuButton} aria-label="Open menu" className="Header__menu-button">
                                        <i className="Header__menu-icon material-icons" aria-hidden="true" >menu</i>
                                    </button>
                                </nav>
                            </header>
                       
                        )
        }

  
        return  <>
                    {renderPage}
                </>
    }
}

export default Header;