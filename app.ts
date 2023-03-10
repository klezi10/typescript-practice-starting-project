const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string] //tuple type - fixed length array
} = {
    // const person = {
    name: 'Sandy',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

console.log(person.name)

for (const hobby of person.hobbies) {
    //anything that can be done with a string, can be done with hobby
    console.log(hobby.toUpperCase())
}

// person.role.push('admin'); //***TS doesn't catch this error with tuple
// person.role[1] = 10; can't be done with tuple
person.role = [0, 'user'] //this works

console.log(person.role)

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR};

const personTwo = {
    name: 'Tim',
    age: 30,
    hobbies: ['Running', 'Cooking'],
    role: Role.ADMIN,
}

if (personTwo.role === Role.ADMIN) {
    console.log('admin')
}