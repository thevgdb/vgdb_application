import {Component} from "./Component";

export class Logger extends Component {
    protected readonly name: string = 'Logger';

    constructor() {
        super();
    }

    init() {
        //
    }

    /**
     * Write a message to the console.
     *
     * @param message
     */
    log(message) {
        console.log(message);
    }

    /**
     * Write an error message to the console.
     *
     * @param message
     */
    error(message) {
        console.error(message);
    }
}
