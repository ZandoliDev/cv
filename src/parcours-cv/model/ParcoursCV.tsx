import { ComponentIntroduction } from "../components/ComponentIntroduction"
import { ComponentSociete } from "../components/ComponentSociete"
import { Etape } from "./Etapes"

export const etapeIntroduction = new Etape(<ComponentIntroduction />)
export const etapeSociete = new Etape(<ComponentSociete />)

etapeIntroduction.setEtapeSuivante(etapeSociete)
