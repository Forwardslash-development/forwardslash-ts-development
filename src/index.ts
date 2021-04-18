import {Monster} from './models/Monster';

const monster = new Monster({name: 'Aboleth', age: 9});

monster.set({name: 'bob'});
console.log(monster.get('name'));
console.log(monster.get('age'));