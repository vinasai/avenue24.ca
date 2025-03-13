const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
const PORT =  process.env.PORT;

app.use(cors({
    origin: 'https://avenue24.ca'
  }));
  
app.use(express.json());

app.use('/api/contact', require('./contactus'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});