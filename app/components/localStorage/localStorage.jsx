export default class ArtefatoService {
    static getArtefatos() {
      const artefatos = JSON.parse(localStorage.getItem('artefatos')) || [];
      return artefatos;
    }
  
    static adicionarArtefato(artefato) {
      const artefatos = this.getArtefatos();
      artefatos.push(artefato);
      localStorage.setItem('artefatos', JSON.stringify(artefatos));
    }
}