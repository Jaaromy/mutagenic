import Base from "./interfaces/Base";
import Muta from "./types/Muta"

const writeMessage = (message: string) => {
    console.log(message);
}

const printBase = (thing: Base) => {
    console.log(thing.output());
}

let myThing = new Muta('first', 10, new Muta('initial', 5, null, 'aaaaaa'), 'bbbbbb');

printBase(myThing);
