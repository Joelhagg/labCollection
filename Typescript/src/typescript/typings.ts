interface PersonInterface {
    name: string;
    age: number;
}

type PersonType = {
    name: string;
    age: number;
}

class PersonClass {
    name: string;
    age: number;
}

enum PersonEnum {
    name = 'name',
    age = 'age'
}

let tuple: [string, number] = ['name', 20];