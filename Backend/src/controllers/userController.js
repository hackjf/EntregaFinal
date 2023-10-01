const User = require('../models/User');

const obtenerusers = async (req, res) => {
  const user = await User.find();
  res.json(user);
};

const find = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      next(err);
    });
};

const nuevouser = async (req, res) => {
  const user = new User(req.body);

  try {
    const userAlmacenado = await user.save();
    res.json(userAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const obteneruser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    const error = new Error('No Encontrado');
    return res.status(404).json({ msg: error.message });
  }
  res.json(user);
};

const editaruser = async (req, res) => {
  req.user = Object.assign(req.user, req.body);
  req.user
    .save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};

const eliminaruser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    const error = new Error('No Encontrado');
    return res.status(404).json({ msg: error.message });
  }

  try {
    await user.deleteOne();
    res.json({ msg: 'user Eliminado' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  obtenerusers,
  nuevouser,
  obteneruser,
  editaruser,
  eliminaruser,
  find,
};
