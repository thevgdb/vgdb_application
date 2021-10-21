// interface ComponentInterface {
//     // component_name: string,
//     getComponentName(): string;
// };

// class BaseComponent implements ComponentInterface {
export class Component {
    protected components: Object = {};

    constructor() {
        //
    }


    /**
     * Add a child component to the Component.
     *
     * @param component
     */
    // @ts-ignore
    addComponent(component) {
        // this.components.push(component);
    }

    removeComponent(component_name) {
        // @ts-ignore
        for(let component of this.components) {
            // @ts-ignore
            if(component.getName() === component_name) {

            }
        }

        // this.components.forEach((component) => {
        //     if(component.getName() === component_name) {
        //
        //     }
        // });
    }

    getComponents() {
        return this.components;
    }

    /**
     * Get a child component by its name.
     *
     * @param name
     */
    getComponent(name) {
        // @ts-ignore
        this.components.forEach((component) => {
            // @ts-ignore
            if(component.getName() === name) {
                return component;
            }
        });
        return null;
    }

    // init(component_name) {
    //     this.component_name = component_name;
    // }

    // setComponentName(component_name) {
    //     this.component_name = component_name;
    // }

    // componentName(): string {
    //     //return this.component_name;
    //     return "";
    // }

    // static componentName(): string {
    //     return "";
    // }
}
