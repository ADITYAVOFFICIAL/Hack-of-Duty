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
        this.playPingSound = this.playPingSound.bind(this); // Bind the new method
    }

    toggleMobileMenu() {
        this.setState({
            showMobileMenu: !this.state.showMobileMenu
        });
    }

    playPingSound() {
        const pingAudio = new Audio('/ping.mp3'); // Ensure the path is correct
        pingAudio.play(); // Play ping sound
        // Open the link after a short delay
        setTimeout(() => {
            window.open('https://srmsigkdd.vercel.app/', '_blank');
        }, 100); // Adjust the delay as needed
    }

    handleRegisterClick() {
        const audio = new Audio('/audio.mp3'); // Ensure the path is correct
        audio.play(); // Play audio

        // Open the registration page after a delay
        setTimeout(() => {
            window.open('https://devpost.com/', '_blank'); // Redirect to the register page
        }, 100); // Adjust the delay as needed
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
                                {/* Move SRMSIGKDD link to the mobile menu */}
                                {this.state.showMobileMenu && (
                                    <li className="mobile-srmsigkdd">
                                        <img src="./images/general/header-nav/shield_icon_no_drop.png" alt="shield icon" />
                                        <a href="#" onClick={this.playPingSound} rel='noopener noreferrer'>SRMSIGKDD WEBSITE</a>
                                    </li>
                                )}
                                <li><a href="#tracks">TRACKS</a></li>
                                <li><a href="#rounds">ROUNDS</a></li>
                                <li><a href="#sponsors">SPONSORS</a></li>
                                <li><a href="#feedback">FEEDBACK</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='right-box'>
                        <div className='shield-part desktop-only'>
                            <img src="./images/general/header-nav/shield_icon_no_drop.png" alt="shield icon" />
                            <a href="#" onClick={this.playPingSound} rel='noopener noreferrer'>SRMSIGKDD WEBSITE</a>
                        </div>
                        <div className='pre-part'>
                            <a href="#" onClick={this.handleRegisterClick}>REGISTER NOW</a>
                        </div>
                        <img src="./images/general/header-nav/icons8-menu-48.png" alt="hamburger menu" className='ham-menu' onClick={this.toggleMobileMenu} />
                    </div>
                </div>
            </>
        );
    }
}
