import { useContext, useState } from "react"
import { Etape } from "../model/Etape"
import { etapeIntroduction } from "../model/ParcoursCV"
import { sauvegarderSociete } from "../gateway/societe.gateway"
import { ContactContext } from "./Contact.context"

export const ModaleTelechargementCv = ({
  fonctionAnnulation,
  fonctionFinalisation,
  etapeCourante,
}: {
  fonctionAnnulation: () => void
  fonctionFinalisation: () => void
  etapeCourante?: Etape
  }) => {

  const { contact } = useContext(ContactContext)
  const [etape, setEtape] = useState(etapeCourante ? etapeCourante : etapeIntroduction)

  const etapeSuivante = () => {
    setEtape(etape.suivante())
  }

  const etapePrecedente = () => {
    setEtape(etape.precedente())
  }

  const validerParcours = () => {
    sauvegarderSociete(contact.societe)
    fonctionFinalisation()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg max-w-lg mx-auto">
        <div>
          {etape.getContenu()}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={fonctionAnnulation}
              className="bg-gray-500 text-white rounded px-4 py-2"
            >
              Annuler
            </button>
            {!etape.isInitiale() && (
              <button
                type="button"
                onClick={etapePrecedente}
                className="bg-cyan-600 text-white rounded px-4 py-2"
              >
                <i className="fa-solid fa-arrow-left"></i> Revenir
              </button>
            )}
            {!etape.isFinale() && (
              <button
                type="button"
                onClick={etapeSuivante}
                className="bg-cyan-600 text-white rounded px-4 py-2"
              >
                Continuer <i className="fa-solid fa-arrow-right"></i>
              </button>
            )}
            {etape.isFinale() && (
              <button
                type="button"
                onClick={validerParcours}
                className="bg-cyan-600 text-white rounded px-4 py-2"
              >
                Terminer
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
