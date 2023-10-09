localStorage.setItem("nombre", "Peio");
localStorage.setItem("edad", 35);

//guardo el objeto en el localStorage como texto
localStorage.setItem("objeto", JSON.stringify({ nombre: "Peio", edad: 35 }));

//lo recupero como texto
let objeto = localStorage.getItem("objeto");

console.log(objeto);

//lo recupero como objeto
let objetoParsed = JSON.parse(localStorage.getItem("objeto"));

console.log(objetoParsed);

//borrar una key del localStorage
localStorage.removeItem("nombre");

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then((res) => {
    res.results.forEach((pokemon) => {
      //   document.querySelector("body").innerHTML += `
      //   <div>
      //   <p>${pokemon.name}</p>
      //   <button id=${pokemon.name}>Guardar en favoritos</button>
      //   </div>`;

      let div = document.createElement("div");
      let p = document.createElement("p");
      let button = document.createElement("button");

      button.id = pokemon.name;
      button.textContent = "Añadir a favoritos";
      p.textContent = pokemon.name;

      div.append(p, button);
      document.querySelector("body").appendChild(div);

      document
        .querySelector(`#${pokemon.name}`)
        .addEventListener("click", function () {
          //   alert(this.id);

          let favsArray = [];

          if (localStorage.getItem("favs")) {
            favsArray = JSON.parse(localStorage.getItem("favs"));
          }

          favsArray.push(this.id);

          localStorage.setItem("favs", JSON.stringify(favsArray));
        });
    });
    // ejemplo textContent e innerHTML
    // document.querySelector("body").innerHTML += "<p>Hola qué tal</p>";
    // document.querySelector("body").textContent = "<p>Hola qué tal</p>";
  });
