export class Etape {
  private etapeSuivante?: Etape
  private etapePrecedente?: Etape

  constructor(private readonly contenu: any) {}

  suivante() {
    return this.etapeSuivante
  }

  precedente() {
    return this.etapePrecedente
  }

  getContenu() {
    return this.contenu
  }

  setEtapeSuivante(etape: Etape) {
    this.etapeSuivante = etape
  }

  setEtapePrecedente(etape: Etape) {
    this.etapePrecedente = etape
  }

  isFinale() {
    return this.etapeSuivante === undefined
  }

  isInitiale() {
    return this.etapePrecedente === undefined
  }
}