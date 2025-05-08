// Array de produtos simulados
const produtos = [
    { nome: "Paracetamol 750mg", preco: 12.99, imagem: "./../Img/paracetamol.png" },
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
  
  // Simula um carrinho salvo no localStorage
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
  // Preenche os produtos automaticamente
  window.onload = () => {
    const container = document.querySelector(".produtos-container");
    container.innerHTML = "";
  
    produtos.forEach((produto, index) => {
      const div = document.createElement("div");
      div.className = "produto";
      div.onclick = () => irParaDetalhe(index);
  
      div.innerHTML = `
        <span class="preco">R$ ${produto.preco.toFixed(2)}</span>
        <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem"/>
        <span class="nome-produto">${produto.nome}</span>
        <div class="botao-adicionar" onclick="adicionarAoCarrinho(event, ${index})">
          <span>+</span>
        </div>
      `;
  
      container.appendChild(div);
    });
  
    // Clique na casinha
    document.getElementById("home-icon").onclick = () => {
      window.location.href = "./../Tela/principal.html";
    };
  
    // Clique no carrinho
    document.getElementById("cart-icon").onclick = () => {
      window.location.href = "./../Carrinho/carrinho.html";
    };
  };
  
  // Adiciona ao carrinho
  function adicionarAoCarrinho(event, index) {
    event.stopPropagation(); // impedir que vá pra tela de detalhe
  
    const produto = produtos[index];
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  
    mostrarMensagem("Adicionado ao carrinho com sucesso!");
  }
  
  // Ir para a segunda página com o índice do produto
  function irParaDetalhe(index) {
    localStorage.setItem("produtoDetalhe", index);
    window.location.href = "./../Detalhe/detalhe.html";
  }
  
  // Exibe mensagem temporária
  function mostrarMensagem(texto) {
    const msg = document.getElementById("mensagem-popup");
    const textoMsg = document.getElementById("mensagem-texto");
    textoMsg.innerText = texto;
    msg.style.display = "block";
  }
  
  // Fecha popup
  function fecharMensagem() {
    document.getElementById("mensagem-popup").style.display = "none";
  }
  