import { Data } from "./Data"

class Logic {
    protected stringStore: Array<Data>
    constructor() {
        this.stringStore = new Array<Data>();
        this.stringStore.push(new Data("a"));
        this.stringStore.push(new Data("bbb"));
        this.stringStore.push(new Data("cc"));
        this.stringStore.push(new Data("dddd"));
        this.stringStore.push(new Data("eeeeeeeee"));
        this.stringStore.push(new Data("hhhhhhh"));
    }

    sortByLength(): Array<Data> {
        this.stringStore.sort((a, b) => { return a.getDataLength() - b.getDataLength() });
        return this.stringStore;
    }

    reverse(): Array<Data> {
        let result = Array<Data>();
        this.stringStore.forEach((e, i) => {
            result.push(this.stringStore[this.stringStore.length - i - 1]);
        });
        this.stringStore = result;
        return this.stringStore;
    }

    getStore(): Array<Data> {
        return this.stringStore;
    }

    serializeStore(): string {
        return JSON.stringify(this.stringStore);
    }
}

let logic = new Logic();
console.log(`Original Store : ${logic.serializeStore()}`);
logic.sortByLength();
console.log();
console.log(`Sorted by Length Store : ${logic.serializeStore()}`);
logic.reverse();
console.log();
console.log(`Reversed Store : ${logic.serializeStore()}`);
