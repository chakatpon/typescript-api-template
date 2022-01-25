import { Application }  from "express";
import BrokerRoutes     from "./BrokerRoutes";

export default class Routes {
    constructor(app: Application) {
        app.use('/api/broker', BrokerRoutes)
    }
}