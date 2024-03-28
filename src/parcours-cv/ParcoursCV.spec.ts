import { expect, test } from "vitest"
import { Etape } from "./Etapes"

test("A l'initialisation du parcours, on affiche la première étape", () => {
  const premiereEtape = new Etape("Première étape")

  expect(premiereEtape.getContenu()).toEqual(premiereEtape.getContenu())
})

test("Lorsque l'utilisateur a terminé la première étape, on affiche la deuxième étape", () => {
  const deuxiemeEtape = new Etape("Deuxième étape")
  const premiereEtape = new Etape("Première étape")
  premiereEtape.setEtapeSuivante(deuxiemeEtape)

  expect(premiereEtape.suivante()?.getContenu()).toEqual(deuxiemeEtape.getContenu())
})

test("Si l'utilisateur retourne en arrière depuis la deuxième étape, on affiche la première étape", () => {
  const deuxiemeEtape = new Etape("Deuxième étape",)
  const premiereEtape = new Etape("Première étape")
  deuxiemeEtape.setEtapePrecedente(premiereEtape)

  expect(deuxiemeEtape.precedente()?.getContenu()).toEqual(premiereEtape.getContenu())
})

test("Si l'étape n'a pas d'étape suivante alors elle est initiale", () => {
  const etape = new Etape("Etape")

  expect(etape.isFinale()).toBeTruthy()
})

test("Si l'étape a une étape suivante alors elle n'est pas finale", () => {
  const etape = new Etape("Etape")
  const etapeSuivante = new Etape("Etape suivante")
  etape.setEtapeSuivante(etapeSuivante)

  expect(etape.isFinale()).toBeFalsy()
})

test("Si l'étape n'a pas d'étape précédente alors elle est initiale", () => {
  const etape = new Etape("Etape")

  expect(etape.isInitiale()).toBeTruthy()
})

test("Si l'étape a une étape précédente alors elle n'est pas initiale", () => {
  const etape = new Etape("Etape")
  const etapePrecedente = new Etape("Etape précédente")
  etape.setEtapePrecedente(etapePrecedente)

  expect(etape.isInitiale()).toBeFalsy()
})
