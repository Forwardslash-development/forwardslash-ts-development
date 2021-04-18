interface MonsterProps {
  name?: string;
  age?: number;
}

export class Monster {
  constructor(private data: MonsterProps){}
    get(propName: string): (number | string) {
      return this.data[propName];
    }
    set(update: MonsterProps): void {
      Object.assign(this.data, update);
    }
}