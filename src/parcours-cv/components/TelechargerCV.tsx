import { useState } from "react"
import { Etape } from "../model/Etapes"

export const TelechargerCV = ({
  etapeCourante,
  fermerPopup,
}: {
  etapeCourante: Etape
  fermerPopup: () => void
}) => {
  const [etape, setEtape] = useState(etapeCourante)

  const continuer = () => {
    if (etape.suivante()) {
      setEtape(etape.suivante()!)
    }
  }

  const revenir = () => {
    if (etape.precedente()) {
      setEtape(etape.precedente()!)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg max-w-lg mx-auto">
        {etape.getContenu()}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={fermerPopup}
            className="bg-gray-500 text-white rounded px-4 py-2"
          >
            Annuler
          </button>
          {!etape.isInitiale() && (
            <button
              type="button"
              onClick={revenir}
              className="bg-cyan-600 text-white rounded px-4 py-2"
            >
              Revenir
            </button>
          )}
          {etape.isFinale() && (
            <button
              type="button"
              onClick={fermerPopup}
              className="bg-cyan-600 text-white rounded px-4 py-2"
            >
              Terminer
            </button>
          )}
          {!etape.isFinale() && (
            <button
              type="button"
              onClick={continuer}
              className="bg-cyan-600 text-white rounded px-4 py-2"
            >
              Continuer <i className="fa-solid fa-arrow-right"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
