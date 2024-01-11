interface GreeterType {
  name: string;
}

export class Greeter implements GreeterType {
  constructor(public name: string) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}
