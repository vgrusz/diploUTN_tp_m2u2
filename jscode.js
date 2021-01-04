let listaProductos = [
  {
    nombre: "harina",
    precio: 35,
  },
  {
    nombre: "pan",
    precio: 25,
  },
  {
    nombre: "papa",
    precio: 52,
  },
  {
    nombre: "palta",
    precio: 55,
  },
  {
    nombre: "fideos",
    precio: 85,
  },
  {
    nombre: "aceite",
    precio: 350,
  },
  {
    nombre: "sopa",
    precio: 86,
  },
  {
    nombre: "mermelada",
    precio: 108,
  },
  {
    nombre: "porotos",
    precio: 69,
  },
  {
    nombre: "lentejas",
    precio: 85,
  },
  {
    nombre: "mandarina",
    precio: 43,
  },
  {
    nombre: "banana",
    precio: 79,
  },

  {
    nombre: "leche de almendras",
    precio: 145,
  },
  {
    nombre: "papel higiénico",
    precio: 147,
  },
  {
    nombre: "lavandina",
    precio: 55,
  },
  {
    nombre: "alcohol en gel",
    precio: 123,
  },
  {
    nombre: "shampoo",
    precio: 400,
  },
  {
    nombre: "arroz",
    precio: 66,
  },
  {
    nombre: "harina",
    precio: 35,
  },
  {
    nombre: "salsa de tomate",
    precio: 35,
  },
];
var total = 0;
// Variable global en la que se mantendrá el valor total de la compra

function listContainerLoad() {
  /*  Función que carga la lista de productos al inicio, nótese que el div que contiene la
lista iniciamente tiene una clase con display:none para que no se haga un re render por cada 
child que se le agrega */

  let listContainer = document.getElementById("list");
  //Carga en listContainer el DIV que va a contener la lista de productos

  for (let i = 0; i < listaProductos.length; i++) {
    /*  Para cada elemento de la lista de productos crea un DIV con el nombre, precio y un 
    botón que llama a la función que agrega el ítem al carrito de compras */

    let itemDiv = document.createElement("div");
    /* carga en la variable itemDiv el DIV que contendrá nombre/precio/botón agregar a carrito */

    itemDiv.innerHTML =
      listaProductos[i].nombre + " $ " + listaProductos[i].precio;

    let buyButton = document.createElement("button");
    /* carga en la variable buyButton el botón de agregar a carrito */

    buyButton.innerHTML =
      "Agregar a carrito " +
      "<img src='carrito-de-compras.svg' class='imageInButton' />";
    /* coloca el texto y la imagen internos del botón */

    buyButton.setAttribute("onClick", "addToShopCart(" + i + ")");
    /* guarda en el botón agregarACarrito la función que agrega el producto y el parámetro 
    con el que la función será llamada, siendo este parámetro la posición del producctoen el 
    array, generándose así un ID único para cada producto */

    buyButton.classList.add("imagedButton");
    /* agrega esta clase para controlar el tamaño de la imagen dentro del botón */

    itemDiv.setAttribute("id", "productListItem" + i);

    /* agrega un id único que representa dónde está el elemento y su posición en el array */

    itemDiv.classList.add("item");

    /* agrega la clase item al DIV que contiene el nombre y precio y botón de agregar a carrito */

    itemDiv.appendChild(buyButton);
    /* agrega el botón de agregarACarrito al div del producto */

    listContainer.appendChild(itemDiv);
    /* agrega el DIV con el producto al DIV de la lista de productos*/
  }
  listContainer.classList.remove("hiddenItem");
  listContainer.classList.add("list");
  /* por último, se saca la case de elemento oculto y se pone la clase definitiva, lo cual se 
  hizo para que no se renderee el DIV en cada iteración del FOR */
}

function addToShopCart(productIndex) {
  /* función que añade el producto al carrito y lo borra de la lista de productos
  para evitar la duplicación */

  let shopCartContainer = document.getElementById("shopCart");

  /* carga en la variable shopCartContainer el DIV que contiene los elementos del carrito */

  let shopCartItem = document.createElement("div");
  /* crea el DIV que contendrá el producto en el carrito */

  shopCartItem.innerHTML =
    listaProductos[productIndex].nombre +
    " $ " +
    listaProductos[productIndex].precio;
  /* inserta en el DIV del producto el texto descriptivo, nombre y precio */

  let removeButton = document.createElement("button");
  /* crea el botón que permite remover el ítem del carrito */

  removeButton.setAttribute(
    "onClick",
    "shopCartRemoveElement(" + productIndex + ")"
  );
  /* asigna la función del botón removerProducto guardando el parámetro que identifica al producto */

  removeButton.innerHTML =
    "Arrepentirse" + "<img src='regreso.svg' class='imageInButton' />";
  removeButton.classList.add("imagedButton");
  shopCartItem.appendChild(removeButton);
  /* agrega texto interno y clase al botón y lo inserta en el DIV del producto que luego
irá en el DIV del carrito */

  shopCartItem.setAttribute("id", "shopCartItem" + productIndex);
  shopCartItem.classList.add("item");
  /* agrega atributos y clase al DIV que contiene el producto */

  shopCartContainer.appendChild(shopCartItem);
  /* agrega el DIV con el producto al DIV del carrito */

  let listDiv = document.getElementById("productListItem" + productIndex);
  listDiv.classList.remove("item");
  listDiv.classList.add("hiddenItem");
  /* obtiene el DIV del producto en la lista de productos y lo oculta quitándole la clase item
  y poniéndole la clase hiddenItem para prevenir la duplicación en el carrito */

  total += listaProductos[productIndex].precio;
  /* actualiza la variable global con el total de la compra */
}

function shopCartRemoveElement(productIndex) {
  /* función que retira un producto del carrito y lo vuelve nuevamente visible en la lista
de productos */

  let listDiv = document.getElementById("productListItem" + productIndex);

  /* obtiene en la variable listDiv el div que contiene al producto en la lista de productos
  el cual está oculto (class hiddenItem) para prevenir la duplicación */

  listDiv.classList.remove("hiddenItem");
  listDiv.classList.add("item");
  /* vuelve visible el producto en la lista de productos quitando la clase hiddenitem
  y poniendo la clase item */

  let shopCartDiv = document.getElementById("shopCartItem" + productIndex);
  /* obtiene en la variabe ShopCartDiv el DIV con el producto que está dentro del DIV del carrito */

  let shopCartContainer = document.getElementById("shopCart");
  /* obtiene en la variable shopCartContainer el DIV del carrito */

  shopCartContainer.removeChild(shopCartDiv);
  /* elimina del DIV del carrito el DIV con el producto */

  total -= listaProductos[productIndex].precio;
  /* actualiza la variable global que tiene el precio total de la compra */
}
