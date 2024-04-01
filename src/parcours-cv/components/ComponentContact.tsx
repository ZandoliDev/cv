import { useFormContext } from "react-hook-form"

export const ComponentContact = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const urlPattern = /^(https?:\/\/)?([\da-z.-]+).([a-z.]{2,6})([/\w .-]*)*\/?$/

  return (
    <>
      <h3 className="text-lg font-bold mb-4">Vous</h3>
      <form>
        <label className="block mb-4">
          Prénom
          <input
            {...register("prenom", { required: "Pouvez-vous renseigner ce champ ?" })}
            placeholder="Votre prénom"
            className={`w-full p-2 mt-1 border rounded ${errors.prenom ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.prenom?.message && (
            <span className="text-red-500 text-sm mt-1">{errors.prenom.message as string}</span>
          )}
        </label>

        <label className="block mb-4">
          Nom
          <input
            {...register("nom", { required: "Pouvez-vous renseigner ce champ ?" })}
            placeholder="Votre nom"
            className={`w-full p-2 mt-1 border rounded ${errors.nom ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.nom?.message && (
            <span className="text-red-500 text-sm mt-1">{errors.nom.message as string}</span>
          )}
        </label>

        <label className="block mb-4">
          Téléphone
          <input
            {...register("telephone")}
            placeholder="Votre numéro de téléphone"
            className="w-full p-2 mt-1 border rounded border-gray-300"
          />
        </label>

        <label className="block mb-4">
          Email
          <input
            {...register("email", {
              required: "Pouvez-vous renseigner ce champ ?",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Pouvez-vous vérifier votre adresse mail ?",
              },
            })}
            placeholder="Votre email"
            className={`w-full p-2 mt-1 border rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.email?.message && (
            <span className="text-red-500 text-sm mt-1">{errors.email.message as string}</span>
          )}
        </label>

        <label className="block mb-4">
          Nom de votre société
          <input
            {...register("nomSociete", { required: "Pouvez-vous renseigner ce champ ?" })}
            placeholder="Nom de votre société"
            className={`w-full p-2 mt-1 border rounded ${errors.nomSociete ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.nomSociete?.message && (
            <span className="text-red-500 text-sm mt-1">{errors.nomSociete.message as string}</span>
          )}
        </label>

        <label className="block mb-4">
          Description de votre société
          <input
            {...register("descriptionSociete", { required: "Pouvez-vous renseigner ce champ ?" })}
            placeholder="Que fait votre société en quelques mots ?"
            className={`w-full p-2 mt-1 border rounded ${errors.descriptionSociete ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.descriptionSociete?.message && (
            <span className="text-red-500 text-sm mt-1">
              {errors.descriptionSociete.message as string}
            </span>
          )}
        </label>

        <label className="block mb-4">
          Site Web de votre société
          <input
            {...register("siteWebSociete", {
              pattern: {
                value: urlPattern,
                message: "Pouvez-vous vérifier l'url de votre société ?",
              },
            })}
            placeholder="ex: https://didier-erin.me"
            className={`w-full p-2 mt-1 border rounded ${errors.siteWebSociete ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.siteWebSociete?.message && (
            <span className="text-red-500 text-sm mt-1">
              {errors.siteWebSociete.message as string}
            </span>
          )}
        </label>

        <label className="block mb-4">
          Votre poste dans la société
          <input
            {...register("poste")}
            placeholder="Votre poste"
            className={`w-full p-2 mt-1 border rounded`}
          />
        </label>
      </form>
    </>
  )
}
