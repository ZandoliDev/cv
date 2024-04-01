export type Contact = {
  prenom: string,
  nom: string,
  societe: Societe
  poste: string,
  telephone: string,
  email: string
}

export type Societe = {
  nom: string,
  description: string
  siteWeb: string,
}
