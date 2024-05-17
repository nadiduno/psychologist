const getAll = (req, res) => {
  return res.render("index");
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    message = "Por favor, preencha a descrição da tarefa!";
    type = "danger";
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    message = "Tarefa criada com sucesso";
    type = "success";
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAll,
  createTask,
};
