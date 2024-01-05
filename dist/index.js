"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var message = "fuck the world";
console.log(message.toUpperCase());
var fullname = "marchuang";
var age = 33;
var working = true;
var tuple = ["marchuang", 33, true];
var RequestStatus;
(function (RequestStatus) {
    RequestStatus[RequestStatus["success"] = 1] = "success";
    RequestStatus[RequestStatus["failed"] = 0] = "failed";
})(RequestStatus || (RequestStatus = {}));
var current_status = RequestStatus.success;
var weight;
weight = 45;
weight = "45kg";
var height;
height = 153;
height = "153cm";
var persion = {
    name: "marchuang",
    age: 33,
    working: true,
};
var worker = {
    name: "marchuang",
    age: 33,
};
var sayHello = function (hello, message, greeting) {
    if (greeting === undefined)
        return hello + message;
    return hello + message + greeting;
};
var getData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, fetch("https://jsonplaceholder.typicode.com/todos/1")];
            case 1:
                res = _a.sent();
                return [4, res.json()];
            case 2:
                data = (_a.sent());
                return [2];
        }
    });
}); };
var Company = (function () {
    function Company(company_name, company_address, company_income) {
        this.name = company_name;
        this.address = company_address;
        this.income = company_income;
    }
    Company.prototype.revealIncome = function () {
        console.log(this.income);
    };
    return Company;
}());
var ChildCompany = (function (_super) {
    __extends(ChildCompany, _super);
    function ChildCompany(company_name, company_address, company_income) {
        return _super.call(this, company_name, company_address, company_income) || this;
    }
    return ChildCompany;
}(Company));
var marc_company = new Company("Marc inc.", "Earth", 999999);
var little_marc_company = new ChildCompany("Doge inc.", "Moon", 1);
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray(3, "x");
createArray(3, 1);
//# sourceMappingURL=index.js.map