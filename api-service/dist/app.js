"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const health_1 = require("./health");
const unicorns_1 = require("./unicorns");
const app = express_1.default();
exports.app = app;
app.set('port', process.env.PORT || 3000);
app.use(compression_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use('/unicorns', unicorns_1.unicornResource);
app.get('/health', health_1.readHealth);
//# sourceMappingURL=app.js.map