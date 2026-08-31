import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import telegramLogo from '../assets/network/telegram-svgrepo-com.svg'
import discordLogo from '../assets/network/discord-icon.svg'
import instagramLogo from '../assets/network/Instagram_logo_2022.svg'

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isInfosOpen, setIsInfosOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const infosRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const toggleInfos = () => {
    setIsInfosOpen(!isInfosOpen)
  }

  const isActive = (path: string) => location.pathname === path

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
      if (
        infosRef.current &&
        !infosRef.current.contains(event.target as Node)
      ) {
        setIsInfosOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    setIsDropdownOpen(false)
    setIsInfosOpen(false)
  }, [location.pathname])

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
            to="/planning"
            className={`nav-link ${isActive('/planning') ? 'active' : ''}`}
          >
            Planning
          </Link>

          <div className="dropdown" ref={infosRef}>
            <button
              className={`nav-link dropdown-toggle ${isActive('/association') || isActive('/regles') ? 'active' : ''}`}
              onClick={toggleInfos}
            >
              Infos
            </button>

            {isInfosOpen && (
              <div className="dropdown-menu">
                <Link to="/association" className="dropdown-item">
                  Association
                </Link>
                <Link to="/regles" className="dropdown-item">
                  Règles
                </Link>
              </div>
            )}
          </div>

          <div className="dropdown" ref={dropdownRef}>
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
