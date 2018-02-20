import { ISerializable } from './ISerializable';
export declare abstract class Serializable<T> implements ISerializable<T> {
    abstract serialize(): T;
    abstract deserialize(data: T): void;
    protected _serializedCache: T;
    readonly serialized: T;
    toJSON(compact?: boolean): string;
}
