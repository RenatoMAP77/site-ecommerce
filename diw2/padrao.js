
const cardsPrincipais = document.getElementById('cards_principais');
const produtosDestaque = document.getElementById('produtosdestaque')

//produtos 
//sapatos
fetch('https://diwserver.vps.webdock.cloud/products/category/Footwear%20-%20Shoes').then(res => res.json())
  .then(data => {

    for (let i = 0; i <= 7; i++) {
      let produto = data.products[i];

      const card = document.createElement('div');
      card.classList.add('card');



      card.innerHTML = `
      
      <div class="imagem">
          <img src="${produto.image}" alt="imagem produto">
        </div>
        <div class="titulo">
          <h5>${produto.title}</h5>
        </div>
        <div class="usage">
          <p>Tipo: ${produto.usage}</p>
        </div>
        <div class="preco">
        <a href="detalhes.html?produtoId=${produto.id}" class="btn btn-danger">R$${produto.price}</a>
        </div>
        <div class="rating">
        <p>Nota dos usuários: ${produto.rating.rate}</p>
        </div>
        `
      cardsPrincipais.appendChild(card);

    }
    let i = 0
    let j = 0
    while (i < 4) {
      let jdg = data.products[j];
      if (jdg.rating.rate >= 4.5) {
        produtosDestaque.innerHTML += `
            <div class="row">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src=" ${jdg.image} " class="img-fluid rounded-start" alt="..." style="margin-top:10px;">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${jdg.title}</h5>
                    <p class="card-text">${jdg.usage}</p>
                    <a href="detalhes.html?produtoId=${jdg.id}" class="btn btn-danger">R$${jdg.price}</a>
                    <p> Nota dos usuários: ${jdg.rating.rate}

                  </div>
                </div>
              </div>
            </div>
            </div>
            `
        i++
      }
      j++
    }
  })
  .catch(err => console.log(err))

//sandalia
fetch('https://diwserver.vps.webdock.cloud/products/category/Footwear%20-%20Sandal').then(res => res.json())
  .then(data => {

    for (let i = 0; i <= 7; i++) {
      let produto = data.products[i];

      const card = document.createElement('div');
      card.classList.add('card');



      card.innerHTML = `
      
      <div class="imagem">
          <img src="${produto.image}" alt="imagem produto">
        </div>
        <div class="titulo">
          <h5>${produto.title}</h5>
        </div>
        <div class="usage">
          <p>Tipo: ${produto.usage}</p>
        </div>
        <div class="preco">
        <a href="detalhes.html?produtoId=${produto.id}" class="btn btn-danger">R$${produto.price}</a>
        </div>
        <div class="rating">
        <p>Nota dos usuários: ${produto.rating.rate}</p>
        </div>
        `
      cardsPrincipais.appendChild(card);

    }
    let i = 0
    let j = 0
    while (i < 4) {
      let jdg = data.products[j];
      if (jdg.rating.rate >= 4.5) {
        produtosDestaque.innerHTML += `
            <div class="row">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src=" ${jdg.image} " class="img-fluid rounded-start" alt="..." style="margin-top:10px;">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${jdg.title}</h5>
                    <p class="card-text">${jdg.usage}</p>
                    <a href="detalhes.html?produtoId=${jdg.id}" class="btn btn-danger">R$${jdg.price}</a>
                    <p> Nota dos usuários: ${jdg.rating.rate}

                  </div>
                </div>
              </div>
            </div>
            </div>

            `
        i++
      }
      j++
    }
  })
  .catch(err => console.log(err))

//PAGINA DE DETALHES
// Extrair o ID do parâmetro da URL
const urlParams = new URLSearchParams(window.location.search);
const produtoId = urlParams.get('produtoId');


// Fazer a solicitação para obter os detalhes do produto
fetch(`https://diwserver.vps.webdock.cloud/products/${produtoId}`)
  .then(res => res.json())
  .then(data => {
    // Preencher os elementos HTML com as informações do produto
    document.getElementById('titulo').textContent = data.title;
    document.getElementById('tipo').textContent = data.usage;
    let descricao = document.getElementById('descricao');
    descricao.innerHTML += `${data.description}`
    let img = document.getElementById('img');
    img.innerHTML += `<img src="${data.image}" class="img-fluid" alt="Imagem"></img>`
    document.getElementById('preco').textContent = `R$${data.price}`;
    document.getElementById('nota').textContent = data.rating.rate;
  })
  .catch(err => console.log(err));










//barra de pesquisa
const conteudo = document.getElementById('conteudo')
const pesquisa_input = document.getElementById('pesquisa_input')
conteudo.innerHTML = '';
const itens = []
fetch('https://diwserver.vps.webdock.cloud/products/category/Footwear%20-%20Sandal').then(res => res.json())
  .then(data => {
    for (let i = 0; i < data.products.length; i++) {
      itens.push(data.products[i])
    }
  })
  fetch('https://diwserver.vps.webdock.cloud/products/category/Footwear%20-%20Shoes').then(res => res.json())
  .then(data => {
    for (let i = 0; i < data.products.length; i++) {
      itens.push(data.products[i])
    
    }
    
  })
 console.log(itens)


function addHTML(itens) {
  conteudo.innerHTML +=
    `
<div>
  <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src=" ${itens.image} " class="img-fluid rounded-start" alt="..." style="margin-top:10px;">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${itens.title}</h5>
                    <a href="detalhes.html?produtoId=${itens.id}" class="btn btn-danger">R$${itens.price}</a>
                    
                  </div>
                </div>
              </div>
    </div>
</div>
`
}

pesquisa_input.oninput = () => {
  const searchTerm = pesquisa_input.value.toLowerCase().trim();
  conteudo.innerHTML = "";
  
  if (searchTerm !== '') {
    const filteredItems = itens.filter(item =>
      item.title.toLowerCase().includes(searchTerm)
    );

    for (let i = 0; i < Math.min(filteredItems.length, 4); i++) {
      addHTML(filteredItems[i]);
    }
  }
}














