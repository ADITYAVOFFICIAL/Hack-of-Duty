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
        this.handleRegisterClick = this.handleRegisterClick.bind(this); // Method to handle register click
    }

    toggleMobileMenu() {
        this.setState({
            showMobileMenu: !this.state.showMobileMenu
        });
    }

    handleRegisterClick() {
        const audio = new Audio('/audio.mp3'); // Ensure the path is correct
        audio.play(); // Play audio

        // Redirect after audio plays
        audio.onended = () => {
            window.open('https://devpost.com/', '_blank'); // Redirect to the register page
        };
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
                                <li><a href="#tracks">TRACKS</a></li>
                                <li><a href="#rounds">ROUNDS</a></li>
                                <li><a href="#sponsors">SPONSORS</a></li>
                                <li><a href="#feedback">FEEDBACK</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='right-box'>
                        <div className='shield-part'>
                            <img src="./images/general/header-nav/shield_icon_no_drop.png" alt="shield icon" />
                            <a href='https://srmsigkdd.vercel.app/' target='_blank' rel='noopener noreferrer'>SRMSIGKDD WEBSITE</a>
                        </div>
                        <div className='pre-part'>
                            <a href='#' onClick={this.handleRegisterClick}>REGISTER NOW</a>
                        </div>
                        <img src="./images/general/header-nav/icons8-menu-48.png" alt="hamburger menu" className='ham-menu' onClick={this.toggleMobileMenu} />
                    </div>
                </div>
            </>
        );
    }
}
