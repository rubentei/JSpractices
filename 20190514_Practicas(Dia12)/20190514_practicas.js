//FRUIT SHOP

var products = [{
        name: "Manzana",
        price: 0.75
    },
    {
        name: "Castaña",
        price: 0.69
    },
    {
        name: "Pera",
        price: 0.79
    },
    {
        name: "Melon",
        price: 0.89
    }
];

function add_product(product_name) {
    let random_price = parseFloat((Math.random()).toFixed(2));
    let product_object = {
        name: product_name,
        price: random_price
    };
    products.push(product_object);
    console.table(products);
    console.log(`El producto se ha añadido correctamente`);
};

function delete_product(product_name) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].name === product_name) {
            products.splice(i, 1);
            i--;
        };
    };
    console.table(products);
    console.log(`${product_name} ha sido eliminado correctamente`);
};

function add_many_products() {
    do {
        product_name = prompt(`Introduce el nombre del producto que deseas añadir. Para salir, teclea 0`);
        add_product(product_name);

    } while (product_name != 0);

    if(product_name == 0){
        products.pop();
    }

    console.table(products);
}

function menu() {
    console.log(`FRUTERIA FULANITO`);
    console.log(`1. Añadir producto`);
    console.log(`2. Borrar producto`);
    console.log(`3. Añadir varios productos`);

    let option = prompt(`Introduce la opción deseada del 1 al 3`);

    switch (option) {
        case "1":
            product_name = prompt(`Introduce el nombre del producto que deseas añadir`);
            add_product(product_name);
            break;

        case "2":
            product_name = prompt(`Introduce el nombre del producto que deseas borrar`);
            delete_product(product_name);
            break;

        case "3":
            add_many_products();
            break;

        default:
            alert(`Introduce una opción válida entre el 1 y el 3.`)
            break;
    };
};

menu();