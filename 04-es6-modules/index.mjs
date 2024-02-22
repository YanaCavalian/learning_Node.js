import { season, temperature } from './named-exports.mjs';
import { humidity, isRaining } from './inline-exports.mjs';
import getData from './default-export.mjs';
import DEFAULT_SERVER, { USERNAME, PASSWORD } from './mixed-exports.mjs';

console.log(season);
console.log(temperature);
console.log(humidity);
console.log(isRaining);

getData('https://dummyjson.com/products/1')
  .then((post) => console.log(post))
  .catch((err) => console.log(err));

console.log(DEFAULT_SERVER);
console.log(USERNAME, PASSWORD);
