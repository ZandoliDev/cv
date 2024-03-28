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
    <div className="border-dotted  border-orange-300 p-1 my-2 text-sm ">
      <p className="text-gray-700 font-semibold">
        {formation.annee} - {formation.titre}
      </p>
      <p className="text-sm text-gray-600">{formation.nomOrganisme}</p>
    </div>
  )
}

export const Formations = () => {
  return (
    <section className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-cyan-600 font-bold text-lg mb-4">Formations</h3>
      {mesFormations.map((formation) => (
        <Formation {...formation} />
      ))}
    </section>
  )
}