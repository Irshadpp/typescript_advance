function detectType(val: string | number){
   if(typeof val === 'string'){
    return val.toUpperCase();
   }
   return val + 3
}


function provideId(id: string | null){
    if(!id){
        console.log('Please provid an id')
        return
    }
    id.toLowerCase();
}



function printAll(str: string | string[] | null){
    if(str){
        if(typeof str === 'object'){
            for(const s of str){
                console.log(s);
            }
        }else if(typeof str === 'string'){
            console.log(str);
        }
    }
}



interface User{
    name: string,
    email: string,
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if('isAdmin' in account){
        return account.isAdmin;
    }
}



function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toLocaleUpperCase());
    }
}



type Fish = {swim: ()=> void}
type Bird = {fly: ()=> void}

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish) !== undefined
}

function getFoot(pet:Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }else{
        pet 
        return "Bird food"
    }
}



interface Circle{
    kind: 'circle',
    radius: number
}

interface Square{
    kind: 'square',
    side: number
}

interface Rectangle{
    kind: 'rectangle',
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getType(shape: Shape){
    if(shape.kind === 'circle'){
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side
}

function getArea(shape: Shape){
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius * 2

        case 'square':
            return shape.side* shape.side;

        case 'rectangle':
            return shape.length * shape.width

        default:
            const _defaultShape: never = shape
            return _defaultShape
    }
}