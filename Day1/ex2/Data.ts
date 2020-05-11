export class Data {
    constructor(private data: string) {

    }

    getData(): string{ return this.data; }

    getDataLength(): number{ return this.data.length; }
}