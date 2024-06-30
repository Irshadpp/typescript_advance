abstract class TakePhoto2{
    constructor(
        public mode:string,
        public filter:string
    ){}

    abstract getSapia():void 
    getReelTime():number{
        //some complex calculations
        return 8;
    }
}

class Instagram2 extends TakePhoto2{
    constructor(
        public mode: string,
        public filter: string
    ){
        super(mode, filter)
    }

    getSapia(): void {
        console.log('sapia');
    }
}

const obj = new Instagram2('test', 'test');

obj.getReelTime()  // this is the diffrence between interface and abstract bcz we can use the methode of abstract class like this