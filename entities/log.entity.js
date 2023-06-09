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
exports.Log = void 0;
const log_types_1 = require("../common/log.types");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Log = class Log {
};
__decorate([
    (0, swagger_1.ApiResponseProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Log.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Log.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        enum: log_types_1.LogLevel,
    }),
    __metadata("design:type", String)
], Log.prototype, "level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: log_types_1.LogType,
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Log.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Log.prototype, "timestamp", void 0);
Log = __decorate([
    (0, typeorm_1.Entity)()
], Log);
exports.Log = Log;
//# sourceMappingURL=log.entity.js.map