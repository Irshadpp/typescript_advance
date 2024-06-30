// class User{
//     public name: string
//     public email: string
//     private city: string = 'Calicut'  //it is only accessible inside the class
//     constructor(name: string, email: string){
//         this.name = name;
//         this.email = email;
//     }
// }



//more professional way
class User{
    readonly city: string = 'calicut'
    // private _courseCount: number = 1
    protected _courseCount: number = 1
    constructor(
        public email:string,
        public name:string,
        private userId: string
        ){}
    
    private deleteToken(){
        console.log('token deleted')
    }

    get getAppleEmail():string{
        return `apple${this.email}`
    }

    get courseCount():number{
        return this._courseCount;
    }

    set courseCount(courseNum){
        if(this._courseCount<=1){
            throw new Error("course count should be more than 1");
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User{
    isFamily: boolean = true;
    changeCourseCount(){
        this._courseCount = 4
    }
}

const irshad = new User('irshad', 'irshad@gmail.com', '7fds8f9832');



