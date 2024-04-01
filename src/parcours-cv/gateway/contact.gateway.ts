import axios from "axios"
import { Contact } from "../model/Contact"

export const sauvegarderContact = async (contact: Contact): Promise<void> => {
  const url = `https://didier-erin.me/api/contact`
  await axios
    .post(url, mapContactToAirtableContact(contact), {
      headers: {
        // Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    })
    .then(() => {
      return Promise.resolve()
    })
    .catch(() => {
      return Promise.reject()
    })
}

const mapContactToAirtableContact = (contact: Contact) => {
  return {
    fields: {
      contact,
    },
  }
}
