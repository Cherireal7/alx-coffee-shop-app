const coffeeItems = [
  { name: "Cappuccino", price: "140 ETB", image: "cappuccino" },
  { name: "Latte", price: "160 ETB", image: "latte" },
  { name: "Macchiato", price: "100 ETB", image: "macchiato" },
  { name: "Espresso", price: "120 ETB", image: "espresso" },
  { name: "Flat White", price: "150 ETB", image: "flatwhite" },
  { name: "Mocha", price: "180 ETB", image: "mocha" },
  { name: "Americano", price: "130 ETB", image: "americano" },
  { name: "Irish Coffee", price: "200 ETB", image: "irishcoffee" },
];

export { coffeeItems };

export type CoffeeItem = {
  name: string;
  price: string;
  image: string;
};
