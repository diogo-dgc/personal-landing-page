// Função para abrir o modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Função para fechar o modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  // Adicione um evento de clique a um botão (ou outro elemento) para abrir o modal
  document.getElementById("myButton").addEventListener("click", openModal);