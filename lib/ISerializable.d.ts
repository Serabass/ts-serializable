export interface ISerializable<T> {
    serialized: T;
    serialize(): T;
    deserialize(data: T): void;
}
