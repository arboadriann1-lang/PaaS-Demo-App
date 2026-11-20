const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const currentTime = new Date().toISOString();
  res.send(`
    <html>
      <head>
        <title>My First PaaS App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding-top: 100px;
          }
          h1 { color: #222; }
        </style>
      </head>
      <body>
        <h1>Welcome to My First PaaS App!</h1>
        <p>Deployed successfully using Platform as a Service.</p>
        <p>Current Server Time: ${currentTime}</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
