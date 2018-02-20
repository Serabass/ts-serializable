import {Serializable} from "./Serializable";

export interface Value<T> {
    value: T;
}

export abstract class ValueSerializable<T> extends Serializable<Value<T>> {
    public constructor(public value?: T) {
        super();
    }
}
