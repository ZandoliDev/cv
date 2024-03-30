import { expect, test } from "vitest"
import { Etape } from "../model/Etape"

test("A l'initialisation du parcours, on affiche la première étape", () => {
  const premiereEtape = new Etape("etape", <div>Première étape</div>)

  expect(premiereEtape.getContenu()).toEqual(premiereEtape.getContenu())
})

test("Lorsque l'utilisateur a terminé la première étape, on affiche la deuxième étape", () => {
  const deuxiemeEtape = new Etape("etape2", <div>Deuxième étape</div>)
  const premiereEtape = new Etape("etape1", <div>Première étape</div>)
  premiereEtape.setEtapeSuivante(deuxiemeEtape)

  expect(premiereEtape.suivante()?.getContenu()).toEqual(deuxiemeEtape.getContenu())
})

test("Si l'utilisateur retourne en arrière depuis la deuxième étape, on affiche la première étape", () => {
  const deuxiemeEtape = new Etape("etape2", <div>Deuxième étape</div>)
  const premiereEtape = new Etape("etape1", <div>Première étape</div>)
  premiereEtape.setEtapeSuivante(deuxiemeEtape)

  expect(deuxiemeEtape.precedente()).toBeDefined()
  expect(deuxiemeEtape.precedente()?.getContenu()).toEqual(premiereEtape.getContenu())
})

test("Si l'étape n'a pas d'étape suivante alors elle est initiale", () => {
  const etape = new Etape("etape", <div>Etape</div>)

  expect(etape.isFinale()).toBeTruthy()
})

test("Si l'étape a une étape suivante alors elle n'est pas finale", () => {
  const etape = new Etape("etape1", <div>Etape</div>)
  const etapeSuivante = new Etape("etape2", <div>Etape suivante</div>)
  etape.setEtapeSuivante(etapeSuivante)

  expect(etape.isFinale()).toBeFalsy()
})

test("Si l'étape n'a pas d'étape précédente alors elle est initiale", () => {
  const etape = new Etape("etape", <div>Etape</div>)

  expect(etape.isInitiale()).toBeTruthy()
})

test("Si l'étape a une étape précédente alors elle n'est pas initiale", () => {
  const etape = new Etape("etape2", <div>Etape</div>)
  const etapePrecedente = new Etape("etape1", <div>Etape précédente</div>)
  etapePrecedente.setEtapeSuivante(etape)

  expect(etape.isInitiale()).toBeFalsy()
})
