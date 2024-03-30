import { cleanup, render, screen } from "@testing-library/react"
import { afterEach, test } from "vitest"
import { ModaleTelechargementCv } from "../components/ModaleTelechargementCv"

afterEach(() => {
  cleanup()
})

test("Affichage d'une étape simple", () => {
  render(
    <ModaleTelechargementCv
      fonctionAnnulation={() => {}}
    />
  )

  screen.getByText(/Je suis ravi de votre intérêt pour mon profil/i)
  screen.getByRole("button", { name: "Annuler" })
  screen.getByRole("button", { name: "Continuer" })
})
