import ProductCard from "./components/ProductCard";
import Stars from "./components/Stars";

function App() {
  const products = [
    {
      id: 11,
      name: "Lamme pants",
      partnership: "Zahir",
      brand: "Cedric S. Bryan",
      quantity: 8,
      madeIn: "Thailand",
      description: "pede nec ante blandit",
      image: "https://foxcoding.net/imgs/products/product11.jpg",
      category: [3],
      price: 50,
      score: 5,
      sizes: {
        1: 1,
        2: 1,
        3: 1,
        4: 1,
      },
    },
    {
      id: 13,
      name: "Pants with strings",
      partnership: "Burke",
      brand: "Alexander R. Marquez",
      quantity: 5,
      madeIn: "Bangladesh",
      description: "Ut nec urna et arcu imperdiet",
      image: "https://foxcoding.net/imgs/products/product13.jpg",
      category: [3],
      price: 75,
      score: 4,
      sizes: {
        1: 1,
        3: 1,
        4: 1,
      },
    },
    {
      id: 14,
      name: "Y-3 bag",
      partnership: "Tarik",
      brand: "Paul H. Kemp",
      quantity: 5,
      madeIn: "Uruguay",
      description: "Etiam bibendum fermentum metus. Aenean sed",
      image: "https://foxcoding.net/imgs/products/product14.jpg",
      category: [4],
      price: 75,
      score: 4,
      sizes: {
        4: 1,
      },
    },
    {
      id: 15,
      name: "Y-3 other bag",
      partnership: "Levi",
      brand: "Martin Y. Bullock",
      quantity: 2,
      madeIn: "Tanzania",
      description:
        "Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non",
      image: "https://foxcoding.net/imgs/products/product15.jpg",
      category: [4],
      price: 80,
      score: 4,
      sizes: {
        2: 1,
        3: 1,
        4: 1,
      },
    },
    {
      id: 19,
      name: "Black trainers",
      partnership: "Hunter",
      brand: "Alden E. Harding",
      quantity: 5,
      madeIn: "Cayman Islands",
      description: "blandit. Nam nulla magna,",
      image: "https://foxcoding.net/imgs/products/product19.jpg",
      category: [2, 3],
      price: 90,
      score: 4,
      sizes: {
        1: 1,
        2: 1,
        4: 1,
      },
    },
    {
      id: 18,
      name: "Black trainer pants",
      partnership: "Flynn",
      brand: "Cameron R. Savage",
      quantity: 7,
      madeIn: "Kyrgyzstan",
      description: "inceptos hymenaeos. Mauris ut quam",
      image: "https://foxcoding.net/imgs/products/product18.jpg",
      category: [3],
      price: 92,
      score: 2.2,
      sizes: {
        1: 1,
        3: 1,
        4: 1,
      },
    },
    {
      id: 1,
      name: "Purple naiky",
      partnership: "Camden",
      brand: "Florence A. Cook",
      quantity: 4,
      madeIn: "Cocos (Keeling) Islands",
      description: "sem, vitae aliquam eros turpis non enim. Mauris quis",
      image: "https://foxcoding.net/imgs/products/product1.jpg",
      category: [1],
      price: 100,
      score: 4,
      sizes: {
        1: 2,
        3: 3,
      },
    },
    {
      id: 10,
      name: "Emo pyjammas",
      partnership: "Steel",
      brand: "Benedict B. Morrison",
      quantity: 2,
      madeIn: "South Georgia and The South Sandwich Islands",
      description: "aliquet diam. Sed diam lorem, auctor",
      image: "https://foxcoding.net/imgs/products/product10.jpg",
      category: [2, 3],
      price: 100,
      score: 4.2,
      sizes: {
        1: 1,
        2: 1,
        3: 1,
        4: 1,
      },
    },
    {
      id: 2,
      name: "B&W ardidas",
      partnership: "Carl",
      brand: "Ashely S. Rojas",
      quantity: 6,
      madeIn: "Saudi Arabia",
      description: "montes, nascetur ridiculus mus. Proin vel arcu eu odio",
      image: "https://foxcoding.net/imgs/products/product2.jpg",
      category: [1],
      price: 105,
      score: 4,
      sizes: {
        2: 1,
        4: 1,
      },
    },
    {
      id: 12,
      name: "y3 snickers",
      partnership: "Barclay",
      brand: "Faith O. Barr",
      quantity: 7,
      madeIn: "Gambia",
      description: "nec, euismod in, dolor. Fusce feugiat. Lorem ipsum",
      image: "https://foxcoding.net/imgs/products/product12.jpg",
      category: [1],
      price: 120,
      score: 4,
      sizes: {
        1: 1,
        2: 1,
        3: 1,
        4: 1,
      },
    },
  ];
  return (
    <div className="App">
      <Stars rating="5"></Stars>
      TOP RATED
      <div className="container">
        {products.map((product) => (
          <ProductCard
            image={product.image}
            price={product.price}
            description={product.brand}
            category={product.category[0]}
            rating={product.score}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
}

export default App;
