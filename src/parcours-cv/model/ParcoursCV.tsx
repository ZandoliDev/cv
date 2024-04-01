import { ComponentContact } from "../components/ComponentContact"
import { ComponentIntroduction } from "../components/ComponentIntroduction"
import { Etape } from "./Etape"

export const etapeIntroduction = new Etape("introduction", <ComponentIntroduction />)
export const etapeContact = new Etape("contact", <ComponentContact />)

etapeIntroduction.setEtapeSuivante(etapeContact)

