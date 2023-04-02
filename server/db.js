import { createPool } from "mysql2/promise";

/*Importamos createPool para crear una piscina de conexiones que agilicen la conexión ya que evita que cierren y conecten constantemente puesto que, permanecen abiertas*/
export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '2Cfgs',
    database: 'mern_stack_task_fazt',
    charset: 'utf8mb4',
    connectionLimit: 10,
});








