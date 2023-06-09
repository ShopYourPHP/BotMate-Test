"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = exports.SettingsScope = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
var SettingsScope;
(function (SettingsScope) {
    SettingsScope["GLOBAL"] = "global";
    SettingsScope["BOT"] = "bot";
    SettingsScope["CHAT"] = "chat";
    SettingsScope["USER"] = "user";
})(SettingsScope = exports.SettingsScope || (exports.SettingsScope = {}));
let Settings = class Settings {
};
__decorate([
    (0, swagger_1.ApiResponseProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Settings.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Settings.prototype, "key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: SettingsScope,
    }),
    (0, typeorm_1.Column)({ default: SettingsScope.GLOBAL }),
    __metadata("design:type", String)
], Settings.prototype, "scope", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'any',
    }),
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], Settings.prototype, "value", void 0);
Settings = __decorate([
    (0, typeorm_1.Entity)({ name: 'settings' })
], Settings);
exports.Settings = Settings;
//# sourceMappingURL=settings.entity.js.map