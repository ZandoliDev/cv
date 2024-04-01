import { useState } from "react"
import { ContactContextProvider } from "./parcours-cv/components/Contact.context"
import { ModaleTelechargementCv } from "./parcours-cv/components/ModaleTelechargementCv"

export const Entete = () => {
  const [showPopup, setShowPopup] = useState(false)

  const fermerPopup = () => {
    setShowPopup(false)
  }

  const ouvrirPopup = () => {
    setShowPopup(true)
  }

  const dateOfBirth = new Date(import.meta.env.REACT_APP_DATE_OF_BIRTH || "1970-01-01")
  const name = import.meta.env.VITE_REACT_APP_NAME
  const email = import.meta.env.VITE_REACT_APP_EMAIL

  function calculateAge(): number {
    const now = new Date()
    let years = now.getFullYear() - dateOfBirth.getFullYear()
    const m = now.getMonth() - dateOfBirth.getMonth()
    const j = now.getDate() - dateOfBirth.getDate()

    if (m < 0 || (m === 0 && j < 0)) {
      years--
    }

    return years
  }

  return (
    <header className="bg-cyan-50 shadow rounded-lg mb-6 p-6">
      <div
        id="identite-contact"
        className="flex flex-wrap md:flex-nowrap items-center justify-between"
      >
        <div className="mb-4 md:mb-0 w-full md:w-auto text-gray-600">
          <h2 className="text-3xl font-bold text-cyan-800">{name}</h2>
          <p className="mt-1 ">{email}</p>
          <p className="mt-2">{calculateAge()} ans</p>
          <p className="mt-2">Permis B</p>
          <p className="mt-2 text-sm text-gray-600">Freelance en SASU</p>
        </div>

        <div id="titre" className="w-full ml-5 p-2 bg-cyan-200 rounded text-right shadow">
          <h1 className="text-xl font-semibold text-gray-700">Tech Lead / Développeur Senior</h1>
          <p className="mt-1 text-gray-600">
            Spécialiste backend Java avec plus de 10 ans d'expérience
            <br />
            Ouvert à d'autres technologies et au front-end
          </p>
          <p className="mt-1 text-gray-600">
            Rapidité d'adaptation, efficacité et qualité des livrables garanties.
          </p>
          <p className="mt-5 text-gray-600 text-sm">
            Actuellement en mission, disponible sous 1 mois et demi
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-6" style={{ animation: "fadeIn 2s" }}>
        <button
          onClick={ouvrirPopup}
          style={{ animation: "fadeIn 2s ease-in forwards", opacity: 0 }}
          className="inline-block text-white font-bold rounded-full px-8 py-3 
    bg-gradient-to-r from-cyan-600 to-cyan-900 hover:from-cyan-900 hover:to-cyan-600 
    shadow-2xl hover:shadow transition duration-200 ease-in-out transform hover:scale-110 text-2xl"
        >
          Télécharger mon CV
        </button>
      </div>

      {showPopup && (
        <ContactContextProvider>
          <ModaleTelechargementCv
            fonctionAnnulation={fermerPopup}
            fonctionFinalisation={fermerPopup}
          />
        </ContactContextProvider>
      )}
    </header>
  )
}
