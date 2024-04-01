import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react"
import { afterEach, expect, test, vi } from "vitest"
import { ModaleTelechargementCv } from "../components/ModaleTelechargementCv"
import { sauvegarderContact } from "../gateway/contact.gateway"
import { etapeContact } from "../model/ParcoursCV"

afterEach(() => {
  cleanup()
  vi.clearAllMocks()
})

vi.mock("../gateway/contact.gateway", () => ({ sauvegarderContact: vi.fn() }))

test("L'affichage de la modale de téléchargement du CV affiche l'introduction", () => {
  render(<ModaleTelechargementCv fonctionAnnulation={() => {}} fonctionFinalisation={() => {}} />)

  screen.getByText(/Je suis ravi de votre intérêt pour mon profil/i)
  screen.getByRole("button", { name: "Annuler" })
  screen.getByRole("button", { name: "Continuer" })
  const boutonRevenir = screen.queryByRole("button", { name: "Revenir" })

  expect(boutonRevenir).toBeNull()
})

test("Le clic sur le bouton 'Continuer' depuis l'introduction affiche le formulaire de contact", async () => {
  render(<ModaleTelechargementCv fonctionAnnulation={() => {}} fonctionFinalisation={() => {}} />)

  const boutonContinuer = screen.getByRole("button", { name: "Continuer" })

  boutonContinuer.click()

  await waitFor(() => {
    screen.getByText(/Vous/i)
    screen.getByRole("textbox", { name: "Prénom" })
    screen.getByRole("button", { name: "Annuler" })
    screen.getByRole("button", { name: "Revenir" })
    screen.getByRole("button", { name: "Terminer" })
  })
})

test("Le clic sur le bouton 'Revenir' depuis le formulaire de contact affiche l'introduction", async () => {
  render(
    <ModaleTelechargementCv
      fonctionAnnulation={() => {}}
      fonctionFinalisation={() => {}}
      etapeCourante={etapeContact}
    />
  )

  const boutonRevenir = screen.getByRole("button", { name: "Revenir" })

  boutonRevenir.click()

  await waitFor(() => {
    screen.getByText(/Je suis ravi de votre intérêt pour mon profil/i)
  })
})

test("Le clic sur le bouton 'Terminer' depuis le formulaire de contact sauvegarde les informations saisies", async () => {
  vi.mocked(sauvegarderContact).mockResolvedValue()

  render(
      <ModaleTelechargementCv
        fonctionAnnulation={() => {}}
        fonctionFinalisation={() => {}}
        etapeCourante={etapeContact}
      />
  )

  fireEvent.change(screen.getByRole("textbox", { name: "Prénom" }), { target: { value: "Damien" } })
  fireEvent.change(screen.getByRole("textbox", { name: "Nom" }), { target: { value: "Ferol" } })
  fireEvent.change(screen.getByRole("textbox", { name: "Téléphone" }), { target: { value: "01 02 03 04 05" } })
  fireEvent.change(screen.getByRole("textbox", { name: "Email" }), {
    target: { value: "damien.ferol@sasrh.com" },
  })
  fireEvent.change(screen.getByRole("textbox", { name: "Nom de votre société" }), {
    target: { value: "SAS RH" },
  })
  fireEvent.change(screen.getByRole("textbox", { name: "Description de votre société" }), {
    target: { value: "Société de conseil en RH" },
  })
  fireEvent.change(screen.getByRole("textbox", { name: "Site Web de votre société" }), {
    target: { value: "https://sasrh.com" },
  })
  fireEvent.change(screen.getByRole("textbox", { name: "Votre poste dans la société" }), {
    target: { value: "Recruteur" },
  })

  const boutonTerminer = screen.getByRole("button", { name: "Terminer" })

  boutonTerminer.click()

  await waitFor(() => {

    expect(sauvegarderContact).toHaveBeenCalledWith({
      prenom: "Damien",
      nom: "Ferol",
      telephone: "01 02 03 04 05",
      email: "damien.ferol@sasrh.com",
      societe: {
        nom: "SAS RH",
        description: "Société de conseil en RH",
        siteWeb: "https://sasrh.com",
      },
      poste: "Recruteur",
    })
  })
})
