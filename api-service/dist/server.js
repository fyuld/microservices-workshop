"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorhandler_1 = __importDefault(require("errorhandler"));
const app_1 = require("./app");
/**
 * Error Handler. Provides full stack - remove for production
 */
app_1.app.use(errorhandler_1.default());
/**
 * Start Express server.
 */
const server = app_1.app.listen(app_1.app.get('port'), () => {
    console.log('  App is running at http://localhost:%d in %s mode', app_1.app.get('port'), app_1.app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});
exports.server = server;
//# sourceMappingURL=server.js.map