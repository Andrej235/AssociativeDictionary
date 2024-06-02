export default class Association {
  id: string;
  name: string;
  count: number;

  constructor(id: string, name: string, count: number) {
    this.id = id;
    this.name = name;
    this.count = count;
  }
}
