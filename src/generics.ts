const score: Array<number> = [];
const name2: Array<string> = [];


function getIdentityOne(val: boolean | number): boolean | number{
    return val
}

function getIdentityTwo(val: any): any{
    return val
}

// function getIdentityThree<Type>(val: Type): Type{
//     return val
// }

function getIdentityThree<T>(val: T): T{  //commonly used syntax
    return val
}

getIdentityThree('3')


interface Watch{
    brand:string,
    type:number
}

getIdentityThree<Watch>({brand: 'Rolex', type:3432})  //concept of reusability



function getSearchProducts<T>(products: T[]):T{
    // some database operation
    const index = 5;
    return products[index];
}

// arrow function example
const getMoreSearchProducts= <T,>(products: T[]):T=>{    //<T,> this is because we need to deffrenciate function type vs jsx in react
    // some database operation
    const index = 5;
    return products[index];
}


interface Database{
    connection: string,
    username: string,
    password: string
}

function anotherFn<T, U extends Database>(valueOne: T, valueTwo: U):object{
    return{
        valueOne,
        valueTwo
    }
}

anotherFn(4,{connection: 'fda', username:'dfasf', password:'dfsaf'});



interface Quiz{
    name: string,
    type: string
}

interface Course{
    name:string,
    author:string,
    subject:string  
}

class Sellable<T>{
    public cart: T[] = [];

    addToCart(product: T){
        this.cart.push(product);
    }
 }