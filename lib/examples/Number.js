"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ValueSerializable_1 = require("../src/ValueSerializable");
var NumberValueSerializable = /** @class */ (function (_super) {
    __extends(NumberValueSerializable, _super);
    function NumberValueSerializable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberValueSerializable.prototype.serialize = function () {
        return {
            value: this.value
        };
    };
    NumberValueSerializable.prototype.deserialize = function (data) {
        this.value = data.value;
    };
    return NumberValueSerializable;
}(ValueSerializable_1.ValueSerializable));
exports.NumberValueSerializable = NumberValueSerializable;
//# sourceMappingURL=Number.js.map