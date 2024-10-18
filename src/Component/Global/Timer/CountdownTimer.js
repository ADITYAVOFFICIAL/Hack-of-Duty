import React, { useEffect, useState, useRef, useMemo } from 'react';
import './CountdownTimer.css'; // Import the CSS for the Countdown Timer

const CountdownTimer = () => {
    // Memoize the target date to prevent unnecessary re-renders
    const targetDate = useMemo(() => new Date('2024-10-28T10:00:00+05:30'), []);

    const [timeLeft, setTimeLeft] = useState({});
    const [isLive, setIsLive] = useState(false); // State to track if the event is live
    const audioRef = useRef(null); // Create a ref for the audio element

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                setIsLive(true); // Set to true when the event starts
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]); // targetDate is now a stable dependency

    const handlePlayAudio = () => {
        if (audioRef.current) {
            audioRef.current.play(); // Play the audio
        }
    };

    return (
        <div className="countdown-container">
            <audio ref={audioRef} src="/timer.mp3" preload="auto" />
            <video autoPlay muted loop className="background-video">
                <source src="./images/main page/timer/bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h2 className="countdown-heading" onClick={handlePlayAudio}>Countdown</h2>
            {isLive ? (
                <h1 className="live-banner" onClick={handlePlayAudio}>HACKATHON LIVE</h1>
            ) : (
                <div className="countdown-timer" onClick={handlePlayAudio}>
                    <div className="time-segment">
                        <span className="timer-label">{timeLeft.days}</span>
                        <span className="time-label">Days</span>
                    </div>
                    <div className="time-segment">
                        <span className="timer-label">{timeLeft.hours}</span>
                        <span className="time-label">Hours</span>
                    </div>
                    <div className="time-segment">
                        <span className="timer-label">{timeLeft.minutes}</span>
                        <span className="time-label">Minutes</span>
                    </div>
                    <div className="time-segment">
                        <span className="timer-label">{timeLeft.seconds}</span>
                        <span className="time-label">Seconds</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CountdownTimer;
