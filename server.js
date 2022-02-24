const app = require('./app');
const dotenv = require('dotenv');

const database = require('./config/database');

// Config

dotenv.config({ path: 'config/config.env' });

// Connecting to Database
database();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
