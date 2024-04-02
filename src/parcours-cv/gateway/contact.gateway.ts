import axios from "axios"
import { Contact } from "../model/Contact"

export const sauvegarderContact = async (contact: Contact): Promise<void> => {
  const contactUrl = `https://didier-erin.me/api/contact`
  const societetUrl = `https://didier-erin.me/api/societe`
  try {
    await axios
      .post(societetUrl, mapContactToAirtableSociete(contact), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(async (response) => {
        console.log(response)
        const idSociete = response.data.id
        await axios
          .post(contactUrl, mapContactToAirtableContact(contact, idSociete), {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(() => {
            return Promise.resolve()
          })
      })
  } catch (error) {
    return Promise.reject()
  }
}

const mapContactToAirtableContact = (contact: Contact, idSociete: string) => {
  return {
    fields: {
      Prenom: contact.prenom,
      Nom: contact.nom,
      Societe: [idSociete],
      Poste: contact.poste,
      Telephone: contact.telephone,
      Email: contact.email,
    },
  }
}

const mapContactToAirtableSociete = (contact: Contact) => {
  return {
    fields: {
      Nom: contact.societe.nom,
      Description: contact.societe.description,
      "Site web": contact.societe.siteWeb,
    },
  }
}
