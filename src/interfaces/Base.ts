import { Guid } from "guid-typescript"

export default interface Base {
    id: Guid;
    name: string;
    size: number;
    parent: Base;
    genome: string;

    output(): string;
}