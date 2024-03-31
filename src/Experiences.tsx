type ExperienceType = {
  poste: string
  societe: string
  statut: string
  periode: string
  contextes: string[]
  activites: string[]
  competencesTechniques: string[]
  competencesInterpersonnelles: string[]
}

const mesExperiences: ExperienceType[] = [
  {
    poste: "Tech Lead Java",
    societe: "Informatique CDC",
    statut: "Freelance, prestataire du Groupe Onepoint",
    periode: "depuis janvier 2022",
    contextes: [
      "Assistance technique",
      "Domaine : Retraites",
      "Contexte : MCO dans un SI d’une centaine d’applications dans une infrastructure en transformation constante",
    ],
    activites: [
      "Développement de l'application de gestion de la relation client",
      "Développement de l'application de gestion de projet",
    ],
    competencesTechniques: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Docker", "Git"],
    competencesInterpersonnelles: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Docker", "Git"],
  },
]

const Experience = (experience: ExperienceType) => {
  return (
    <>
      <div className="border-b-2 pb-4 border-gray-200">
        <p className="text-gray-700 font-semibold">
          {experience.poste} - {experience.societe}
        </p>
        <p className="text-sm text-gray-500">{experience.statut}</p>
        <p className="text-sm text-gray-600">{experience.periode}</p>

        {experience.contextes.map((contexte, index) => (
          <p className="mt-2 text-gray-600" key={index}>
            {contexte}
          </p>
        ))}
        <p className="mt-2 text-gray-600">Tâches et activités :</p>
        <ul className="list-disc list-inside">
          {experience.activites.map((activite, index) => (
            <li key={index}>{activite}</li>
          ))}
        </ul>
        <p className="mt-2 text-gray-600">
          Compétences techniques :
          <span className="font-semibold"> {experience.competencesTechniques.join(", ")}</span>
        </p>
        <p className="mt-2 text-gray-600">
          Compétences interpersonnelles :
          <span className="font-semibold">
            {" "}
            {experience.competencesInterpersonnelles.join(", ")}
          </span>
        </p>
      </div>
    </>
  )
}

export const Experiences = () => {
  return (
    <>
      <section className="md:col-span-2 bg-white p-4 rounded-lg shadow">
        <h3 className="text-cyan-600 font-bold text-lg mb-4">Expériences</h3>
        {mesExperiences.map((experience, index) => (
          <Experience {...experience} key={index}/>
        ))}
      </section>
    </>
  )
}
