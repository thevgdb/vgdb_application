"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
const Component_1 = require("./Component");
class Device extends Component_1.Component {
    constructor() {
        super();
        this.name = 'Device';
    }
    init() {
    }
    isMobile() {
        return navigator["userAgentData"].mobile;
    }
    isDesktop() {
    }
}
exports.Device = Device;
//# sourceMappingURL=Device.js.map