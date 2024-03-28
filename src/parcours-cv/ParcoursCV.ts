import { Etape } from "./Etapes";

export class ParcoursCV {
  private etape: Etape

  constructor({ premierEtape: premiereEtape, etapeCourante }: { premierEtape: Etape; etapeCourante?: Etape }) {
    this.etape = etapeCourante ? etapeCourante : premiereEtape
  }

  suivant() {
    return this.etape.suivante()
  }
}