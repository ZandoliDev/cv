import { useContext } from "react"
import { Contact } from "../model/Contact"
import { ContactContext } from "./Contact.context"

export const ComponentContact = () => {
  const { updateContact } = useContext(ContactContext)

  return (
    <>
      <h3 className="text-lg font-bold mb-4">Vous</h3>
      <form>
        <label>
          Prénom
          <input
            type="text"
            placeholder="Votre prénom"
            className="block w-full p-2 mb-4 border rounded"
            onChange={(e) => {
              updateContact("prenom", { prenom: e.target.value } as Contact)
            }}
          />
        </label>
        <label>
          Nom
          <input
            type="text"
            placeholder="Votre nom"
            className="block w-full p-2 mb-4 border rounded"
            onChange={(e) => {
              updateContact("nom", { nom: e.target.value } as Contact)
            }}
          />
        </label>
        <label>
          Téléphone
          <input
            type="text"
            placeholder="Votre numéro de téléphone"
            className="block w-full p-2 mb-4 border rounded"
            onChange={(e) => {
              updateContact("telephone", { telephone: e.target.value } as Contact)
            }}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            placeholder="Votre email"
            className="block w-full p-2 mb-4 border rounded"
            onChange={(e) => {
              updateContact("email", { email: e.target.value } as Contact)
            }}
          />
        </label>
      </form>
    </>
  )
}
