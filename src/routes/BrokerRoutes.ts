import { Router } from 'express'
import BrokerCtrl from '../controllers/BrokerCtrl';

class BrokerRoutes {
    router      = Router();
    brokerCrtl  = new BrokerCtrl();

    constructor() {
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/').get(this.brokerCrtl.getBroker);
    }
}

export default new BrokerRoutes().router;