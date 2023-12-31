import 'dotenv/config';
import express from 'express';
import { DBconnection } from './database/dbConnection.js';
import { bootstrap } from './src/bootstrap.js';
import { globalErrorHandler } from './src/utils/globalErrorHandler.js';
const app = express();
const port = 4000 || process.env.PORT;
bootstrap(app, express);
DBconnection();
app.use(globalErrorHandler);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
