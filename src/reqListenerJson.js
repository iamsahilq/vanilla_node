import { readFile, writeFile } from './json';
import getReqData from './utils';

const requestListenerJson = async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    const response = {};
    if (req.method === 'GET') {
      switch (req.url) {
        case '/':
          response.data = {};
          break;
        case '/getJson':
          response.data = readFile();
          break;
        default:
          response.message = 'Not Found';
          response.status = 404;
          break;
      }
    } else if (req.method === 'POST') {
      const body = await getReqData(req);
      req.body = body;
      switch (req.url) {
        case '/setJson':
          response.data = writeFile(req.body);
          break;
        default:
          response.message = 'Not Found';
          response.status = 404;
          break;
      }
    }
    return res.end(JSON.stringify(response));
  } catch (error) {
    console.log('error :>> ', error);
    return res.end(JSON.stringify(error));
  }
};

export default requestListenerJson;
