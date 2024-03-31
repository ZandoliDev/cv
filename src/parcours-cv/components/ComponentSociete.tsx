import { useContext } from "react"
import { Societe } from "../model/Contact"
import { ContactContext } from "./Contact.context"

export const ComponentSociete = () => {
  const { updateSociete } = useContext(ContactContext)

  return (
    <>
      <h3 className="text-lg font-bold mb-4">Votre société</h3>
      <form>
        <label>
          Nom
          <input
            type="text"
            placeholder="Nom de la société"
            className="block w-full p-2 mb-4 border rounded"
            onChange={(e) => {
              updateSociete("nom", { nom: e.target.value } as Societe)
            }}
            required
          />
        </label>
        <label>
          Taille
          <select
            name="taille"
            className="block w-full p-2 mb-4 bg-white border rounded"
            onChange={(e) => {
              updateSociete("taille", { taille: e.target.value } as Societe)
            }}
            required
          >
            <option value="">Choisissez la taille de la société</option>
            <option>Moins de 10 salariés</option>
            <option>Entre 10 et 50 salariés</option>
            <option>Entre 50 et 250 salariés</option>
            <option>Plus de 250 salariés</option>
          </select>
        </label>
        <label>
          Adresse
          <input
            type="text"
            placeholder="Adresse de la société"
            className="block w-full p-2 mb-4 border rounded"
            onChange={(e) => {
              updateSociete("adresse", { adresse: e.target.value } as Societe)
            }}
            required
          />
        </label>
        <label>
          Code postal
          <input
            type="text"
            placeholder="Code postal"
            className="block w-full p-2 mb-4 border rounded"
            onChange={(e) => {
              updateSociete("codePostal", { codePostal: e.target.value } as Societe)
            }}
            required
          />
        </label>
        <label>
          Ville
          <input
            type="text"
            placeholder="Code postal"
            className="block w-full p-2 mb-4 border rounded"
            onChange={(e) => {
              updateSociete("ville", { ville: e.target.value } as Societe)
            }}
            required
          />
        </label>
        <label>
          Pays
          <input
            type="text"
            placeholder="Code postal"
            className="block w-full p-2 mb-4 border rounded"
            onChange={(e) => {
              updateSociete("pays", { pays: e.target.value } as Societe)
            }}
            required
          />
        </label>
        <label>
          Description
          <input
            type="text"
            placeholder="Description de la société"
            className="block w-full p-2 mb-4 border rounded"
            onChange={(e) => {
              updateSociete("description", { description: e.target.value } as Societe)
            }}
            required
          />
        </label>
      </form>
    </>
  )
}
