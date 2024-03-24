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
      <p className="text-orange-900 text-sm">{formation.annee}</p>
      <p className="font-bold text-cyan-950 ">{formation.titre}</p>
      <p className="text-end text-sm">{formation.nomOrganisme}</p>
    </div>
  )
}

export const Formations = () => {
  return (
    <div className="bg-cyan-100 rounded p-2">
      <h3 className="bg-orange-300 text-lg text-center">Formations</h3>
      {mesFormations.map((formation) => (
        <Formation {...formation} />
      ))}
    </div>
  )
}