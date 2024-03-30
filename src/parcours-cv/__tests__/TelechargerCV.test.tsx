import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, test } from "vitest"
import { TelechargerCV } from "../components/TelechargerCV"
import { Etape } from "../model/Etapes"

afterEach(() => {
  cleanup()
})

test("Affichage d'une étape simple", () => {
  render(
    <TelechargerCV etapeCourante={new Etape(<div>Etape Courante</div>)} fermerPopup={() => {}} />
  )

  screen.getByText("Etape Courante")
  screen.getByRole("button", { name: "Annuler" })
  screen.getByRole("button", { name: "Terminer" })
})

test("Affichage de la première de deux étapes", () => {
  const etape1 = new Etape(<div>Etape 1</div>)
  const etape2 = new Etape(<div>Etape 2</div>)
  etape1.setEtapeSuivante(etape2)

  render(<TelechargerCV etapeCourante={etape1} fermerPopup={() => {}} />)

  screen.getByText("Etape 1")
  screen.getByRole("button", { name: "Annuler" })
  screen.getByRole("button", { name: "Continuer" })
})

test("Affichage de la deuxième de deux étapes", () => {
  const etape1 = new Etape(<div>Etape 1</div>)
  const etape2 = new Etape(<div>Etape 2</div>)
  etape1.setEtapeSuivante(etape2)

  render(<TelechargerCV etapeCourante={etape2} fermerPopup={() => {}} />)

  screen.getByText("Etape 2")
  screen.getByRole("button", { name: "Annuler" })
  screen.getByRole("button", { name: "Revenir" })
  screen.getByRole("button", { name: "Terminer" })
})

test("Affichage de la deuxième de trois étapes", () => {
  const etape1 = new Etape(<div>Etape 1</div>)
  const etape2 = new Etape(<div>Etape 2</div>)
  const etape3 = new Etape(<div>Etape 3</div>)
  etape1.setEtapeSuivante(etape2)
  etape2.setEtapeSuivante(etape3)

  render(<TelechargerCV etapeCourante={etape2} fermerPopup={() => {}} />)

  screen.getByText("Etape 2")
  screen.getByRole("button", { name: "Annuler" })
  screen.getByRole("button", { name: "Revenir" })
  screen.getByRole("button", { name: "Continuer" })
})

test("A la première de deux étapes, quand on clique sur Continuer, on passe à la deuxième étape", () => {
  const etape1 = new Etape(<div>Etape 1</div>)
  const etape2 = new Etape(<div>Etape 2</div>)
  etape1.setEtapeSuivante(etape2)

  render(<TelechargerCV etapeCourante={etape1} fermerPopup={() => {}} />)

  fireEvent.click(screen.getByRole("button", { name: "Continuer" }))

  screen.getByText("Etape 2")
  screen.getByRole("button", { name: "Annuler" })
  screen.getByRole("button", { name: "Revenir" })
  screen.getByRole("button", { name: "Terminer" })
})

test("A la deuxième de deux étapes, quand on clique sur Revenir, on passe à la première étape", () => {
  const etape1 = new Etape(<div>Etape 1</div>)
  const etape2 = new Etape(<div>Etape 2</div>)
  etape1.setEtapeSuivante(etape2)

  render(<TelechargerCV etapeCourante={etape2} fermerPopup={() => {}} />)

  fireEvent.click(screen.getByRole("button", { name: "Revenir" }))

  screen.getByText("Etape 1")
  screen.getByRole("button", { name: "Annuler" })
  screen.getByRole("button", { name: "Continuer" })
})
