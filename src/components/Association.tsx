import telegram from '../assets/network/telegram-svgrepo-com.svg'

export default function Association() {
  return (
    <main className="home">
      <div className="content-wrapper">
        <div className="text-block">
          <div className="text-block-content">
            <div className="text-content">
              <h2>Association</h2>
              <p>
                TarpinFur a vocation à se structurer en association pour porter des projets
                et organiser des événements autour de Montpellier.
              </p>
              <p>
                Si vous souhaitez participer à la création de l'association ou proposer des idées,
                rejoignez-nous sur notre canal Telegram :
              </p>
              <a href="https://t.me/tarpinfur" target="_blank" rel="noopener noreferrer" className="button-link">
                <img src={telegram} alt="Telegram" className="button-icon" />
                <span>Rejoindre le canal</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
