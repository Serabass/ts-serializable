import {expect} from 'chai';
import {Serializable} from '../src/Serializable';

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
    });
});
