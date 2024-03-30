import { ComponentIntroduction } from "./ComponentIntroduction"

export const ModaleTelechargementCv = ({ fonctionAnnulation }: { fonctionAnnulation: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg max-w-lg mx-auto">
        <div>
          <ComponentIntroduction />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={fonctionAnnulation}
              className="bg-gray-500 text-white rounded px-4 py-2"
            >
              Annuler
            </button>
            <button
              type="button"
              onClick={() => {}}
              className="bg-cyan-600 text-white rounded px-4 py-2"
            >
              Continuer <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
