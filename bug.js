const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUserById(userId, (err, user) => {
    if (err) {
      // This will throw an error to the client instead of being handled properly
      throw new Error('Failed to fetch user');
    } else if (!user) {
      // No user found, should return 404
      res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));