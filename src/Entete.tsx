import { useState } from "react"
import { TelechargerCV } from "./parcours-cv/TelechargerCV"

export const Entete = () => {
  const [showPopup, setShowPopup] = useState(false)

  const togglePopup = () => {
    setShowPopup(!showPopup)
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
          <h2 className="text-3xl font-bold text-cyan-600">{name}</h2>
          <p className="mt-1 ">{email}</p>
          <p className="mt-2">{calculateAge()} ans</p>
          <p className="mt-2">Permis B</p>
          <p className="mt-2 text-sm text-gray-600">Freelance en SASU</p>
          <button
            onClick={togglePopup}
            className="w-64 mt-3 inline-block bg-cyan-600 text-white text-sm font-bold rounded-full px-6 py-2"
          >
            Télécharger mon CV en PDF
          </button>
        </div>

        <div id="titre" className="w-full ml-5 p-2 bg-cyan-200 shadow-xl rounded text-right ">
          <p>
            <h1 className="text-xl font-semibold text-gray-700">Tech Lead / Développeur Senior</h1>
          </p>
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

      {showPopup && <TelechargerCV togglePopup={togglePopup} />}
    </header>
  )
}
