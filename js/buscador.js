document.addEventListener('DOMContentLoaded', () => {

    const allProductsData = [
        // --- POSTRES ---
        {
            id: 'carrot_cake',
            category: 'postres',
            url: '/html/Postres/carrotcake.html',
            img: '/img/postres/carrot cake.jpeg',
            name: 'carrot cake',
            price: '07.00',
            vendor: 'Ana Flores',
            keywords: 'dulce zanahoria postre',
            subCategories: ['Caseros', 'promocion'],
            publishDate: '2025-06-25 10:30:00'
        },
        {
            id: 'cheesecake_Maracuya',
            category: 'postres',
            url: '/html/Postres/cheesecakeMaracuya.html',
            img: '/img/postres/cheesecake Maracuya.jpeg',
            name: 'cheesecake Maracuya',
            price: '10.00',
            vendor: 'Carlos Ruiz',
            keywords: 'dulce maracuya postre',
            subCategories: ['Caseros', 'tortas'],
            publishDate: '2025-06-24 18:00:00'
        },
        {
            id: 'brownie_choco',
            category: 'postres',
            url: '/html/product_details/helado_fresa.html',
            img: '/img/Postres/brownie bañado en chocolate.jpg',
            name: 'brownie bañado en chocolate',
            price: '05.00',
            vendor: 'Maria Perez ',
            keywords: 'brownie chocolate',
            subCategories: ['galletas', 'chocolate', 'promocion'],
            publishDate: '2025-06-23 09:15:00'
        },

        {
            id: 'brownie_choco_almendras',
            category: 'postres',
            url: '/html/product_details/helado_fresa.html',
            img: '/img/Postres/brownie chocolate con almendras.jpg',
            name: 'brownie bañado en chocolate con almendras',
            price: '06.00',
            vendor: 'Juana del Arco ',
            keywords: 'brownie chocolate almendra',
            subCategories: ['galletas', 'chocolate', 'promocion'],
            publishDate: '2025-06-23 12:15:00'
        },

        {
            id: 'brownies_chocolate',
            category: 'postres',
            url: '/html/product_details/helado_fresa.html',
            img: '/img/Postres/brownies chocolate.jpg',
            name: 'brownies chocolate',
            price: '05.50',
            vendor: 'Juana del Arco ',
            keywords: 'brownies chocolate',
            subCategories: ['galletas', 'chocolate'],
            publishDate: '2025-07-10 12:15:00'
        },
        {
            id: 'Pastel_Piña',
            category: 'postres',
            url: '/html/Postres/PastelPiña.html',
            img: '/img/Postres/Pastel de Piña.jpg',
            name: 'Pastel de Piña',
            price: '05.50',
            vendor: 'Juana del Arco ',
            keywords: 'Pastel Piña',
            subCategories: ['Caseros'],
            publishDate: '2025-07-09 12:15:00'
        },







        // --- COMIDA ---
        {
            id: 'FRUTOS_SECOS',
            category: 'comida',
            url: '/html/product_details/sandwich_pollo.html',
            img: '/img/comida/FRUTOS SECOS 6.jpg',
            name: 'Frutos Secos',
            price: '07.00',
            vendor: 'Sofía Castro',
            keywords: 'frutos secos',
            subCategories: ['snacks'],
            publishDate: '2025-06-20 16:30:00'
        },

        {
            id: 'Empanada_espcial',
            category: 'comida',
            url: '/html/product_details/sandwich_pollo.html',
            img: '/img/comida/EMPADAS ESPECIALES 3.jpg',
            name: 'Empanadas Especiales',
            price: '03.00',
            vendor: 'Sofía Castro',
            keywords: 'empanada',
            subCategories: ['casero','promocion'],
            publishDate: '2025-06-20 16:30:00'
        },
        {
            id: 'mermelada',
            category: 'comida',
            url: '/html/product_details/sandwich_pollo.html',
            img: '/img/comida/Mermelada Arándano 9.jpg',
            name: 'Mermelada Arándano',
            price: '09.00',
            vendor: 'Sofía Castro',
            keywords: 'mermelada',
            subCategories: ['vegana'],
            publishDate: '2025-06-20 16:30:00'
        },
        {
            id: 'ensalada',
            category: 'comida',
            url: '/html/product_details/sandwich_pollo.html',
            img: '/img/comida/Ensaladas de frutas saludables 10.jpg',
            name: 'Ensaladas de frutas saludables',
            price: '10.00',
            vendor: 'Sofía Castro',
            keywords: 'ensalada',
            subCategories: ['vegana', 'casero'],
            publishDate: '2025-06-20 16:30:00'
        },



        // --- Accesrios ---
        {
            id: 'Calculadora_Casio_Fx-991',
            category: 'accesorios',
            url: '/html/Accesorios/calculadora.html',
            img: '/img/accesorios/Calculadora Casio Fx-991 LA PLUS.jpg',
            name: 'Calculadora Casio Fx-991 LA PLUS',
            price: '60.00',
            vendor: 'Daniel Vargas',
            keywords: 'Calculadora Casio Fx-991 LA PLUS',
            subCategories: ['tecnologia'],
            publishDate: '2025-06-19 08:00:00'
        },

        {
            id: 'AUDIFONOS_INALAMBRICOS',
            category: 'accesorios',
            url: '/html/Accesorios/audifonos.html',
            img: '/img/accesorios/AUDIFONOS INALAMBRICOS2.jpg',
            name: 'Audifonos Inalambrico',
            price: '34.00',
            vendor: 'Daniel Vargas',
            keywords: 'Audifonos Inalambricos',
            subCategories: ['tecnologia', 'estudios'],
            publishDate: '2025-06-19 08:00:00'
        },
        {
            id: 'Joyeria_Cerezas',
            category: 'accesorios',
            url: '/html/product_details/audifonos_inalambricos.html',
            img: '/img/accesorios/Joyeria Cerezas.jpg',
            name: 'Joyeria con Forma de Cereza',
            price: '10.00',
            vendor: 'Diana Vargas',
            keywords: 'Joyeria Cerezas',
            subCategories: ['joyeria'],
            publishDate: '2025-06-19 08:00:00'
        },


        {
            id: 'PULSERA_OJO_TURCO',
            category: 'accesorios',
            url: '/html/product_details/audifonos_inalambricos.html',
            img: '/img/accesorios/PULSERA OJO TURCO 12.jpg',
            name: 'Pulsera ojo turco',
            price: '12.00',
            vendor: 'Diana Vargas',
            keywords: 'Joyeria Cerezas',
            subCategories: ['joyeria'],
            publishDate: '2025-06-19 08:00:00'
        },
        {
            id: 'soporte_laptop',
            category: 'accesorios',
            url: '/html/product_details/audifonos_inalambricos.html',
            img: '/img/accesorios/SOPORTE BASE LAPTOP PORTATIL 25.jpg',
            name: 'SOPORTE BASE LAPTOP PORTATIL',
            price: '25.00',
            vendor: 'Diana Vargas',
            keywords: 'tecnologia estudios',
            subCategories: ['tecnologia', 'estudios'],
            publishDate: '2025-06-19 08:00:00'
        },



        // --- Ropa ---
        {
            id: 'polera_ucsur',
            category: 'ropa',
            url: '/html/Ropa/PoleraAmbiental.html',
            img: '/img/ropa/Polera Ingenieria Ambiental.jpg',
            name: 'Polera Ingenieria Ambiental',
            price: '36.00',
            vendor: 'Equipo de Ropa UCSUR',
            keywords: 'polera ucsur ropa universidad',
            subCategories: ['poleras', 'uniformes'],
            publishDate: '2025-07-10 13:00:00'
        },
        {
            id: 'polera_enfermeria_ucsur',
            category: 'ropa',
            url: '/html/Ropa/PoleraEnfermeria.html',
            img: '/img/ropa/Polera Enfermeria.jpg',
            name: 'Polera Enfermeria',
            price: '36.00',
            vendor: 'Equipo de Ropa UCSUR',
            keywords: 'polera ucsur ropa universidad',
            subCategories: ['poleras', 'uniformes'],
            publishDate: '2025-07-10 13:00:00'
        },
        {
            id: 'polera_enfermeria_ucsur',
            category: 'ropa',
            url: '/html/product_details/polera_ucsur.html',
            img: '/img/ropa/Polera Estomatologia.jpg',
            name: 'Polera Estomatologia',
            price: '36.00',
            vendor: 'Equipo de Ropa UCSUR',
            keywords: 'polera ucsur ropa universidad',
            subCategories: ['poleras', 'uniformes'],
            publishDate: '2025-07-10 13:00:00'
        },

        {
            id: 'polera_psicologia_ucsur',
            category: 'ropa',
            url: '/html/Ropa/PoleraPsicologia.html',
            img: '/img/ropa/Polera Psicologia.jpg',
            name: 'Polera Psicologia',
            price: '36.00',
            vendor: 'Equipo de Ropa UCSUR',
            keywords: 'polera ucsur ropa universidad',
            subCategories: ['poleras', 'uniformes'],
            publishDate: '2025-07-10 13:00:00'
        },

        {
            id: 'polera_estamotologia_ucsur',
            category: 'ropa',
            url: '/html/product_details/polera_ucsur.html',
            img: '/img/ropa/Polera Estomatologia.jpg',
            name: 'Polera Estomatologia',
            price: '36.00',
            vendor: 'Equipo de Ropa UCSUR',
            keywords: 'polera ucsur ropa universidad',
            subCategories: ['poleras', 'uniformes'],
            publishDate: '2025-07-10 13:00:00'
        },
        {
            id: 'polera_Veterinaria_ucsur',
            category: 'ropa',
            url: '/html/product_details/polera_ucsur.html',
            img: '/img/ropa/Polera Veterinaria.jpg',
            name: 'Polera Veterinaria',
            price: '36.00',
            vendor: 'Equipo de Ropa UCSUR',
            keywords: 'polera ucsur ropa universidad',
            subCategories: ['poleras', 'uniformes','nuevas_ofertas','promocion'],
            publishDate: '2025-07-10 13:00:00'
        },
        ];

    const pageIndex = [
        { url: '/index.html', title: 'Inicio UCSUR Emprende', keywords: 'home principal ucsur emprende' },
        { url: '/html/oferta.html', title: 'Ofertas del día', keywords: 'descuentos promociones rebajas' },
        { url: '/html/postres.html', title: 'Postres', keywords: 'dulces' },
        { url: '/html/comida.html', title: 'Comida', keywords: 'almuerzo cena' },
        { url: '/html/accesorios.html', title: 'Accesorios', keywords: 'joyas' },
        { url: '/html/ropa.html', title: 'Ropa Ucsur', keywords: 'uniformes' },
    ];


    const productGrid = document.getElementById('productGrid');

    function renderProducts(productsToDisplay, emptyMessage = 'No se encontraron productos que coincidan con tu búsqueda o filtro.') {
        if (!productGrid) {
            console.error("No se encontró el elemento #productGrid en la página. Asegúrate de tener <section id='productGrid'></section> en tu HTML.");
            return;
        }

        productGrid.innerHTML = '';

        if (productsToDisplay.length === 0) {
            const noResultsDiv = document.createElement('div');
            noResultsDiv.className = 'no-results-message';
            noResultsDiv.textContent = emptyMessage;
            productGrid.appendChild(noResultsDiv);
        } else {
            productsToDisplay.sort((a, b) => {
                const dateA = new Date(a.publishDate);
                const dateB = new Date(b.publishDate);
                return dateB - dateA;
            });

            productsToDisplay.forEach(product => {
                const productCard = document.createElement('a');
                productCard.href = product.url;
                productCard.className = 'product-card';

                let formattedDate = '';
                if (product.publishDate) {
                    const dateObj = new Date(product.publishDate);
                    formattedDate = dateObj.toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                    });
                }

                const isHomePage = document.body.classList.contains('page-home');

                if (isHomePage) {
                    productCard.innerHTML = `
                        <div class="product-header">
                            <span class="product-vendor-name">${product.vendor}</span>
                            <span class="product-timestamp">${formattedDate}</span>
                        </div>
                        <img src="${product.img}" alt="${product.name}" class="product-img">
                        <div class="product-info">
                            <h3 class="product-name">${product.name}</h3>
                            <p class="product-price">S/ ${product.price}</p>
                        </div>
                    `;
                } else {
                    productCard.innerHTML = `
                        <img src="${product.img}" alt="${product.name}" class="product-img">
                        <div class="product-info">
                            <h3 class="product-name">${product.name}</h3>
                            <p class="product-price">S/ ${product.price}</p>
                            <p class="product-vendor">${product.vendor}</p>
                        </div>
                    `;
                }

                productGrid.appendChild(productCard);
            });
        }
    }

    const currentPathname = window.location.pathname;
    let productsOfCurrentCategory = [];
    let currentDisplayedProducts = [];

    if (currentPathname === '/index.html' || currentPathname === '/') {
        productsOfCurrentCategory = allProductsData;
    } else if (currentPathname.startsWith('/html/')) {
        const pathSegments = currentPathname.split('/');
        const categoryFileName = pathSegments[pathSegments.length - 1];
        const categoryName = categoryFileName.replace('.html', '');

        if (categoryName === 'oferta') {
            productsOfCurrentCategory = allProductsData.filter(product =>
                product.category === 'oferta' || (product.subCategories && product.subCategories.includes('promocion'))
            );
        } else {
            productsOfCurrentCategory = allProductsData.filter(product => product.category === categoryName);
        }

        if (productsOfCurrentCategory.length === 0 && categoryName !== 'product_details') {
            console.warn(`No se encontraron productos en 'allProductsData' para la categoría: ${categoryName}.`);
        }
    }

    currentDisplayedProducts = productsOfCurrentCategory;
    renderProducts(currentDisplayedProducts);

    const searchInput = document.querySelector('.search-bar input[type="text"]');
    const searchIcon = document.querySelector('.search-bar .search-icon');

    if (searchInput && searchIcon) {
        const performSearch = () => {
            const query = searchInput.value.trim().toLowerCase();

            if (query.length === 0) {
                if (document.body.classList.contains('page-category')) {
                    const activeFilterLink = document.querySelector('.filter-link.active');
                    if (activeFilterLink) {
                        activeFilterLink.classList.remove('active');
                    }
                    const defaultFilterLink = document.querySelector('.filter-link[data-filter="all"]');
                    if (defaultFilterLink) {
                        defaultFilterLink.classList.add('active');
                    }
                }

                currentDisplayedProducts = productsOfCurrentCategory;
                renderProducts(currentDisplayedProducts);
                return;
            }

            const searchResults = productsOfCurrentCategory.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.keywords.toLowerCase().includes(query) ||
                (product.vendor && product.vendor.toLowerCase().includes(query))
            );

            if (document.body.classList.contains('page-category')) {
                const activeFilterLink = document.querySelector('.filter-link.active');
                if (activeFilterLink) {
                    activeFilterLink.classList.remove('active');
                }
                const defaultFilterLink = document.querySelector('.filter-link[data-filter="all"]');
                if (defaultFilterLink) {
                    defaultFilterLink.classList.add('active');
                }
            }

            currentDisplayedProducts = searchResults;
            renderProducts(currentDisplayedProducts);
        };

        searchIcon.addEventListener('click', performSearch);

        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                performSearch();
            }
        });

        searchInput.addEventListener('input', () => {
            if (searchInput.value.trim() === '') {
                if (document.body.classList.contains('page-category')) {
                    const activeFilterLink = document.querySelector('.filter-link.active');
                    if (activeFilterLink) {
                        activeFilterLink.classList.remove('active');
                    }
                    const defaultFilterLink = document.querySelector('.filter-link[data-filter="all"]');
                    if (defaultFilterLink) {
                        defaultFilterLink.classList.add('active');
                    }
                }

                currentDisplayedProducts = productsOfCurrentCategory;
                renderProducts(currentDisplayedProducts);
            }
        });
    }

    if (document.body.classList.contains('page-category')) {
        const filterLinks = document.querySelectorAll('.filter-sidebar .filter-link');

        filterLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();

                if (searchInput) {
                    searchInput.value = '';
                }

                filterLinks.forEach(item => item.classList.remove('active'));
                link.classList.add('active');

                const filterValue = link.dataset.filter;

                let filteredProductsBySubCategory = [];

                if (currentPathname.includes('/html/oferta.html')) {
                    if (filterValue === 'all') {
                        filteredProductsBySubCategory = allProductsData.filter(product =>
                            product.category === 'oferta' || (product.subCategories && product.subCategories.includes('promocion'))
                        );
                    } else if (filterValue === 'postres_oferta') {
                        filteredProductsBySubCategory = allProductsData.filter(product =>
                            product.category === 'postres' && product.subCategories && product.subCategories.includes('promocion')
                        );
                    } else if (filterValue === 'comida_oferta') {
                        filteredProductsBySubCategory = allProductsData.filter(product =>
                            product.category === 'comida' && product.subCategories && product.subCategories.includes('promocion')
                        );
                    } else if (filterValue === 'accesorios_oferta') {
                        filteredProductsBySubCategory = allProductsData.filter(product =>
                            product.category === 'accesorios' && product.subCategories && product.subCategories.includes('promocion')
                        );
                    } else if (filterValue === 'ropa_oferta') {
                        filteredProductsBySubCategory = allProductsData.filter(product =>
                            product.category === 'ropa' && product.subCategories && product.subCategories.includes('promocion')
                        );
                    } else if (filterValue === 'descuento_50') {
                        filteredProductsBySubCategory = allProductsData.filter(product =>
                            product.subCategories && product.subCategories.includes('promocion') && product.subCategories.includes('descuento_50')
                        );
                    } else if (filterValue === 'nuevas_ofertas') {
                        filteredProductsBySubCategory = allProductsData.filter(product =>
                            product.subCategories && product.subCategories.includes('promocion') && product.subCategories.includes('nuevas_ofertas')
                        );
                    }

                } else {
                    if (filterValue === 'all') {
                        filteredProductsBySubCategory = productsOfCurrentCategory;
                    } else {
                        filteredProductsBySubCategory = productsOfCurrentCategory.filter(product =>
                            product.subCategories && product.subCategories.includes(filterValue)
                        );
                    }
                }

                currentDisplayedProducts = filteredProductsBySubCategory;
                renderProducts(currentDisplayedProducts);
            });
        });
    }

});