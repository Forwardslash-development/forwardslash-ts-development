import {Monster} from './models/Monster';

const monster = new Monster({name: 'Aboleth', size: 'Hugh', type:'Aberration'});

console.log(monster.get('name'));
console.log(monster.get('type'));