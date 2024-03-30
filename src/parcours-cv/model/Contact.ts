export type Contact = {
  societe: Societe
}

export type Societe = {
  nom: string,
  taille: string,
  adresse: string,
  codePostal: string,
  ville: string,
  pays: string,
  description: string
}
