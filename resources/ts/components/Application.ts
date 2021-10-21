import {Component} from "./Component";
import {Device} from "./Device";

export class Application extends Component {
    /**
     * The application's name.
     *
     * @protected
     */
    protected readonly name: string = 'VGDB';

    /**
     * The application's base URL.
     *
     * @protected
     */
    protected baseUrl: string = '/';

    constructor() {
        super();

        this.addComponent(Device);

        console.log('Created a new ' + this.constructor.name);

        // super.component_name = "Application";
        // super.component_name = this.component_name;
        // super.init(this.component_name);

        // super("Application");
        // this.component_name = "";
        //
        //this.name = "Application";
    }

    /**
     * Configure the component.
     *
     * @param configs
     * @returns {{}|*}
     */
    setConfigs(configs) {
        // Looping through to ensure only valid properties are processed
        for(const config in configs) {
            // console.log(`${config}: ${configs[config]}`);

            if(config === 'baseUrl') {
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

    // get componentName(): string {
    //     return this.component_name;
    // }
}
