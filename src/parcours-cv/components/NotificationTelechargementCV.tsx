export const NotificationTelechargementCV = ({
  fonctionFermeture,
  isSucces,
}: {
  fonctionFermeture: () => void
  isSucces: boolean
}) => {
  const email = import.meta.env.VITE_REACT_APP_EMAIL
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-md mx-auto">
        <div className="text-right">
          <button onClick={fonctionFermeture} className="text-cyan-600 font-bold">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        {isSucces ? (
          <div className="text-gray-600">
            <h3 className="text-xl font-bold text-cyan-600">
              Merci ! <i className="fa-regular fa-face-smile"></i>
            </h3>
            <p className="mt-4">Merci d'avoir pris le temps de renseigner ces informations.</p>
            <p className="mt-4">Vous recevrez mon CV par mail dans l'heure. </p>
            <p className="mt-4 italic text-right">Pensez à vérifier dans vos spams</p>
          </div>
        ) : (
          <div className="text-gray-600">
            <h3 className="text-xl font-bold text-red-600 text-center">
              Oups <i className="fa-regular fa-face-sad-tear"></i>
            </h3>
            <p className="mt-4">
              Navré, il semble y avoir un dysfonctionnement dans l'enregistrement des informations
              saisies.
            </p>
            <p className="mt-4">
              Je vous invite à me contacter directement par email à l'adresse{" "}
              <a href={`mailto:${email}`} className="font-bold">
                {email}
              </a>
              .
            </p>
            <p className="mt-4">Merci</p>
          </div>
        )}
      </div>
    </div>
  )
}
