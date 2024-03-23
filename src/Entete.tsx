export const Entete = () => {
  const dateOfBirth = new Date(import.meta.env.REACT_APP_DATE_OF_BIRTH || "1970-01-01")
  const name = import.meta.env.VITE_REACT_APP_NAME
  const email = import.meta.env.VITE_REACT_APP_EMAIL

  function calculateAge(): number {
    const now = new Date()
    let years = now.getFullYear() - dateOfBirth.getFullYear()
    const m = now.getMonth() - dateOfBirth.getMonth()
    const j = now.getDate() - dateOfBirth.getDate()

    if (m < 0 || (m === 0 && j < 0)) {
      years--
    }

    return years
  }

  return (
    <header className="flex items-stretch justify-between">
      <div id="identite-contact" className="bg-cyan-800 p-2 text-cyan-200 text-xs w-1/2 ">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="mt-1 ">{email}</p>
        <p className="mt-2">{calculateAge()} ans</p>
        <p className="mt-2">Permis B</p>
        <p className="mt-1">Freelance en SASU</p>
        <p className="p-2 mt-2 border-solid border-2 border-cyan-200">
          Pour des informations détaillées de contact, cliquez ici pour télécharger mon CV au format
          PDF.
        </p>
      </div>
      <div
        id="titre"
        className="bg-cyan-200 flex flex-col flex-grow justify-center text-end p-2 text-cyan-950"
      >
        <p>
          <h1 className="text-right text-xl font-bold">Teach Lead / Développeur Senior</h1>
        </p>
        <p className="mt-1 ">
          Spécialiste backend Java avec plus de 10 ans d'expérience, ouvert à explorer de nouvelles
          technologies et au développement front-end. Rapidité d'adaptation et qualité de conception
          garanties.
        </p>
      </div>
    </header>
  )
}
