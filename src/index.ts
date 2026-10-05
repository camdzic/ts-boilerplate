interface Options {
  name: string;
  age: number;
}

function createPerson(options: Options) {
  return {
    name: options.name,
    age: options.age
  };
}

const person = createPerson({ name: 'John', age: 30 });

console.log(person);
