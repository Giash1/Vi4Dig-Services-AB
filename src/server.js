const app = require('./app'); // Import the Express app

const PORT = process.env.PORT || 3001; 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
