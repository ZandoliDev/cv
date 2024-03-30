export class Etape {
  private etapeSuivante?: Etape
  private etapePrecedente?: Etape
  private fonctionValidation?: () => void

  constructor(private readonly contenu: React.ReactElement) {}

  suivante() {
    return this.etapeSuivante
  }

  precedente() {
    return this.etapePrecedente
  }

  getContenu() {
    return this.contenu
  }

  getFonctionValidation() {
    return this.fonctionValidation
  }

  setEtapeSuivante(etape: Etape) {
    this.etapeSuivante = etape
    etape.setEtapePrecedente(this)
  }

  setEtapePrecedente(etape: Etape) {
    this.etapePrecedente = etape
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