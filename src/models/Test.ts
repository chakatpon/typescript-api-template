import { Model, DataTypes } from "sequelize";
import { sequelize }        from "../db/db";

export class Test extends Model {
    public id           !: number;
    public test_column  !: string;
    public test_column2 !: string; 
}

Test.init(
    {
        id          : { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        test_column : { type: DataTypes.STRING},
        test_column2: { type: DataTypes.STRING}
    },
    {
        sequelize,
        tableName: 'TEST_TABLE'
    }
)