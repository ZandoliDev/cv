type ExperienceType = {
  poste: string
  societe: string
  lieu: string
  formatTravail: string
  statut: string
  periode: string
  natureMission: string
  domaine: string
  contextes: string[]
  activites: string[]
  competencesTechniques: string[]
  competencesInterpersonnelles: string[]
}

const mesExperiences: ExperienceType[] = [
  {
    poste: "Tech Lead Java",
    societe: "Informatique CDC",
    lieu: "Bordeaux",
    formatTravail: "Télétravail",
    statut: "Freelance, prestataire du Groupe Onepoint",
    natureMission: "assistance technique",
    periode: "depuis janvier 2022",
    domaine: "Retraites",
    contextes: [
      "Contexte : MCO dans un SI d’une centaine d’applications dans une infrastructure en transformation constante",
    ],
    activites: [
      "Conception",
      "Maintenance évolutive et technique",
      "Rénovation du légagy",
      "Transimission de connaissances auprès des juniors",
      "Présentation de points techniques",
      "Echanges sur les pratiques Craft",
      "Garantir la confiance des clients dans des contextes à forte visibilité stratégique",
    ],
    competencesTechniques: [
      "Postgresql",
      "Oracle",
      "IntelliJ",
      "Git",
      "Maven",
      "Java 8 / 11 / 17",
      "Axway",
      "Spring (Boot, Batch, Security, Web)",
      "REST",
      "SOAP",
      "Kafka",
      "Windows",
      "Linux",
      "Docker",
      "Kubernetes",
      "Rancher",
      "Cloudbees",
      "Sonar",
      "JFrog",
      "Jira",
      "Bitbucket",
    ],
    competencesInterpersonnelles: [],
  },
  {
    poste: "Développeur Sénior Java",
    societe: "Alptis",
    lieu: "Lyon",
    formatTravail: "sur site, puis télétravail (période COVID-19)",
    statut: "CDI, prestataire d'Agixis",
    natureMission: "assistance technique",
    periode: "01/2021 - 08/20222",
    domaine: "Mutuelle",
    contextes: [
      "Contexte : Montée de version majeur de la solution Alfresco en minimisant l’impact (interruption de service) sur le SI et ses utilisateurs",
    ],
    activites: [
      "Recueil de l’ensemble des contraintes du projet",
      "Rédaction du cahier des charges",
      "Rédaction et réalisation des tests de montée en charge",
      "Centralisation des informations pour l’ensemble de équipes impliquées",
      "Choix des solutions techniques pour la réalisation de la migration",
      "Echanges avec différents métiers : architectes, administrateurs systèmes, administrateurs BDD",
    ],
    competencesTechniques: [
      "Postgresql",
      "IntelliJ",
      "Git",
      "Maven",
      "Java 8 / 11",
      "Kerberos",
      "HAProxy",
      "Alfresco",
      "Spring (Boot, Web)",
      "Hibernate",
      "REST",
      "Gatling",
      "Tomcat",
      "Windows",
      "Linux (Ubuntu, CentOS)",
      "Docker",
      "Docker-compose",
      "Jenkins",
      "Sonar",
      "Nexus",
      "Redmine",
      "Github",
    ],
    competencesInterpersonnelles: [],
  },
  {
    poste: "Tech lead Java Web",
    societe: "Alptis",
    lieu: "Lyon",
    formatTravail: "sur site",
    statut: "CDI, prestataire d'Agixis",
    natureMission: "assistance technique",
    periode: "02/2020 – 12/2020",
    domaine: "Mutuelle",
    contextes: [
      "Contexte : Développement d’une librairie d’évaluation de formules de calcul et implémentation de tarificateurs",
    ],
    activites: [
      "Réalisation d’un POC",
      "Conception",
      "Développement d’une librairie",
      "Formalisation d’un format de formules",
      "Implémentations métier basées sur la librairie d’évaluation de formule",
      "Lead tech sur un module d’authentification",
    ],
    competencesTechniques: [
      "IntelliJ",
      "Git",
      "Maven",
      "Java 11",
      "Spring (Boot, Security, MVC)",
      "Keycloak",
      "RabbitMq",
      "Linux (Ubuntu)",
      "Jenkins",
      "Sonar",
      "Nexus",
      "Redmine",
      "Github",
    ],
    competencesInterpersonnelles: [],
  },
]

const Experience = (experience: ExperienceType) => {
  return (
    <section className="px-4">
      <div className="my-4 p-6 border rounded-lg">
        <p className="text-center text-lg text-gray-700 font-semibold">
          {experience.poste}, {experience.societe}{" "}
          <span className="text-sm">(en {experience.natureMission})</span>
        </p>
        <p className="text-gray-500">
          {experience.lieu} - {experience.formatTravail}
        </p>
        <p className="text-sm text-gray-500">{experience.statut}</p>
        <p className="text-sm text-gray-600 text-right">{experience.periode}</p>
        <p className="mt-4 pt-4  border-gray-300 text-center">
          Domaine : {experience.domaine}
        </p>
        {experience.contextes.map((contexte, index) => (
          <p className="mt-2" key={index}>
            {contexte}
          </p>
        ))}
        <p className="mt-4 pt-4 border-t border-gray-400 text-center">
          Tâches et activités :
        </p>
        <ul className="list-disc list-inside space-y-1">
          {experience.activites.map((activite, index) => (
            <li key={index}>{activite}</li>
          ))}
        </ul>
        <p className="mt-4 pt-4 border-t border-gray-400 text-gray-600">
          Compétences techniques :
          <span className="font-semibold text-sm">
            {" "}
            {experience.competencesTechniques.join(", ")}
          </span>
        </p>
        {experience.competencesInterpersonnelles.length > 0 && (
          <p className="mt-2 text-gray-600">
            Compétences interpersonnelles :
            <span className="font-semibold text">
              {" "}
              {experience.competencesInterpersonnelles.join(", ")}
            </span>
          </p>
        )}
      </div>
    </section>
  )
}

export const Experiences = () => {
  return (
    <>
      <section className="md:col-span-2 bg-white rounded-lg shadow">
        <h3 className="bg-cyan-800 text-white text-xl font-bold rounded-t-lg p-4 shadow">
          Expériences
        </h3>
        {mesExperiences.map((experience, index) => (
          <Experience {...experience} key={index} />
        ))}
      </section>
    </>
  )
}
