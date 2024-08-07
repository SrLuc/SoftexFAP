class Adm {
  private registerid: string;
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public changeName(name: string) {
    this.name = name;
  }

  private ban() {}
}

const adm = new Adm("jorge");


