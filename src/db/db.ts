import { Sequelize, Options } from "sequelize";

const options: Options = { 
	username: "webusers",
	password: "webusers",
	database: "BrokerWebServiceDB",
	host: "172.16.11.41",
	dialect: "mssql",
	logQueryParameters: true,
	benchmark: true,
    }

export const sequelize: Sequelize = new Sequelize(options);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully..');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });