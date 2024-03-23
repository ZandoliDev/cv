export const Entete = () => {
  const dateOfBirth = new Date(import.meta.env.REACT_APP_DATE_OF_BIRTH || "1970-01-01")
  const name = import.meta.env.VITE_REACT_APP_NAME
  const address = import.meta.env.VITE_REACT_APP_ADDRESS
  const city = import.meta.env.VITE_REACT_APP_CITY
  const phone = import.meta.env.VITE_REACT_APP_PHONE
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
    <nav className="flex items-stretch justify-between">
      <div id="identite-contact" className="bg-cyan-800 p-2 text-white text-xs">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="mt-2">
          {address}
          <br />
          {city}
        </p>
        <p className="mt-2">
          <span>
            <i className="fa-solid fa-mobile-screen mr-2" />
            {phone}
          </span>
        </p>
        <p className="mt-1 ">
          <span className="ml-2">
            <i className="fa-solid fa-at" />
            {email}
          </span>
        </p>
        <p className="mt-2">
          Né le {dateOfBirth.toLocaleDateString()} ({calculateAge()} ans)
        </p>
        <p className="mt-2">Permis B</p>
        <p className="mt-1">Freelance en SASU</p>
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
    </nav>
  )
}
