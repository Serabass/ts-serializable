"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Serializable = /** @class */ (function () {
    function Serializable() {
    }
    Object.defineProperty(Serializable.prototype, "serialized", {
        get: function () {
            if (!this._serializedCache) {
                this._serializedCache = this.serialize();
            }
            return this._serializedCache;
        },
        enumerable: true,
        configurable: true
    });
    Serializable.prototype.toJSON = function (compact) {
        if (compact === void 0) { compact = true; }
        var serialized = this.serialized;
        if (compact) {
            return JSON.stringify(serialized);
        }
        return JSON.stringify(serialized, null, 4);
    };
    return Serializable;
}());
exports.Serializable = Serializable;
//# sourceMappingURL=Serializable.js.map