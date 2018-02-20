import {Serializable} from "./Serializable";

export interface Value<T> {
    value: T;
}

export class ValueSerializable<T> extends Serializable<Value<T>> {
    public constructor(public value?: T) {
        super();
    }

    public serialize(): Value<T> {
        return {
            value: this.value
        }
    }

    public deserialize(data: Value<T>): void {
        this.value = data.value;
    }
}
