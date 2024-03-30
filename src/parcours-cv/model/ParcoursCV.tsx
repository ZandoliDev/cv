import { ComponentIntroduction } from "../components/ComponentIntroduction"
import { ComponentSociete } from "../components/ComponentSociete"
import { Etape } from "./Etape"

export const etapeIntroduction = new Etape("introduction", <ComponentIntroduction />)
export const etapeSociete = new Etape("societe", <ComponentSociete />)

etapeIntroduction.setEtapeSuivante(etapeSociete)

