"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const Component_1 = require("./Component");
class Application extends Component_1.Component {
    constructor() {
        super();
        this.name = 'VGDB';
        this.baseUrl = '/';
    }
    setConfigs(configs) {
        for (const config in configs) {
            if (config === 'baseUrl') {
                this.setBaseUrl(configs[config]);
            }
        }
    }
    setBaseUrl(baseUrl) {
        this.baseUrl = baseUrl;
    }
    getBaseUrl() {
        return this.baseUrl;
    }
    init() {
        console.log('The application has been initialized.');
    }
}
exports.Application = Application;
//# sourceMappingURL=Application.js.map