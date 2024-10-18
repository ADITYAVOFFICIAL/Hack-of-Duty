import './Poster.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Poster() {
  return (
    <div className="poster-container">
      <video autoPlay loop muted className="poster-image">
        <source src="./images/main page/poster/poster.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
