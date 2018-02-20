import { ISerializable } from './ISerializable';

export abstract class Serializable<T> implements ISerializable<T> {
    public abstract serialize(): T;
    public abstract deserialize(data: T): void;

    protected _serializedCache: T;

    public get serialized(): T {
        if ( !this._serializedCache) {
            this._serializedCache = this.serialize();
        }
        return this._serializedCache;
    }

    public toJSON(compact: boolean = true): string {
        if (compact) {
            return JSON.stringify(this.serialize());
        }

        return JSON.stringify(this.serialize(), null, 4);
    }
}
