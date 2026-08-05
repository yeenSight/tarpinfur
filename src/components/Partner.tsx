import furbar from '../assets/partnership/furbar.jpg'
import telegram from '../assets/network/telegram-svgrepo-com.svg'

export default function Partner() {
    return (
        <main className="home">
            <div className="content-wrapper">
                <div className="text-block">
                    <div className="text-block-content">
                        <div className="mascotte-container">
                            <img src={furbar} alt="Furbar Montpellier" className="mascotte" />
                        </div>
                        <div className="text-content">
                            <h2>Furbar Montpellier</h2>
                            <p>
                                Le furbar de Montpellier vous acceuil une fois par mois au My Beers.
                            </p>
                            <a href="https://t.me/MontpellierFurbar" target="_blank" rel="noopener noreferrer" className="button-link">
                                <img src={telegram} alt="Telegram" className="button-icon" />
                                <span>Rejoindre</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
