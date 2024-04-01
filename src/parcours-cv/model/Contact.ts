export type Contact = {
  prenom: string,
  nom: string,
  societe: Societe
  service: string,
  poste: string,
  telephone: string,
  email: string
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
