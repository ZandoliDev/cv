import { useState } from "react"
import skillsSchema from "./assets/images/skills_schema.svg"

export const SchemaCompetences = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <section>
      <h3 className="bg-cyan-800 text-white text-xl font-bold rounded-t-lg p-4 shadow">
        Schématisation de mes compétences (Cliquez pour zoomer)
      </h3>
      <img
        src={skillsSchema}
        className="w-full bg-white p-3 rounded-b-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
        alt="Schématisation des mes compétences"
        onClick={handleOpen}
      />

      {isOpen && (
        <div
          className="
        fixed top-0 left-0 w-full h-full 
        flex items-center justify-center
        bg-black bg-opacity-50
        "
        >
          <div className="bg-white rounded p-5">
            <button onClick={handleClose}>
              <i className="text-lg text-cyan-800 fa-regular fa-circle-xmark" />
            </button>
            <img
              src={skillsSchema}
              alt="Schématisation des mes compétences"
              className="w-screen max-w-6xl h-auto p-10"
              onClick={handleClose}
            />
          </div>
        </div>
      )}
    </section>
  )
}
