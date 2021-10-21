"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const Component_1 = require("./Component");
class Logger extends Component_1.Component {
    constructor() {
        super();
        this.name = 'Logger';
    }
    init() {
    }
    log(message) {
        console.log(message);
    }
    error(message) {
        console.error(message);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map