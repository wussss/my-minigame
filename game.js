var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var _this = this;
var canvas = wx.createCanvas(); //创建画布
var ctx = canvas.getContext("2d"); //创建一个2d 画笔
var _a = wx.getSystemInfoSync(), windowWidth = _a.windowWidth, windowHeight = _a.windowHeight;
function createImage(name) {
    var img = wx.createImage();
    img.src = "./images/" + name + ".png";
    return new Promise(function (resolve, reject) {
        img.onload = function () {
            resolve(img);
        };
    });
}
var Entity = /** @class */ (function () {
    function Entity(name, info) {
        this.name = name;
        this.info = info;
    }
    Entity.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, createImage(this.name)];
                    case 1:
                        _a.image = _b.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    Entity.prototype.render = function (info) {
        if (info === void 0) { info = this.info; }
        return __awaiter(this, void 0, void 0, function () {
            var x, y, width, height;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.name, " render");
                        if (!this.image) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        x = info.x, y = info.y, width = info.width, height = info.height;
                        ctx.drawImage(this.image, x, y);
                        return [2 /*return*/, this];
                }
            });
        });
    };
    return Entity;
}());
var MovedEntity = /** @class */ (function (_super) {
    __extends(MovedEntity, _super);
    function MovedEntity(name, info, step) {
        if (step === void 0) { step = 0; }
        var _this = _super.call(this, name, info) || this;
        _this.name = name;
        _this.info = info;
        _this.step = step;
        return _this;
    }
    MovedEntity.prototype.move = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.name, " move");
                        this.info.y += this.step;
                        return [4 /*yield*/, this.render(this.info)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    return MovedEntity;
}(Entity));
var initData = { x: 0, y: 0, width: 0, height: 0 };
var data = {
    // bg: { ...initData, width: windowWidth, height: windowHeight },
    dog: __assign(__assign({}, initData), { x: windowWidth / 2 - 50, y: windowHeight - 100 }),
    food1: __assign(__assign({}, initData), { x: windowWidth / 2 - 50 })
};
console.log("entry");
Promise.all(Object.keys(data).map(function (key) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, new MovedEntity(key, data[key]).init()];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); })).then(function (entities) {
    console.log("start");
    function render() {
        console.log("render");
        // ctx.clearRect(0, 0, windowWidth, windowHeight); //清除整个画布
        entities.forEach(function (item) { return item.move(); });
        requestAnimationFrame(render); //自动重绘
    }
    render();
});
// function renderEach(x, y, x1, y1) {
//   ctx.clearRect(0, 0, windowWidth, windowHeight); //清除整个画布
//   ctx.drawImage(bg, 0, 0, windowWidth, windowHeight); //背景图
//   ctx.drawImage(dog, x, y); //狗狗
//   ctx.drawImage(food, x1, y1); //食物
// }
// wx.onTouchMove((res) => {
//   dX = res.changedTouches[0].clientX;
//   dY = res.changedTouches[0].clientY;
// }); //狗狗跟随触摸点移动
