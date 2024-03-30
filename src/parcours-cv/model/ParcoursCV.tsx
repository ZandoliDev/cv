import { ComponentIntroduction } from "../components/ComponentIntroduction"
import { ComponentSociete } from "../components/ComponentSociete"
import { Etape } from "./Etape"

export const etapeIntroduction = new Etape(<ComponentIntroduction />)
export const etapeSociete = new Etape(<ComponentSociete />)

etapeIntroduction.setEtapeSuivante(etapeSociete)

