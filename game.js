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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var canvas = wx.createCanvas(); //创建画布
var ctx = canvas.getContext("2d"); //创建一个2d 画笔
var _a = wx.getSystemInfoSync(), windowWidth = _a.windowWidth, windowHeight = _a.windowHeight;
function createImage(info) {
    var img = wx.createImage();
    img.src = "./images/" + info + ".png";
    return new Promise(function (resolve, reject) {
        img.onload = function () {
            resolve(img);
        };
    });
}
var initData = { x: 0, y: 0, width: 0, height: 0 };
var getData = function () {
    var x = Math.random() * windowWidth - 50;
    return {
        bg: __assign(__assign({}, initData), { width: windowWidth, height: windowHeight, step: 0 }),
        dog: __assign(__assign({}, initData), { x: windowWidth / 2 - 50, y: windowHeight - 100, step: 0 }),
        food1: __assign(__assign({}, initData), { x: Math.random() * windowWidth - 50, step: 1 }),
        shit: __assign(__assign({}, initData), { x: Math.random() * windowWidth - 50, step: 1 })
    };
};
var Kind;
(function (Kind) {
    Kind[Kind["Negative"] = 0] = "Negative";
    Kind[Kind["Positive"] = 1] = "Positive";
})(Kind || (Kind = {}));
var Entity = /** @class */ (function () {
    function Entity(info, feature) {
        this.info = info;
        this.feature = feature;
    }
    Entity.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, createImage(this.info.name)];
                    case 1:
                        _a.image = _b.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    Entity.prototype.render = function (context) {
        if (context === void 0) { context = ctx; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, x, y, width, height;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.image) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _a = this.feature, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                        if (width && height) {
                            ctx.drawImage(this.image, x, y, width, height);
                        }
                        else {
                            ctx.drawImage(this.image, x, y);
                        }
                        return [2 /*return*/, this];
                }
            });
        });
    };
    return Entity;
}());
var MovedEntity = /** @class */ (function (_super) {
    __extends(MovedEntity, _super);
    function MovedEntity(info, feature, step) {
        var _this = _super.call(this, info, feature) || this;
        _this.info = info;
        _this.feature = feature;
        _this.step = step;
        return _this;
    }
    MovedEntity.prototype.move = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.feature.y += this.step;
                        if (this.feature.y > windowHeight) {
                            this.feature.y = 0;
                            if (this.step < 3) {
                                this.step += 1;
                            }
                        }
                        return [4 /*yield*/, this.render(this.feature)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    return MovedEntity;
}(Entity));
var WORLD = { score: 0 };
var AutoMovedEntity = /** @class */ (function (_super) {
    __extends(AutoMovedEntity, _super);
    function AutoMovedEntity(info, feature, step, kind) {
        var _this = _super.call(this, info, feature, step) || this;
        _this.info = info;
        _this.feature = feature;
        _this.step = step;
        _this.kind = kind;
        return _this;
    }
    AutoMovedEntity.prototype.move = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.feature.y += this.step;
                        if (this.feature.y > windowHeight) {
                            this.feature.y = 0;
                            if (this.step < 3) {
                                this.step += 1;
                            }
                        }
                        return [4 /*yield*/, this.render(this.feature)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    AutoMovedEntity.prototype.match = function (target) {
        var x = target.x, y = target.y, width = target.width, height = target.height;
        if (Math.abs(this.feature.x - x) < 20 &&
            Math.abs(this.feature.y - y) < 20) {
            this.hit();
            var food1 = getData().food1;
            this.feature = __assign(__assign({}, this.feature), food1);
        }
    };
    AutoMovedEntity.prototype.hit = function () {
        // 得分
        if (this.kind === Kind.Positive) {
            console.log("得分");
            WORLD.score++;
        }
        else {
            // 扣分
            console.log("扣分");
            WORLD.score -= 10;
        }
    };
    return AutoMovedEntity;
}(MovedEntity));
function run() {
    return __awaiter(this, void 0, void 0, function () {
        function render() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    list.map(function (item) { return item.match(dog.feature); });
                    Promise.all(__spreadArrays([bg, dog], list).map(function (item) { return item.move(); }));
                    ctx.font = "20px Georgia";
                    ctx.fillText(String(WORLD.score), 10, 20);
                    requestAnimationFrame(render);
                    return [2 /*return*/];
                });
            });
        }
        var data, _a, bg, dog, list;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    data = getData();
                    return [4 /*yield*/, Promise.all(Object.keys({ bg: data.bg, dog: data.dog }).map(function (key) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, new MovedEntity({ name: key }, data[key], 0).init()];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 1:
                    _a = _b.sent(), bg = _a[0], dog = _a[1];
                    list = [];
                    setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                        var data, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    if (list.length > 10) {
                                        return [2 /*return*/];
                                    }
                                    data = getData();
                                    _b = (_a = list).push;
                                    return [4 /*yield*/, new AutoMovedEntity({ name: "shit" }, data.shit, data.shit.step, Kind.Negative).init()];
                                case 1:
                                    _b.apply(_a, [_c.sent()]);
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 1000 * 10);
                    setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                        var data, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    if (list.length > 10) {
                                        return [2 /*return*/];
                                    }
                                    data = getData();
                                    _b = (_a = list).push;
                                    return [4 /*yield*/, new AutoMovedEntity({ name: "food1" }, data.food1, data.food1.step, Kind.Positive).init()];
                                case 1:
                                    _b.apply(_a, [_c.sent()]);
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 1000 * 1);
                    render();
                    wx.onTouchMove(function (res) {
                        dog.feature.x = res.changedTouches[0].clientX - 50;
                        dog.feature.y = res.changedTouches[0].clientY - 50;
                    }); //狗狗跟随触摸点移动
                    return [2 /*return*/];
            }
        });
    });
}
run();
