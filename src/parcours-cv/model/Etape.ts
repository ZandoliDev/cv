export class Etape {
  private etapeSuivante?: Etape
  private etapePrecedente?: Etape
  private fonctionValidation?: () => void

  constructor(
    private readonly id: string,
    private readonly contenu: React.ReactElement
  ) {}

  suivante(): Etape {
    if (this.isFinale()) {
      throw new Error("Il n'y a pas d'étape suivante pour l'étape " + this.id)
    }
    return this.etapeSuivante as Etape
  }

  precedente(): Etape {
    if (this.isInitiale()) {
      throw new Error("Il n'y a pas d'étape précédente pour l'étape " + this.id)
    }
    return this.etapePrecedente as Etape
  }

  getId() {
    return this.id
  }

  getContenu() {
    return this.contenu
  }

  getFonctionValidation() {
    return this.fonctionValidation
  }

  setEtapeSuivante(etape: Etape) {
    this.etapeSuivante = etape
    etape.etapePrecedente = this
  }

  setFonctionValidation(fonctionValidation: () => void) {
    this.fonctionValidation = fonctionValidation
  }

  isFinale() {
    return this.etapeSuivante === undefined
  }

  isInitiale() {
    return this.etapePrecedente === undefined
  }
}