/*
    Objetivos: 
        1. Hacer una app desde consola para una tienda.
        2. Que pueda agregar productos.
        3. Que pueda listar productos.
        4. QUe pueda buscar por ID del producto.
        5. Que pueda editar productos.
        6. Que pueda eliminar productos.
        7. Que sea interactivo o que tenga comunicación con el usuario.
        8. Que esté en constante ejecución hasta que se le indique.
*/

import PromptSync from "prompt-sync";
import { createProduct, getProduct, getProductById } from "./service/ProductService";

const prompt = PromptSync();

const readNumber = (message: string): number => {
    return Number(prompt(message));
};

const showMenu = (): void => {
    console.log("\n MENU");
    console.log("1. Crear Producto");
    console.log("2. Listar Producto");
    console.log("3. Buscar Producto por ID");
    console.log("4. Editar Producto");
    console.log("5. Eliminar Producto");
    console.log("0. Salir");
};

const create = (): void => {
    const name = prompt("Ingrese el nombre del producto: ");
    const price = readNumber("Ingrese el precio: ");
    const stock = readNumber("Ingrese el stock: ");

    if (!name || price <= 0 || stock < 0) {
        console.log("Datos inválidos. Intente nuevamente.");
        return;
    }

    const product = createProduct(name, price, stock);

    console.log("Producto creado correctamente.");
    console.log(product);
};

const list = (): void => {
    const products = getProduct();

    if (products.length === 0) {
        console.log("No hay productos registrados.");
        return;
    }

    console.table(products);
}

const search = (): void => {
    const id = readNumber("Ingrese el ID del producto: ");
    const product = getProductById(id);

    if (!product) {
        console.log("Producto no encontrado.");
        return;
    }

    console.log("Producto encontrado.");
    console.table(product);
};

let opcion: number = 1;

while (opcion != 0) {
    showMenu();
    opcion = readNumber("Seleccione una opción: ");

    switch (opcion) {
        case 1:
            create();
            break;
        case 2:
            list();
            break;
        case 3:
            search();
            break;
        default:
            console.log("Opción Inválida.");
            break;
    }
};