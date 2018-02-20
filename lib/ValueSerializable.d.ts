import { Serializable } from "./Serializable";
export interface Value<T> {
    value: T;
}
export declare class ValueSerializable<T> extends Serializable<Value<T>> {
    value: T;
    constructor(value?: T);
    serialize(): Value<T>;
    deserialize(data: Value<T>): void;
}
