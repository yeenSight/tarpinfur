import mascotte from '../assets/mascotte.png'

export default function Home() {
  return (
    <main className="home">
      <div className="content-wrapper">
        <div className="text-block">
          <div className="text-block-content">
            <div className="mascotte-container">
              <img src={mascotte} alt="Mascotte TarpinFur" className="mascotte" />
            </div>
            <div className="text-content">
              <h2>Bienvenue sur TarpinFur</h2>
              <p>
                Bienvenue à toutes et à tous sur le site de Tarpin Fur. Ce projet est en route depuis quelques mois au travers
                d'un groupe qui a mûri intérieurement sur plusieurs années pour enfin prendre son envol.
              </p>
              <p>
                Outre le groupe de discussion, Tarpin Fur a vocation de s'étendre sur un plan d'association afin de monter davantage de projets et de venir renforcer
                les activités autour de Montpellier et de sa région. Le but est aussi d'établir brique par brique un réseau de contacts
                pour rechercher facilement les différents groupes en France et mettre en avant les divers événements proposés. Le site est
                encore en construction. Vous y trouverez petit à petit toutes les informations utiles et nécessaires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
