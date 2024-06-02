import Association from "./Association";

export default class Word {
  id: string;
  name: string;
  associations: Association[];

  constructor(id: string, name: string, associations: Association[]) {
    this.id = id;
    this.name = name;
    this.associations = associations;
  }
}
