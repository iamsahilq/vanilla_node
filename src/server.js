import http from 'http';

import requestListenerJson from './reqListenerJson';

const server = http.createServer(requestListenerJson);

export default server;
