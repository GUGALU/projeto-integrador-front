export default class AetefatoService {
  static getArtefato() {
    const artefatos = JSON.parse(localStorage.getItem("artefatos")) || [];
    return artefatos;
  }

  static deleteArtefato(artefato) {
    const artefatos = this.getArtefato();
    localStorage.removeItem("artefatos", JSON.stringify(artefatos));
  }
}
