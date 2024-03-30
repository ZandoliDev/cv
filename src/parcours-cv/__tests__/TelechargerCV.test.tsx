import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react"
import { useContext } from "react"
import { afterEach, expect, test } from "vitest"
import { ModaleTelechargementCv } from "../components/ModaleTelechargementCv"
import { ContactContext, ContactContextProvider } from "../components/contact.context"
import { etapeSociete } from "../model/ParcoursCV"

afterEach(() => {
  cleanup()
})

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

  const boutonRevenir = screen.getByRole("button", { name: "Terminer" })

  boutonRevenir.click()

  await waitFor(() => {
    // screen.getByText(/Vos coordonnées/i)
    // screen.getByRole("textbox", { name: "Nom" })
    screen.getByText("Nom de la société : SAS RH")
  })
})

const InfoSociete = () => {
  const { contact } = useContext(ContactContext)

  return (
    <div id="infoSociete">
      {contact?.societe && <p>Nom de la société : {contact.societe.nom}</p>}
    </div>
  )
}
