import {ISerializable} from './ISerializable';

export abstract class Serializable<T> implements ISerializable<T> {
    public abstract serialize(): T;
    public abstract deserialize(data: T): void;

    public abstract get serialized(): T;

    public toJSON(compact: boolean = true): string {
        if (compact) {
            return JSON.stringify(this.serialize());
        }

        return JSON.stringify(this.serialize(), null, 4);
    }
}
