import skillsSchema from "./assets/images/skills_schema.svg"

export const SchemaCompetences = () => {
  return (
    <div className="p-3 mt-3 bg-orange-300">
      <p className="bg-cyan-200 text-cyan-950 text-center">Schématisation de mes compétences</p>
      <img
        src={skillsSchema}
        className="w-full p-3 bg-orange-300"
        alt="Schématisation des mes compétences"
      />
    </div>
  )
}
