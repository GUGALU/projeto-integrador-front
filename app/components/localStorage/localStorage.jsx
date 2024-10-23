export default class ArtefatoService {
  static getArtefatos() {
    const artefatos = JSON.parse(localStorage.getItem("artefatos"));
    if (!Array.isArray(artefatos)) {
      return [];
    }
    console.log("Retrieved artefatos:", artefatos); // Debug log
    return artefatos;
  }

  static adicionarArtefato(artefato) {
    let artefatos = JSON.parse(localStorage.getItem("artefatos"));
    if (!Array.isArray(artefatos)) {
      artefatos = [];
    }
    artefatos.push(artefato);
    console.log("Adding artefato:", artefato); // Debug log
    localStorage.setItem("artefatos", JSON.stringify(artefatos)); // Salva o array atualizado
    console.log("Updated artefatos:", artefatos); // Debug log
  }
}