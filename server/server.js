require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const authenticateToken = require('./middleware/authMiddleware');
const authRoutes = require('./routes/authRoutes');

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
      description: 'API for managing tasks and authentication',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',  
        },
      },
    },
    security: [
      {
        bearerAuth: [], 
      },
    ],
  },
  apis: ['./routes/taskRoutes.js', './routes/authRoutes.js'], 
};


const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(authRoutes); 
app.use(authenticateToken)
const taskRoutes = require('./routes/taskRoutes');
app.use('/tasks', taskRoutes); 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
