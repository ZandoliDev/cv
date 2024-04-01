import axios from "axios";
import { Societe } from "../model/Contact";

export const sauvegarderSociete = async (societe: Societe): Promise<void> => {
  
  const url = `https://didier-erin.me/api/societe`
  await axios.post(
    url,
    mapSocieteToAirtableSociete(societe),
    {
      headers: {
        // Authorization: `Bearer ${apiKey}`,
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
      Description: societe.description,
    },
  }
}