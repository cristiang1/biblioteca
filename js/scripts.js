
document.addEventListener('DOMContentLoaded', () => {
    const libros = [
        { titulo: 'El Quijote', autor: 'Miguel de Cervantes' },
        { titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez' },
        { titulo: 'La Sombra del Viento', autor: 'Carlos Ruiz Zafón' },
        { titulo: '1984', autor: 'George Orwell' },
        { titulo: 'Fahrenheit 451', autor: 'Ray Bradbury' },
        { titulo: 'El Laberinto de los Espíritus', autor: 'Carlos Ruiz Zafón' },
        { titulo: 'La Chica del Tren', autor: 'Paula Hawkins' },
        { titulo: 'El Nombre del Viento', autor: 'Patrick Rothfuss' }
    ];

    const autores = [
        { nombre: 'Miguel de Cervantes', nacionalidad: 'Española' },
        { nombre: 'Gabriel García Márquez', nacionalidad: 'Colombiana' },
        { nombre: 'Carlos Ruiz Zafón', nacionalidad: 'Española' },
        { nombre: 'George Orwell', nacionalidad: 'Británica' },
        { nombre: 'Ray Bradbury', nacionalidad: 'Estadounidense' },
        { nombre: 'Paula Hawkins', nacionalidad: 'Británica' },
        { nombre: 'Patrick Rothfuss', nacionalidad: 'Estadounidense' }
    ];

    const categorias = [
        'Ficción',
        'No Ficción',
        'Ciencia Ficción',
        'Fantasía',
        'Biografía',
        'Historia',
        'Misterio',
        'Romance'
    ];

    const listaLibros = document.querySelector('.book-list');
    const listaAutores = document.querySelector('.author-list');
    const listaCategorias = document.querySelector('.category-list');
    const listaNovedades = document.querySelector('.novelty-list');
    const listaResultadosBusqueda = document.querySelector('.search-results-list');

    // Función para agregar libros
    libros.forEach(libro => {
        const li = document.createElement('li');
        li.textContent = `${libro.titulo} - ${libro.autor}`;
        listaLibros.appendChild(li);
    });

    // Función para agregar autores
    autores.forEach(autor => {
        const li = document.createElement('li');
        li.textContent = `${autor.nombre} - ${autor.nacionalidad}`;
        listaAutores.appendChild(li);
    });

    // Función para agregar categorías
    categorias.forEach(categoria => {
        const li = document.createElement('li');
        li.textContent = categoria;
        listaCategorias.appendChild(li);
    });

    // Mostrar/Ocultar secciones
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const sections = document.querySelectorAll('main section');
            sections.forEach(section => {
                if (section === targetSection) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
        });
    });

    // Manejo del formulario de contacto
    const form = document.querySelector('#contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Mensaje enviado. Nos pondremos en contacto contigo pronto.');
        form.reset();
    });

    // Funcionalidad de búsqueda
    const searchButton = document.querySelector('#search-button');
    const searchInput = document.querySelector('#search-input');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        listaResultadosBusqueda.innerHTML = '';

        const resultadosLibros = libros.filter(libro => libro.titulo.toLowerCase().includes(query) || libro.autor.toLowerCase().includes(query));
        const resultadosAutores = autores.filter(autor => autor.nombre.toLowerCase().includes(query));
        const resultadosCategorias = categorias.filter(categoria => categoria.toLowerCase().includes(query));

        resultadosLibros.forEach(libro => {
            const li = document.createElement('li');
            li.textContent = `${libro.titulo} - ${libro.autor}`;
            listaResultadosBusqueda.appendChild(li);
        });

        resultadosAutores.forEach(autor => {
            const li = document.createElement('li');
            li.textContent = autor.nombre;
            listaResultadosBusqueda.appendChild(li);
        });

        resultadosCategorias.forEach(categoria => {
            const li = document.createElement('li');
            li.textContent = categoria;
            listaResultadosBusqueda.appendChild(li);
        });

        // Mostrar resultados de búsqueda
        const sections = document.querySelectorAll('main section');
        sections.forEach(section => {
            if (section.id === 'search-results') {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    });
});
