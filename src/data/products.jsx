// src/data/products.js
const products = [
  {
    id: 1,
    name: "Toyota Avanza 2023",
    brand: "Toyota",
    category: "MPV",
    price: 315000000,
    stock: 5,
    image: "/cars/avanza.jpg",
    specs: {
      engine: "1.5L DOHC Dual VVT-i",
      transmission: "Manual / CVT",
      fuel: "Bensin",
      seats: 7,
    },
    description:
      "Toyota Avanza 2023 merupakan mobil keluarga yang nyaman, irit, dan cocok untuk perjalanan jauh.",
  },
  {
    id: 2,
    name: "Honda Brio RS",
    brand: "Honda",
    category: "Hatchback",
    price: 243000000,
    stock: 8,
    image: "/cars/brio.jpg",
    specs: {
      engine: "1.2L i-VTEC",
      transmission: "Manual / CVT",
      fuel: "Bensin",
      seats: 5,
    },
    description:
      "Honda Brio RS hadir dengan desain sporty dan performa yang responsif untuk penggunaan harian.",
  },
  {
    id: 3,
    name: "Mitsubishi Pajero Sport",
    brand: "Mitsubishi",
    category: "SUV",
    price: 577000000,
    stock: 3,
    image: "/cars/pajero.jpg",
    specs: {
      engine: "2.4L MIVEC Turbo Diesel",
      transmission: "Automatic",
      fuel: "Diesel",
      seats: 7,
    },
    description:
      "SUV tangguh dengan performa mesin besar dan fitur keamanan lengkap.",
  },
  {
    id: 4,
    name: "Toyota Fortuner GR",
    brand: "Toyota",
    category: "SUV",
    price: 630000000,
    stock: 2,
    image: "/cars/fortuner.jpg",
    specs: {
      engine: "2.8L Diesel",
      transmission: "Automatic",
      fuel: "Diesel",
      seats: 7,
    },
    description:
      "Toyota Fortuner GR menawarkan kesan premium dan performa mesin bertenaga.",
  },
];

export default products;