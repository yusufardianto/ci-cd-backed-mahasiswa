import { Sequelize } from "sequelize";

const db = new Sequelize("crud_db", "root", "", {
  host: "mahasiswa-crud.csabwanlsfer.ap-southeast-1.rds.amazonaws.com",
  dialect: "mysql",
});

export default db;
