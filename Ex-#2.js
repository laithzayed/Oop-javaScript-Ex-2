


function Person(firstname, lastname,age){
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    

    function name(){
        return this.firstname;
    }

} 

    var person = [
        { name: { first: 'John', last: 'Hob' }, age: 35 },
        { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
        { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
        { name: { first: 'Zues', last: 'Odin' }, age: 55 },
        { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 },
      ]; 

        for (i=0; i<person.length; i++){
    console.log(person[i].name.first);
        }
    