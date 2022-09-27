import { DatabaseSingleton } from "./databaseSingleton";

let db: DatabaseSingleton;

db = DatabaseSingleton.getInstance();
db.executarQuery('SELECT * FROM tblCliente');

let db2: DatabaseSingleton;

db2 = DatabaseSingleton.getInstance();
db.executarQuery('SELECT * FROM tblProduto')