const user = [

  {
    userId: 1,
  },

  {
    userId: 2,
  },

  {
    userId: 3,
  },
];

const requestListenerJson = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  const response = {};
  switch (req.url) {
    case '/':
      response.data = {};
      break;
    case '/users':
      response.data = user;

      break;
    default:
      response.message = 'Not Found';
      response.status = 404;
      break;
  }
  res.end(JSON.stringify(response));
};

export default requestListenerJson;
