const produtos = JSON.parse(localStorage.getItem("produtosPadrao")) || [
    { nome: "Paracetamol 500mg", preco: 12.99, imagem: "./../Img/paracetamol.png" },
    { nome: "Dipirona 500g", preco: 10.50, imagem: "./../Img/dipirona.png" },
    { nome: "Ibuprofeno 400mg", preco: 18.00, imagem: "./../Img/ibuprofeno.png" },
    { nome: "Aspirina 500mg", preco: 15.20, imagem: "./../Img/aspirina.png" },
    { nome: "Amoxicilina 500mg", preco: 25.00, imagem: "./../Img/amoxicilina.png" },
    { nome: "Azitromicina", preco: 22.00, imagem: "./../Img/azitromicina.png" },
    { nome: "Loratadina", preco: 9.90, imagem: "./../Img/loratadina.png" },
    { nome: "Omeprazol", preco: 11.50, imagem: "./../Img/omeprazol.png" },
    { nome: "Enalapril", preco: 8.99, imagem: "./../Img/enalapril.png" },
    { nome: "Losartana", preco: 13.49, imagem: "./../Img/losartana.png" },
    { nome: "Sinvastatina", preco: 16.99, imagem: "./../Img/sinvastatina.png" },
    { nome: "Clonazepam", preco: 19.99, imagem: "./../Img/clonazepam.png" }
  ];
  
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const index = localStorage.getItem("produtoDetalhe");
  const produto = produtos[index];
  
  // Preenche a tela com o produto
  document.getElementById("detalhe-imagem").src = produto.imagem;
  document.getElementById("detalhe-nome").innerText = produto.nome;
  document.getElementById("detalhe-preco").innerText = `R$ ${produto.preco.toFixed(2)}`;
  
  // Clique em adicionar
  document.getElementById("btn-adicionar").onclick = () => {
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    mostrarMensagem("Adicionado ao carrinho com sucesso!");
  };
  
  // Navegação
  document.getElementById("home-icon").onclick = () => {
    window.location.href = "./../Tela/principal.html";
  };
  
  document.getElementById("cart-icon").onclick = () => {
    window.location.href = "./../Carrinho/carrinho.html";
  };
  
  // Mensagem
  function mostrarMensagem(texto) {
    const msg = document.getElementById("mensagem-popup");
    const textoMsg = document.getElementById("mensagem-texto");
    textoMsg.innerText = texto;
    msg.style.display = "block";
  }
  
  function fecharMensagem() {
    document.getElementById("mensagem-popup").style.display = "none";
  }
  