import server from './server';

const PORT = process.env.PORt || 4001;

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
