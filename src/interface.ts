interface TakePhoto{
    mode:string,
    filter:string,
    burst:number
}

interface Story{
    createSotry(): void
}

class Instagram implements TakePhoto, Story{
    constructor(
        public mode:string,
        public filter:string,
        public burst:number
    ){}
    createSotry(): void {
        console.log('story was created')
    }
}

class Youtube implements TakePhoto{
    constructor(
        public mode:string,
        public filter:string,
        public burst:number,
        public short:string
    ){}
}

