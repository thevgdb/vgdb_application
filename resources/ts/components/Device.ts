import {Component} from "./Component";

export class Device extends Component {
    protected readonly name: string = 'Device';

    constructor() {
        super();
    }

    init() {
        //
    }

    isMobile() {
        return navigator["userAgentData"].mobile;
    }

    isDesktop() {

    }


}
