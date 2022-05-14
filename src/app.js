const express = require("express");
const connectToDatabase = require("./db/mongoose");
const Todo = require("./models/todo");
const app = express();
const PORT = process.env.PORT || 8080;

(async () => {
  await connectToDatabase();

  app.use(express.json());

  // Create new Todo:

  app.post("/todos", async (req, res) => {
    try {
      const todo = Todo(req.body);
      await todo.save();
      res.send(todo);
    } catch (err) {
      res.status(400).send();
    }
  });

  // Read todo's:

  app.get("/todos", async (req, res) => {
    try {
      const todos = await Todo.find({});
      res.send(todos);
    } catch {
      res.status(500).send();
    }
  });

  // Read todo:

  app.get("/todos/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const todo = await Todo.findById(id);
      if (!todo) {
        return res.status(400).send();
      }
      res.send(todo);
    } catch {
      res.status(500).send();
    }
  });

  // Update todo:

  app.patch("/todos/:id", async (req, res) => {
    try {
      const updates = Object.keys(req.body);
      const allowedUpdates = ["description", "completed"];
      const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
      });
      if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid updates!" });
      }
      const id = req.params.id;
      const todo = await Todo.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!todo) {
        return res.status(404).send();
      }
      res.send(todo);
    } catch {
      res.status(400).send(e);
    }
  });

  // Delete todo:

  app.delete("/todos/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const todo = await Todo.findByIdAndDelete(id);
      if (!todo) {
        return res.status(404).send();
      }
      res.send(todo);
    } catch {
      res.status(500).send();
    }
  });

  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });
})().catch((err) => {
  console.log(err);
});
