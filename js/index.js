const sonserina = document.querySelector("#son");
const corvinal = document.querySelector("#cor");
const lufa = document.querySelector("#luf");
const grifinoria = document.querySelector("#gri");

//Instanciando método XMLHttpRequest
let son = new XMLHttpRequest();
console.log(son);

//Inicializa pedido de requisição
son.open("GET", "/pages/sonserina.html");

//Envia a solicitação da requisição
son.send();

sonserina.addEventListener("click", () => {
  //Testa se a resposta está OK
  if (son.status === 200 && son.readyState === 4) {
    let stringSonserinaDOM = son.response;
    let parser = new DOMParser();
    const sonserinaHTML = parser.parseFromString(
      stringSonserinaDOM,
      "text/html"
    );

    let main = document.querySelector("main");

    const sonserinaMain = sonserinaHTML.querySelector("main");
    main.replaceWith(sonserinaMain);
  }
});

//Instanciando método XMLHttpRequest
let cor = new XMLHttpRequest();
console.log(cor);

//Inicializa pedido de requisição
cor.open("GET", "/pages/corvinal.html");

//Envia a solicitação da requisição
cor.send();

corvinal.addEventListener("click", () => {
  //Testa se a resposta está OK
  if (cor.status === 200 && cor.readyState === 4) {
    let stringCorvinalDOM = cor.response;
    let parser = new DOMParser();
    const corvinalHTML = parser.parseFromString(stringCorvinalDOM, "text/html");

    let main = document.querySelector("main");

    const corvinalMain = corvinalHTML.querySelector("main");
    main.replaceWith(corvinalMain);
  }
});

//Instanciando método XMLHttpRequest
let gri = new XMLHttpRequest();
console.log(gri);

//Inicializa pedido de requisição
gri.open("GET", "grifinoria.html");

//Envia a solicitação da requisição
gri.send();

grifinoria.addEventListener("click", () => {
  //Testa se a resposta está OK
  if (gri.status === 200 && gri.readyState === 4) {
    let stringGrifinoriaDOM = gri.response;
    let parser = new DOMParser();
    const grifinoriaHTML = parser.parseFromString(
      stringGrifinoriaDOM,
      "text/html"
    );

    let main = document.querySelector("main");

    const grifinoriaMain = grifinoriaHTML.querySelector("main");
    main.replaceWith(grifinoriaMain);
  }
});

//Instanciando método XMLHttpRequest
let lufalufa = new XMLHttpRequest();
console.log(lufa);

//Inicializa pedido de requisição
lufalufa.open("GET", "/pages/lufalufa.html");

//Envia a solicitação da requisição
lufalufa.send();

lufa.addEventListener("click", () => {
  //Testa se a resposta está OK
  if (lufalufa.status === 200 && lufalufa.readyState === 4) {
    let stringLufaDOM = lufalufa.response;
    let parser = new DOMParser();
    const lufaHTML = parser.parseFromString(stringLufaDOM, "text/html");

    let main = document.querySelector("main");

    const lufaMain = lufaHTML.querySelector("main");
    main.replaceWith(lufaMain);
  }
});
