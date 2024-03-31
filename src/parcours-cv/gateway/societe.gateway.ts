import axios from "axios";
import { Societe } from "../model/Contact";

export const sauvegarderSociete = async (societe: Societe): Promise<void> => {
  
  const apiKey = import.meta.env.VITE_REACT_APP_AIRTABLE_API_KEY
  const baseId = import.meta.env.VITE_REACT_APP_AIRTABLE_BASE_ID
  const tableName = import.meta.env.VITE_REACT_APP_AIRTABLE_TABLE_SOCIETE

  const url = `https://api.airtable.com/v0/${baseId}/${tableName}`
  await axios.post(
    url,
    mapSocieteToAirtableSociete(societe),
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    }
  )
  
  return Promise.resolve();
}

const mapSocieteToAirtableSociete = (societe: Societe) => {
  return {
    fields: {
      Nom: societe.nom,
      Taille: societe.taille,
      Adresse: societe.adresse,
      "Code postal": societe.codePostal,
      Ville: societe.ville,
      Pays: societe.pays,
    },
  }
}