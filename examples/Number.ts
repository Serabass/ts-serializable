import {Value, ValueSerializable} from "../src/ValueSerializable";

export class NumberValueSerializable extends ValueSerializable<number> {
    public serialize(): Value<number> {
        return {
            value: this.value
        }
    }

    public deserialize(data: Value<number>): void {
        this.value = data.value;
    }
}
