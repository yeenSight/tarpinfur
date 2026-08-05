import canoe from '../assets/event/canoe.jpg'

export default function events() {
  return (
      <main className="events">
        <div className="content-wrapper">
          <div className="text-block">
            <div className="text-block-content">
              <div>
                <img src={canoe} alt="photo whisper qui fait du canoe" className="mascotte" />
              </div>
              <div className="text-content">
                <h2>15 Aout 2026 - Sortie Canoë</h2>
                <h4>Salut à tous</h4>
                <p>
                  Pour la première fois dans le cadre de Tarpin Fur et comme chaque année nous organisons une sortie canoë !  🚣‍♀️
                </p>
                <p>
                  Comme l'année précédente, nous retournons à Canoë Rapido dans les gorges de l'Hérault.<br/>
                  <a href="https://maps.app.goo.gl/p3ZdCJRwBEDiyidA8" target="_blank" rel="noopener noreferrer">Voir sur Google Maps</a>
                </p>
                <p>
                  Pour des raisons de simplicité, il vous est demandé une inscription ci-dessous :<br/>
                  <a href="https://forms.gle/PNqHCyJM1azWtSjb9" target="_blank" rel="noopener noreferrer">Inscription</a>
                </p>
                <p>
                  Nous vous demandons d'effectuer le paiement en amont, nous vous communiquerons le détail de la méthode à suivre.
                  Toute personne qui n'aura pas payé avant la date buttoir ne sera pas comptée dans la liste des inscrits. Dans le cas présent, nous ne pouvons assurer une location de canoë.
                </p>
                <ul>
                  <li>1 place = 19e</li>
                  <li>2 places = 32e</li>
                </ul>
                <h4>📢 Déroulement :</h4>
                <p>
                  L'activité se passe sur toute la journée. Rendez-vous à 9h30 sur place afin de récupérer les canoës et le matériel nécessaire.
                </p>
                <p>
                  Aux environs de midi, nous irons trouver une plagette pour pique-niquer tous ensemble.
                </p>
                <p>
                  Nous continuerons ensuite la balade.
                  Nous rendrons les canoës pour environ 17:00.
                  En ce qui concerne la soirée, cela dépendra des personnes qui voudront poursuivre au-delà de la journée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}
