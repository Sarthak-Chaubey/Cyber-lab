const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <h2>Login Page</h2>
    <form method="POST" action="/login">
      <input name="username" placeholder="username"/>
      <input name="password" placeholder="password"/>
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if(username === 'admin' && password === 'admin123') {
    res.send("Welcome Admin");
  } else {
    res.send("Invalid login");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));