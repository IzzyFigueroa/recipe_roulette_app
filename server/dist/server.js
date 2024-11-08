import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';
import { client } from './models/index.js';
import cookieParser from 'cookie-parser';
import routes from './routes/api/index.js';
const app = express();
const PORT = process.env.PORT || 3333;
app.use(express.json());
app.use(cookieParser());
app.use('/', routes);
await client.sync({ force: true });
// Render related code for deployment
if (process.env.PORT) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    app.use(express.static(path.join(__dirname, '../../client/dist')));
    app.get('*', (_, res) => {
        res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
    });
}
app.listen(PORT, () => console.log('Express server started'));
