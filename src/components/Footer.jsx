import sloofyVibe from '../assets/sloofy-vibe.png';
import twitterIcon from '../assets/twitter.svg';
import telegramIcon from '../assets/telegram.svg';

const Footer = () => (
    <footer className="footer">
      <div className="sloofy-images">
        <img
          src="https://bafybeih4c7g5tvfm75ljp2qofnnh4dtpjqik6njczwwzlnwnpjb4zhiniu.ipfs.w3s.link/sloofy-vibe.png"
          alt="Sloofy Vibe"
          className="round-image"
        />
        <img
          src="https://bafybeib6vuxc3kagqd4mgwodwvubs6jgad6tiiymfnuyv7vkgxyedn5gj4.ipfs.w3s.link/sloofy-round.png"
          alt="Sloofy Round"
          className="round-image"
        />
      </div>
  
      <p>Follow us:</p>
      <div className="socials">
        <a href="https://x.com/sloofonsolana?s=21&t=pJyVwAY43BkwOF0vt4lRFQ" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023.svg"
            alt="Twitter"
          />
        </a>
        <a href="https://t.me/+je0r97289TwxYzM0" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
            alt="Telegram"
          />
        </a>
      </div>
  
      <p>&copy; 2025 SLOOF - Move Slow, Grow Steady</p>
    </footer>
  );
  
  export default Footer;