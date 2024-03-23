import { useState } from "react"
import skillsSchema from "./assets/images/skills_schema.svg"

export const SchemaCompetences = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <div className="p-3 mt-3 bg-orange-300 rounded shadow-xl ">
      <p className="bg-cyan-200 text-cyan-950 text-center">Schématisation de mes compétences</p>
      <img
        src={skillsSchema}
        className="w-full p-3 bg-orange-300"
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
          <div className="bg-orange-300 w-full p-10">
            <button onClick={handleClose}>X</button>
            <img
              src={skillsSchema}
              alt="Schématisation des mes compétences"
              className="w-full h-auto p-10"
              onClick={handleClose}
            />
          </div>
        </div>
      )}
    </div>
  )
}
