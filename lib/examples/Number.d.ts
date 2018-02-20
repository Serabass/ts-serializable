import { Value, ValueSerializable } from "../src/ValueSerializable";
export declare class NumberValueSerializable extends ValueSerializable<number> {
    serialize(): Value<number>;
    deserialize(data: Value<number>): void;
}
