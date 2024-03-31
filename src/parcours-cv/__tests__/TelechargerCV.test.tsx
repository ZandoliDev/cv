import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react"
import { useContext } from "react"
import { afterEach, expect, test, vi } from "vitest"
import { ContactContext, ContactContextProvider } from "../components/Contact.context"
import { ModaleTelechargementCv } from "../components/ModaleTelechargementCv"
import { etapeSociete } from "../model/ParcoursCV"
import { sauvegarderSociete } from "../gateway/societe.gateway"

afterEach(() => {
  cleanup()
})

vi.mock("../gateway/societe.gateway", () => ({ sauvegarderSociete: vi.fn() }))

test("L'affichage de la modale de téléchargement du CV affiche l'introduction", () => {
  render(<ModaleTelechargementCv fonctionAnnulation={() => {}} fonctionFinalisation={() => {}} />)

  screen.getByText(/Je suis ravi de votre intérêt pour mon profil/i)
  screen.getByRole("button", { name: "Annuler" })
  screen.getByRole("button", { name: "Continuer" })
  const boutonRevenir = screen.queryByRole("button", { name: "Revenir" })

  expect(boutonRevenir).toBeNull()
})

test("Le clic sur le bouton 'Continuer' affiche le formulaire de la société dans la modale", async () => {
  render(<ModaleTelechargementCv fonctionAnnulation={() => {}} fonctionFinalisation={() => {}} />)

  const boutonContinuer = screen.getByRole("button", { name: "Continuer" })

  boutonContinuer.click()

  await waitFor(() => {
    screen.getByText(/Votre société/i)
    screen.getByRole("textbox", { name: "Nom" })
    screen.getByRole("button", { name: "Annuler" })
    screen.getByRole("button", { name: "Terminer" })
  })
})

test("Le clic sur le bouton 'Revenir' depuis le formulaire de la société affiche l'introduction", async () => {
  render(
    <ModaleTelechargementCv
      fonctionAnnulation={() => {}}
      fonctionFinalisation={() => {}}
      etapeCourante={etapeSociete}
    />
  )

  const boutonRevenir = screen.getByRole("button", { name: "Revenir" })

  boutonRevenir.click()

  await waitFor(() => {
    screen.getByText(/Je suis ravi de votre intérêt pour mon profil/i)
  })
})

test("Le clic sur le bouton 'Continuer' depuis le formulaire de la société sauvegarde les informations saisies dans le contexte et affiche le formulaire du contact", async () => {

  render(
    <ContactContextProvider>
      <ModaleTelechargementCv
        fonctionAnnulation={() => {}}
        fonctionFinalisation={() => {}}
        etapeCourante={etapeSociete}
      />
      <InfoSociete />
    </ContactContextProvider>
  )

  fireEvent.change(screen.getByRole("textbox", { name: "Nom" }), { target: { value: "SAS RH" } })
  fireEvent.change(screen.getByRole("combobox", { name: "Taille" }), {
    target: { value: "Entre 10 et 50 salariés" },
  })
  fireEvent.change(screen.getByRole("textbox", { name: "Adresse" }), {
    target: { value: "1 rue de la Paix" },
  })
  fireEvent.change(screen.getByRole("textbox", { name: "Code postal" }), {
    target: { value: "75000" },
  })
  fireEvent.change(screen.getByRole("textbox", { name: "Ville" }), { target: { value: "Paris" } })
  fireEvent.change(screen.getByRole("textbox", { name: "Pays" }), { target: { value: "France" } })
  fireEvent.change(screen.getByRole("textbox", { name: "Description" }), {
    target: { value: "Société de conseil en RH" },
  })

  const boutonRevenir = screen.getByRole("button", { name: "Terminer" })

  boutonRevenir.click()

  await waitFor(() => {
    screen.getByText("Nom de la société : SAS RH")
    screen.getByText("Taille de la société : Entre 10 et 50 salariés")
    screen.getByText("Adresse de la société : 1 rue de la Paix")
    screen.getByText("Code postal de la société : 75000")
    screen.getByText("Ville de la société : Paris")
    screen.getByText("Pays de la société : France")
    screen.getByText("Description de la société : Société de conseil en RH")

    expect(sauvegarderSociete).toHaveBeenCalledWith({
      nom: "SAS RH",
      taille: "Entre 10 et 50 salariés",
      adresse: "1 rue de la Paix",
      codePostal: "75000",
      ville: "Paris",
      pays: "France",
      description: "Société de conseil en RH",
    })
  })
})

const InfoSociete = () => {
  const { contact } = useContext(ContactContext)

  return (
    <div id="infoSociete">
      {contact?.societe && (
        <>
          <p>Nom de la société : {contact.societe.nom}</p>
          <p>Taille de la société : {contact.societe.taille}</p>
          <p>Adresse de la société : {contact.societe.adresse}</p>
          <p>Code postal de la société : {contact.societe.codePostal}</p>
          <p>Ville de la société : {contact.societe.ville}</p>
          <p>Pays de la société : {contact.societe.pays}</p>
          <p>Description de la société : {contact.societe.description}</p>
        </>
      )}
    </div>
  )
}
