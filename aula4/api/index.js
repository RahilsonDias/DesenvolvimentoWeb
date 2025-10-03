const express = require("express");
const app = express();
const PORT = 3000;
const users = []; // Banco de dados temporário

// Middleware para interpretar JSON
app.use(express.json());

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);
  if (userIndex === -1)
    return res.status(404).json({ error: "Usuário não encontrado" });

  users[userIndex] = { ...users[userIndex], ...req.body };
  res.status(200).json(users[userIndex]);
});

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);
  if (userIndex === -1)
    return res.status(404).json({ error: "Usuário não encontrado" });

  users.splice(userIndex, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
