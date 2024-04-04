type FormationType = {
  annee: number
  titre: string
  nomOrganisme: string
}

const mesFormations = [
  {
    annee: 2023,
    titre: "TDD & Clean Architecture dans le monde Java",
    nomOrganisme: "WealCome (Michaël Azerhad)",
  },
  {
    annee: 2010,
    titre: "Master 2 MIAGE",
    nomOrganisme: "Polytech Lyon",
  },
  {
    annee: 2007,
    titre: "Licence informatique",
    nomOrganisme: "Université Claude Bernard Lyon 1",
  },
  {
    annee: 2006,
    titre: "DUT informatique",
    nomOrganisme: "IUT Université Bordeaux 1",
  },
  {
    annee: 2004,
    titre: "BAC S - Physique Chimie",
    nomOrganisme: "Lycée Victor Schoelcher, Fort de France, Martinique",
  },
]

const Formation = (formation: FormationType) => {
  return (
    <div className="m-4 p-4  border rounded-lg text-sm h-auto">
      <p className="text-gray-700 font-semibold">
        {formation.annee} - {formation.titre}
      </p>
      <p className="text-sm text-gray-600">{formation.nomOrganisme}</p>
    </div>
  )
}

export const Formations = () => {
  return (
    <section className="bg-white rounded-lg shadow h-auto">
      <h3 className="bg-cyan-800 text-white text-xl font-bold rounded-t-lg p-4 shadow">
        Formations
      </h3>
      {mesFormations.map((formation, index) => (
        <Formation {...formation} key={index} />
      ))}
    </section>
  )
}
