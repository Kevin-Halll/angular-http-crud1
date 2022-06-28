const { faker } = require("@faker-js/faker");

let database = { products: [], menus: [], stats: {products: 0, menus: 0} };

for (let i = 1; i <= 52; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.product(),
    description: faker.lorem.sentences(3),
    price: faker.commerce.price(1, 3000, 2, "$"),
    imageUrl: faker.image.food(undefined, undefined, true),
    quantity: faker.datatype.number(),
  });
  database.menus.push({
    id: i,
    menu_name: faker.commerce.productName(),
    menu_description: faker.lorem.sentences(3),
    menu_size: faker.datatype.number(10),
    imageUrl: faker.image.food(undefined, undefined, true),
    cost: faker.commerce.price(1, 1000, 2, "$"),
  });
}
database.stats.menus = 52;
database.stats.products = 52;

console.log(JSON.stringify(database, undefined, 2));