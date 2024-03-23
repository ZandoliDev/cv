import skillsSchema from "./assets/images/skills_schema.svg"

export const SchemaCompetences = () => {
  return (
    <div className="p-3 mt-3 bg-orange-300">
      <p className="bg-cyan-100 text-cyan-800 text-center">Schématisation de mes compétences</p>
      <img
        src={skillsSchema}
        className="w-full p-3 bg-orange-300"
        alt="Schématisation des mes compétences"
      />
    </div>
  )
}
