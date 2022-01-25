import { Test } from "../models/Test";

class TestRepo {
    constructor() {

    }

    getAll() {
        return Test.findAll()
    }
}

export default new TestRepo();