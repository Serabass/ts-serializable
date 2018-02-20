import {expect} from 'chai';
import {Serializable} from '../src/Serializable';
import {NumberValueSerializable} from "../examples/Number";

const {describe, it} = global;

interface IMyClass {
    value: string;
    numeric: number;
}

class MyClass extends Serializable<IMyClass> {
    public value: string;
    public numeric: number;

    public serialize(): IMyClass {
        let { value, numeric} = this;
        return { value, numeric };
    }

    public deserialize(data: IMyClass): void {
        this.value = data.value;
        this.numeric = data.numeric;
    }
}

describe('obj', () => {
    it('works', () => {
        let myObject = new MyClass();
        myObject.value = "hello";
        myObject.numeric = 123;
        expect(myObject.serialized.value).to.equals("hello");
        expect(myObject.serialized.numeric).to.equals(123);

        let numberObject = new NumberValueSerializable(6);
        let numberObject2 = new NumberValueSerializable();
        expect(numberObject.serialized.value).to.equals(6);
        numberObject2.deserialize(numberObject.serialized);
        expect(numberObject2.value).to.equals(6);
    });
});
