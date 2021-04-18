interface MonsterProps {
  name: string;
  size: string;
  type: string;

}

export class Monster {
  constructor(private data: MonsterProps){}
    get(propName: string): (number | string) {
      return this.data[propName];
    }
}