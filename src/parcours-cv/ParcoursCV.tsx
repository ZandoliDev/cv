import { ComponentIntroduction } from "./ComponentIntroduction";
import { ComponentSociete } from "./ComponentSociete";
import { Etape } from "./Etapes";

export const etapeIntroduction = new Etape(<ComponentIntroduction />)
export const etapeSociete = new Etape(<ComponentSociete />)


etapeIntroduction.setEtapeSuivante(etapeSociete)