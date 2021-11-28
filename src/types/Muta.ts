import Base from "../interfaces/Base";
import { Guid } from "guid-typescript";

export default class Muta implements Base {
    id: Guid;
    name: string;
    size: number;
    parent: Base;
    genome: string;

    constructor(name: string, size: number, parent: Base, genome: string) {
        this.name = name;
        this.size = size;
        this.parent = parent;
        this.genome = genome;

        this.id = Guid.create();
    }

    getParent(): string {
        return this.parent !== null ? this.parent.id.toString() : 'NONE';
    }

    output(): string {
        return `id: ${this.id.toString()}\nparentId: ${this.getParent()}\nname: ${this.name}\nsize: ${this.size}\ngenome: ${this.genome}`;
    }
}