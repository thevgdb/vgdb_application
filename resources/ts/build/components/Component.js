"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
class Component {
    constructor() {
        this.components = {};
    }
    addComponent(component) {
    }
    removeComponent(component_name) {
        for (let component of this.components) {
            if (component.getName() === component_name) {
            }
        }
    }
    getComponents() {
        return this.components;
    }
    getComponent(name) {
        this.components.forEach((component) => {
            if (component.getName() === name) {
                return component;
            }
        });
        return null;
    }
}
exports.Component = Component;
//# sourceMappingURL=Component.js.map