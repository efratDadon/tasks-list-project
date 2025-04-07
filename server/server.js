require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task API',
      version: '1.0.0',
      description: 'API for managing tasks',
    },
  },
  apis: ['./routes/taskRoutes.js'], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api/tasks', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const taskRoutes = require('./routes/taskRoutes');
app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
