class Name{
    constructor(name='', secondName=''){
        this.name = name;
        this.secondName = secondName;
    }
}
Name.prototype.sayHi = function(){
        console.log(`${this.name}`+' '+ `${this.secondName}`+' '+ "Hello");
    }
let user = new Name('Ivan', 'Petrov');
let user2 = new Name('Petr', 'Ermak');
let user3 = new Name('Alex', 'Loger');
user3.sayHi = function(){
    console.log(`${this.name}`+' '+ `${this.secondName}`+' '+ "You could redefine parent method");
};
user.sayHi();
user3.sayHi()
user2.sayHi();