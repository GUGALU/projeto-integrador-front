const ArtefatoService = {
  getArtefatos: () => JSON.parse(localStorage.getItem("artefatos")) || [],

  adicionarArtefato: (artefato) => {
    const artefatos = ArtefatoService.getArtefatos();
    artefatos.push(artefato);
    localStorage.setItem("artefatos", JSON.stringify(artefatos));
  },

  atualizarArtefato: (artefatoAtualizado) => {
    const artefatos = ArtefatoService.getArtefatos().map((a) =>
      a.id === artefatoAtualizado.id ? artefatoAtualizado : a
    );
    localStorage.setItem("artefatos", JSON.stringify(artefatos));
  }
};

export default ArtefatoService;
