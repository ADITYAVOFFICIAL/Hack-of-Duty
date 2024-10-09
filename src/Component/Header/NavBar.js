import './NavBar.css';
import React from 'react';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            signIn: false,
            signUp: false,
            showMobileMenu: false, // New state for mobile menu
        };
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this); // New method for mobile menu
    }

    toggleMobileMenu() {
        this.setState({
            showMobileMenu: !this.state.showMobileMenu
        });
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className='left-box'>
                        <div className='logo'>
                            <img src="./icons/navlogo.svg" alt="call of duty logo" />
                        </div>
                        <nav>
                            <ul className={`nav-list ${this.state.showMobileMenu ? 'active' : ''}`}>
                                <li><a href="#">TRACKS</a></li>
                                <li><a href="#">ROUNDS</a></li>
                                <li><a href="#">SPONSORS</a></li>
                                <li><a href="#">FEEDBACK</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='right-box'>
                        <div className='shield-part'>
                            <img src="./images/general/header-nav/shield_icon_no_drop.png" alt="shield icon" />
                            <a href='https://srmsigkdd.vercel.app/' target='_blank'>SRMSIGKDD WEBSITE</a>
                        </div>
                        <div className='pre-part'>
                            <a href='https://devfolio.co/discover' target='_blank'> REGISTER NOW</a>
                        </div>
                        <img src="./images/general/header-nav/icons8-menu-48.png" alt="hamburger menu" className='ham-menu' onClick={this.toggleMobileMenu} />
                    </div>
                </div>
            </>
        );
    }
}
