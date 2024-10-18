// Função para obter os parâmetros da URL
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Atualiza as informações do produto
function updateProductDetails(product) {
    const productData = {
        iphone13: {
            name: "iPhone 13",
            price: "R$ 6.999,00",
            details: "iPhone 13 com tela Super Retina XDR de 6,1 polegadas.",
            image: "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
            images: [
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg"
            ],
            specifications: [
                "Armazenamento: 256GB",
                "Cor: Vermelho",
                "Tela: 6,1\" Liquid Retina",
                "Câmera: 12MP",
                "Processador: A15 Bionic"
            ],
            reviews: [
                { user: "Thainá", comment: "Ótimo produto!" },
                { user: "Daciel", comment: "Produto original." }
            ]
        },
        iphone12: {
            name: "iPhone 12",
            price: "R$ 5.499,00",
            details: "iPhone 12 com 5G e tela Super Retina XDR de 6,1 polegadas.",
            image: "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
            images: [
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg"
            ],
            specifications: [
                "Armazenamento: 128GB",
                "Cor: Azul",
                "Tela: 6,1\" Super Retina",
                "Câmera: 12MP",
                "Processador: A14 Bionic"
            ],
            reviews: [
                { user: "Lucas", comment: "Excelente desempenho e qualidade." },
                { user: "Mariana", comment: "Adorei a câmera!" }
            ]
        },
        iphone11: {
            name: "iPhone 11",
            price: "R$ 4.299,00",
            details: "iPhone 11 com câmera dupla e A13 Bionic.",
            image: "https://a-static.mlcdn.com.br/800x800/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
            images: [
                "https://a-static.mlcdn.com.br/90x90/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/863356ba4c36ff04cf57fe60506cb52f.jpg",
                "https://a-static.mlcdn.com.br/90x90/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/6492b8aaded7dd3731287f3378351a05.jpg",
                "https://a-static.mlcdn.com.br/96x74/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/c30274adbc0ab6556e098ec5753f8559.jpg",
                "https://a-static.mlcdn.com.br/96x74/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/346b1202a940d2ed8807a0c195681ee1.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg"
            ],
            specifications: [
                "Armazenamento: 64GB",
                "Cor: Preto",
                "Tela: 6,1\" Liquid Retina",
                "Câmera: 12MP",
                "Processador: A13 Bionic"
            ],
            reviews: [
                { user: "Carlos", comment: "Ótimo custo-benefício." },
                { user: "Ana", comment: "A bateria dura muito!" }
            ]
        },
            specifications: [
                "Armazenamento: 64GB",
                "Cor: Preto",
                "Tela: 6,1\" Liquid Retina",
                "Câmera: 12MP",
                "Processador: A13 Bionic"
            ],
            reviews: [
                { user: "Carlos", comment: "Ótimo custo-benefício." },
                { user: "Ana", comment: "A bateria dura muito!" }
            ]
        },
        iphonese: {
            name: "iPhone SE",
            price: "R$ 3.799,00",
            details: "iPhone SE com a performance do A13 Bionic.",
            image: "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
            images: [
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg"
            ],
            specifications: [
                "Armazenamento: 64GB",
                "Cor: Branco",
                "Tela: 4,7\" Retina HD",
                "Câmera: 12MP",
                "Processador: A13 Bionic"
            ],
            reviews: [
                { user: "Fernanda", comment: "Compacto e poderoso!" },
                { user: "Ricardo", comment: "Perfeito para quem não gosta de telas grandes." }
            ]
        },
        iphone14: {
            name: "iPhone 14",
            price: "R$ 7.999,00",
            details: "iPhone 14 com melhorias na câmera e duração da bateria.",
            image: "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
            images: [
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53.jpg"
            ],
            specifications: [
                "Armazenamento: 128GB",
                "Cor: Roxo",
                "Tela: 6,1\" Super Retina",
                "Câmera: 12MP",
                "Processador: A15 Bionic"
            ],
            reviews: [
                { user: "Júlia", comment: "Melhor iPhone que já tive!" },
                { user: "Pedro", comment: "A tela é incrível!" }
            ]
        },
        iphone15: {
            name: "iPhone 15",
            price: "R$ 8.999,00",
            details: "iPhone 15 com design inovador.",
            image: "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
            images: [
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53.jpg"
            ],
            specifications: [
                "Armazenamento: 256GB",
                "Cor: Rosa",
                "Tela: 6,1\" Super Retina",
                "Câmera: 12MP",
                "Processador: A15 Bionic"
            ],
            reviews: [
                { user: "João", comment: "Excelente desempenho!" },
                { user: "Maria", comment: "Adorei a nova cor!" }
            ]
        },
        iphone16: {
            name: "iPhone 16",
            price: "R$ 9.999,00",
            details: "iPhone 16 com melhorias na câmera e desempenho.",
            image: "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
            images: [
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53.jpg"
            ],
            specifications: [
                "Armazenamento: 512GB",
                "Cor: Prata",
                "Tela: 6,7\" Super Retina",
                "Câmera: 12MP",
                "Processador: A16 Bionic"
            ],
            reviews: [
                { user: "Carlos", comment: "Melhor iPhone até agora!" },
                { user: "Ana", comment: "A câmera é incrível!" }
            ]
        },
        airpods: {
            name: "AirPods",
            price: "R$ 1.999,00",
            details: "AirPods com qualidade de som excepcional.",
            image: "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
            images: [
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53.jpg"
            ],
            specifications: [
                "Cor: Branco",
                "Conectividade: Bluetooth",
                "Duração da Bateria: 24 horas"
            ],
            reviews: [
                { user: "Lucas", comment: "Ótima qualidade de som!" },
                { user: "Fernanda", comment: "Super confortáveis!" }
            ]
        },
        iphone13pro: {
            name: "iPhone 13 Pro",
            price: "R$ 9.999,00",
            details: "iPhone 13 Pro com tela Super Retina XDR de 6,1 polegadas.",
            image: "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
            images: [
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53b23.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53.jpg",
                "https://a-static.mlcdn.com.br/800x560/iphone-11-apple-256gb-product-red-61-12mp-ios/magazineluiza/155611900/ed8b0056044a989d7653d54120d53.jpg"
            ],
            specifications: [
                "Armazenamento: 256GB",
                "Cor: Dourado",
                "Tela: 6,1\" Super Retina",
                "Câmera: 12MP",
                "Processador: A15 Bionic"
            ],
            reviews: [
                { user: "Thainá", comment: "Ótimo produto!" },
                { user: "Daciel", comment: "Produto original." }
            ]
        },
        iphone14pro: {
            name: "iPhone 14 Pro",
            price: "R$ 10.999,00",
            details: "iPhone 14 Pro com melhorias na câmera.",
            image: "img/iphone14pro.png",
            images: [
                "img/iphone14pro/1.png",
                "img/iphone14pro/2.png",
                "img/iphone14pro/3.png",
                "img/iphone14pro/4.png",
                "img/iphone14pro/5.png",
                "img/iphone14pro/6.png"
            ],
            specifications: [
                "Armazenamento: 256GB",
                "Cor: Preto",
                "Tela: 6,1\" Super Retina",
                "Câmera: 12MP",
                "Processador: A16 Bionic"
            ],
            reviews: [
                { user: "Lucas", comment: "Excelente desempenho!" },
                { user: "Mariana", comment: "Adorei a nova câmera!" }
            ]
        },
        iphone15pro: {
            name: "iPhone 15 Pro",
            price: "R$ 11.999,00",
            details: "iPhone 15 Pro com design inovador.",
            image: "img/iphone15pro.png",
            images: [
                "img/iphone15pro/1.png",
                "img/iphone15pro/2.png",
                "img/iphone15pro/3.png",
                "img/iphone15pro/4.png",
                "img/iphone15pro/5.png",
                "img/iphone15pro/6.png"
            ],
            specifications: [
                "Armazenamento: 512GB",
                "Cor: Azul",
                "Tela: 6,1\" Super Retina",
                "Câmera: 12MP",
                "Processador: A17 Bionic"
            ],
            reviews: [
                { user: "Carlos", comment: "Melhor iPhone até agora!" },
                { user: "Ana", comment: "A câmera é incrível!" }
            ]
        },
        iphone13promax: {
            name: "iPhone 13 Pro Max",
            price: "R$ 10.999,00",
            details: "iPhone 13 Pro Max com tela grande.",
            image: "img/iphone13promax.png",
            images: [
                "img/iphone13promax/1.png",
                "img/iphone13promax/2.png",
                "img/iphone13promax/3.png",
                "img/iphone13promax/4.png",
                "img/iphone13promax/5.png",
                "img/iphone13promax/6.png"
            ],
            specifications: [
                "Armazenamento: 512GB",
                "Cor: Prata",
                "Tela: 6,7\" Super Retina",
                "Câmera: 12MP",
                "Processador: A15 Bionic"
            ],
            reviews: [
                { user: "Júlia", comment: "Melhor iPhone que já tive!" },
                { user: "Pedro", comment: "A tela é incrível!" }
            ]
        },
        iphone14promax: {
            name: "iPhone 14 Pro Max",
            price: "R$ 11.999,00",
            details: "iPhone 14 Pro Max com melhorias na bateria.",
            image: "img/iphone14promax.png",
            images: [
                "img/iphone14promax/1.png",
                "img/iphone14promax/2.png",
                "img/iphone14promax/3.png",
                "img/iphone14promax/4.png",
                "img/iphone14promax/5.png",
                "img/iphone14promax/6.png"
            ],
            specifications: [
                "Armazenamento: 512GB",
                "Cor: Roxo",
                "Tela: 6,7\" Super Retina",
                "Câmera: 12MP",
                "Processador: A16 Bionic"
            ],
            reviews: [
                { user: "Fernanda", comment: "A bateria dura muito!" },
                { user: "Ricardo", comment: "Perfeito para quem ama tecnologia." }
            ]
        },
        iphone15promax: {
            name: "iPhone 15 Pro Max",
            price: "R$ 12.999,00",
            details: "iPhone 15 Pro Max com recursos avançados.",
            image: "img/iphone15promax.png",
            images: [
                "img/iphone15promax/1.png",
                "img/iphone15promax/2.png",
                "img/iphone15promax/3.png",
                "img/iphone15promax/4.png",
                "img/iphone15promax/5.png",
                "img/iphone15promax/6.png"
            ],
            specifications: [
                "Armazenamento: 1TB",
                "Cor: Verde",
                "Tela: 6,7\" Super Retina",
                "Câmera: 12MP",
                "Processador: A17 Bionic"
            ],
            reviews: [
                { user: "Lucas", comment: "Incrível!" },
                { user: "Fernanda", comment: "Vale cada centavo!" }
            ]
        }
    };

    const productInfo = productData[product];
    if (productInfo) {
        document.getElementById("product-name").textContent = productInfo.name;
        document.getElementById("product-price").textContent = productInfo.price;
        document.getElementById("product-details").textContent = productInfo.details;
        document.getElementById("product-image").src = productInfo.image;

        // Populate specifications
        const specificationsList = document.getElementById("product-specifications");
        productInfo.specifications.forEach(spec => {
            const li = document.createElement("li");
            li.textContent = spec;
            specificationsList.appendChild(li);
        });

        // Populate reviews
        const reviewsContainer = document.getElementById("customer-reviews");
        productInfo.reviews.forEach(review => {
            const div = document.createElement("div");
            div.innerHTML = `<strong>${review.user}:</strong> ${review.comment}`;
            reviewsContainer.appendChild(div);
        });

        // Populate thumbnail images
        const thumbnailContainer = document.querySelector('.thumbnail-images');
        thumbnailContainer.innerHTML = ''; // Clear previous thumbnails
        productInfo.images.forEach((imgSrc, index) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `Thumbnail ${index + 1}`;
            img.className = 'thumbnail';
            img.onclick = () => changeImage(imgSrc);
            thumbnailContainer.appendChild(img);
        });
    } else {
        document.querySelector(".product-details").innerHTML = "<p>Produto não encontrado.</p>";
    }
}

// Executa ao carregar a página
window.onload = function() {
    const product = getQueryParameter('product');
    console.log("Product from URL:", product); // Log the product name for debugging
    updateProductDetails(product);
};