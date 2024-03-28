import { IntroductionParcoursCV } from "./IntroductionParcoursCV"

class EtapesParcoursCV {

  first() {

    return (<IntroductionParcoursCV />)
  }

}

export const ParcoursCV = ({ togglePopup }: { togglePopup: () => void }) => {
  
  const etapesParcoursCV = new EtapesParcoursCV()


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg max-w-lg mx-auto">
        {etapesParcoursCV.first()}

        <h3 className="text-lg font-bold mb-4">Votre société</h3>
        <form>
          <input
            type="text"
            placeholder="Nom de la société"
            className="block w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Votre poste"
            className="block w-full p-2 mb-4 border rounded"
            required
          />
          <textarea
            placeholder="Vos missions identifiées"
            className="block w-full p-2 mb-4 border rounded"
            required
          ></textarea>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={togglePopup}
              className="bg-gray-500 text-white rounded px-4 py-2"
            >
              Annuler
            </button>
            <button
              type="button"
              onClick={togglePopup}
              className="bg-cyan-600 text-white rounded px-4 py-2"
            >
              Continuer <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}