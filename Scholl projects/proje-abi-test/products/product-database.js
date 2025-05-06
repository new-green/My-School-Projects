const products = [
    {
        id: 1,
        name: "Akıllı Saat Pro",
        price: 1299.00,
        image: "saat.jpg",
        category: "Elektronik",
        installment: 6,
        stock: 10,
        brand: "TechMaster",
        rating: 4.8,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, optio repellat totam incidunt delectus consequuntur facilis ad aliquam natus sunt, a maiores veritatis iste culpa dolores voluptas. Perspiciatis, nesciunt. Soluta non cumque molestias aspernatur culpa quibusdam maxime esse, rem eligendi cum, tenetur nesciunt exercitationem veritatis architecto adipisci. Recusandae quam iste odit consectetur inventore, eligendi eveniet culpa eos cum excepturi? Molestiae exercitationem ipsa culpa voluptatem cumque, eum expedita corporis modi vitae at officiis accusamus reiciendis deserunt inventore voluptates nisi ipsum dolorum beatae quos. At quidem corporis consequuntur, veniam deleniti labore laborum velit harum est, eum animi quisquam ipsam odio officiis totam!",
        comment: "Herkese Selam: amet consectetur adipisicing elit"   
    },
    {
        id: 2,
        name: "Kablosuz Kulaklık",
        price: 599.99,
        image: "kulaklik.jpg",
        category: "Elektronik",
        installment: 3,
        stock: 15,
        brand: "SoundWave",
        rating: 4.5,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, optio repellat totam incidunt delectus consequuntur facilis ad aliquam natus sunt, a maiores veritatis iste culpa dolores voluptas. Perspiciatis, nesciunt. Soluta non cumque molestias aspernatur culpa quibusdam maxime esse, rem eligendi cum, tenetur nesciunt exercitationem veritatis architecto adipisci. Recusandae quam iste odit consectetur inventore, eligendi eveniet culpa eos cum excepturi? Molestiae exercitationem ipsa culpa voluptatem cumque, eum expedita corporis modi vitae at officiis accusamus reiciendis deserunt inventore voluptates nisi ipsum dolorum beatae quos. At quidem corporis consequuntur, veniam deleniti labore laborum velit harum est, eum animi quisquam ipsam odio officiis totam!",
        comment: "Herkese Selam: amet consectetur adipisicing elit"  
    },
    {
        id: 3,
        name: "Kahve Makinesi",
        price: 1499.00,
        image: "kahve-makinesi.jpg",
        category: "Ev Yaşam",
        installment: 9,
        stock: 8,
        brand: "HomeChef",
        rating: 4.7,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, optio repellat totam incidunt delectus consequuntur facilis ad aliquam natus sunt, a maiores veritatis iste culpa dolores voluptas. Perspiciatis, nesciunt. Soluta non cumque molestias aspernatur culpa quibusdam maxime esse, rem eligendi cum, tenetur nesciunt exercitationem veritatis architecto adipisci. Recusandae quam iste odit consectetur inventore, eligendi eveniet culpa eos cum excepturi? Molestiae exercitationem ipsa culpa voluptatem cumque, eum expedita corporis modi vitae at officiis accusamus reiciendis deserunt inventore voluptates nisi ipsum dolorum beatae quos. At quidem corporis consequuntur, veniam deleniti labore laborum velit harum est, eum animi quisquam ipsam odio officiis totam!",
        comment: "Herkese Selam: amet consectetur adipisicing elit"  

    },
    {
        id: 4,
        name: "Spor Ayakkabı",
        price: 799.00,
        image: "spor-ayakkabi.jpg",
        category: "Moda",
        installment: 3,
        stock: 20,
        brand: "FastStep",
        rating: 4.9,
        sizes: ["38", "39", "40", "41"],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, optio repellat totam incidunt delectus consequuntur facilis ad aliquam natus sunt, a maiores veritatis iste culpa dolores voluptas. Perspiciatis, nesciunt. Soluta non cumque molestias aspernatur culpa quibusdam maxime esse, rem eligendi cum, tenetur nesciunt exercitationem veritatis architecto adipisci. Recusandae quam iste odit consectetur inventore, eligendi eveniet culpa eos cum excepturi? Molestiae exercitationem ipsa culpa voluptatem cumque, eum expedita corporis modi vitae at officiis accusamus reiciendis deserunt inventore voluptates nisi ipsum dolorum beatae quos. At quidem corporis consequuntur, veniam deleniti labore laborum velit harum est, eum animi quisquam ipsam odio officiis totam!",
        comment: "Herkese Selam: amet consectetur adipisicing elit"  

    },
    {
        id: 5,
        name: "Bambu Bardak Seti",
        price: 129.90,
        image: "bambu-bardak.jpg",
        category: "Mutfak",
        installment: 1,
        stock: 50,
        brand: "EcoLife",
        rating: 4.6,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, optio repellat totam incidunt delectus consequuntur facilis ad aliquam natus sunt, a maiores veritatis iste culpa dolores voluptas. Perspiciatis, nesciunt. Soluta non cumque molestias aspernatur culpa quibusdam maxime esse, rem eligendi cum, tenetur nesciunt exercitationem veritatis architecto adipisci. Recusandae quam iste odit consectetur inventore, eligendi eveniet culpa eos cum excepturi? Molestiae exercitationem ipsa culpa voluptatem cumque, eum expedita corporis modi vitae at officiis accusamus reiciendis deserunt inventore voluptates nisi ipsum dolorum beatae quos. At quidem corporis consequuntur, veniam deleniti labore laborum velit harum est, eum animi quisquam ipsam odio officiis totam!",
        comment: "Herkese Selam: amet consectetur adipisicing elit"  

    },
    {
        id: 6,
        name: "Akıllı LED TV 55''",
        price: 8999.00,
        image: "led-tv.jpg",
        category: "Elektronik",
        installment: 12,
        stock: 5,
        brand: "VisionPlus",
        rating: 4.8,
        features: ["4K UHD", "Smart TV", "HDR10+"],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, optio repellat totam incidunt delectus consequuntur facilis ad aliquam natus sunt, a maiores veritatis iste culpa dolores voluptas. Perspiciatis, nesciunt. Soluta non cumque molestias aspernatur culpa quibusdam maxime esse, rem eligendi cum, tenetur nesciunt exercitationem veritatis architecto adipisci. Recusandae quam iste odit consectetur inventore, eligendi eveniet culpa eos cum excepturi? Molestiae exercitationem ipsa culpa voluptatem cumque, eum expedita corporis modi vitae at officiis accusamus reiciendis deserunt inventore voluptates nisi ipsum dolorum beatae quos. At quidem corporis consequuntur, veniam deleniti labore laborum velit harum est, eum animi quisquam ipsam odio officiis totam!",
        comment: "Herkese Selam: amet consectetur adipisicing elit"

    },
    {
        id: 7,
        name: "Toptan Çocuk Oyuncak Seti",
        price: 349.90,
        image: "oyuncak-set.jpg",
        category: "Oyuncak",
        installment: 2,
        stock: 30,
        brand: "FunWorld",
        rating: 4.4,
        ageGroup: "3-6 Yaş",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, optio repellat totam incidunt delectus consequuntur facilis ad aliquam natus sunt, a maiores veritatis iste culpa dolores voluptas. Perspiciatis, nesciunt. Soluta non cumque molestias aspernatur culpa quibusdam maxime esse, rem eligendi cum, tenetur nesciunt exercitationem veritatis architecto adipisci. Recusandae quam iste odit consectetur inventore, eligendi eveniet culpa eos cum excepturi? Molestiae exercitationem ipsa culpa voluptatem cumque, eum expedita corporis modi vitae at officiis accusamus reiciendis deserunt inventore voluptates nisi ipsum dolorum beatae quos. At quidem corporis consequuntur, veniam deleniti labore laborum velit harum est, eum animi quisquam ipsam odio officiis totam!",
        comment: "Herkese Selam: amet consectetur adipisicing elit"  
    },
    
];