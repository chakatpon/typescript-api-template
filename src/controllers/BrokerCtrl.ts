import { Request, 
         Response, 
         NextFunction }     from 'express';
import { apiErrorHandler }  from './../handlers/errorHandler';
import TestRepo             from '../repositories/TestRepo'


export default class BrokerCtrl {
    constructor() {
        // do something in constructor.
     }

    async getBroker(req: Request, res: Response, next: NextFunction) {
        try {
            const testResponse = await TestRepo.getAll();
            res.json(testResponse)
        } catch (error) {
            apiErrorHandler(error, req, res, "Broker Controller Error.")
        }
    }
}