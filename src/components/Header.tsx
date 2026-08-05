import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import telegramLogo from '../assets/network/telegram-svgrepo-com.svg'
import discordLogo from '../assets/network/discord-icon.svg'
import instagramLogo from '../assets/network/Instagram_logo_2022.svg'

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">TarpinFur</h1>
        <nav className="nav">
          <Link 
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Accueil
          </Link>
          
          <Link 
            to="/event"
            className={`nav-link ${isActive('/event') ? 'active' : ''}`}
          >
            Events
          </Link>
          
          <div className="dropdown">
            <button 
              className="nav-link dropdown-toggle"
              onClick={toggleDropdown}
            >
              Réseaux
            </button>
            
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <a 
                  href="https://t.me/tarpinfur" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="dropdown-item"
                >
                  <img src={telegramLogo} alt="Telegram" className="social-icon" />
                  Telegram
                </a>
                <a 
                  href="https://discord.gg/nJxeyZrQ7R"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="dropdown-item"
                >
                  <img src={discordLogo} alt="Discord" className="social-icon" />
                  Discord
                </a>
                <a 
                  href=""
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="dropdown-item"
                >
                  <img src={instagramLogo} alt="Instagram" className="social-icon" />
                  Instagram
                </a>
              </div>
            )}
          </div>
          <Link
            to="/partner"
            className={`nav-link ${isActive('/partner') ? 'active' : ''}`}
          >
            Partenaires
          </Link>
        </nav>
      </div>
    </header>
  )
}
