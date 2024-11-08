const baseDeDatos = [
    {
        categoria: "electrodomésticos",
        productos: [
            { nombre: "calefactor", precio: 6253, descuento: 0.5, img: "https://http2.mlstatic.com/D_NQ_NP_938970-MLA45994715946_052021-O.webp" },
            { nombre: "caloventor", precio: 25999, descuento: 0.7, img: "https://http2.mlstatic.com/D_NQ_NP_832778-MLU70474474494_072023-O.webp" },
            { nombre: "Estufa hongo", precio: 211150, descuento: 0.7, img: "https://http2.mlstatic.com/D_NQ_NP_841221-MLU76793294957_062024-O.webp" },
            { nombre: "Estufa electrica", precio: 41929, descuento: 0.7, img: "https://http2.mlstatic.com/D_NQ_NP_643143-MLU74821429636_032024-O.webp" },
        ]
    },
    {
        categoria: "herramientas",
        productos: [
            { nombre: "Hidrolavadora", precio: 91681, descuento: 0.7, img: "https://http2.mlstatic.com/D_Q_NP_679173-MLU78381109839_082024-P.webp" },
            { nombre: "Taladro", precio: 109034, descuento: 0.7, img: "https://http2.mlstatic.com/D_Q_NP_656678-MLA69951087361_062023-P.webp" },
            { nombre: "Mini motosierra", precio: 211150, descuento: 0.7, img: "https://http2.mlstatic.com/D_Q_NP_742298-MLU74855802541_032024-P.webp" },
            { nombre: "Bordeadora", precio: 84364, descuento: 0.7, img: "https://http2.mlstatic.com/D_NQ_NP_643143-MLU74821429636_032024-O.webp" },
        ]
    }
];

function mostrarCategorias() {
    const categoriasContainer = document.getElementById("categorias");
    categoriasContainer.innerHTML = baseDeDatos.map(cat => `
        <div class="cursor-pointer">
            <h2 class="text-center mt-2 font-bold bg-gray-800 py-2 text-white">${cat.categoria}</h2>
        </div>
        `).join('');
}

function mostrarProductos(productos) {
    const productosContainer = document.getElementById('productos');
    productosContainer.innerHTML = productos.map(prod => `
        <div class="border p-4">
            <img src="${prod.img}" alt="${prod.nombre}" class="w-full h-32 object-cover">
            <h3 class="mt-2 font-bold">${prod.nombre}</h3>
            <p class="text-gray-600">Precio: $${prod.precio }</p>
              <button onclick='agregarAlCarrito(${JSON.stringify(prod)})' class="mt-2 bg-indigo-500 hover:bg-indigo-600 text-white py-1 px-2 rounded">Añadir al Carrito</button>
        </div>
        `).join('');
}
function filtrarProductos(categoria) {
    const categoriaSeleccionada = baseDeDatos.find(cat => cat.categoria === categoria);
    mostrarProductos(categoriaSeleccionada.productos);
}
mostrarCategorias()
mostrarProductos(baseDeDatos.flatMap(cat => cat.productos))