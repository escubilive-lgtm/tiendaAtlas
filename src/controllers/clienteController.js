import Clientes from '../models/Clientes.js';

export const renderClientes = async (req, res) => {
  const clientes = await Clientes.find().lean();
  res.render("clientes", { clientes: clientes });
};

export const createClientes = async (req, res) => {
  try {
      const clientes = Clientes(req.body);
        await clientes.save();
        res.redirect("/clientes");
    } catch (error) {
    console.log(error);
    }
};

export const renderEditCliente = async (req, res) => {
    try {
        const clientes = await Clientes.findById(req.params.id).lean();
        res.render("editarCliente" , {clientes}); 
    } catch (error) {
        console.log(error.message);
    }
};

export const updateClientes = async (req, res) => {
  const { id } = req.params;
  await Clientes.findByIdAndUpdate(id, req.body);
  res.redirect("/clientes");
};

export const deleteClientes = async (req, res) => {
  const { id } = req.params;
  await Clientes.findByIdAndDelete(id);
  res.redirect("/clientes");
};

export const statusClientes = async (req, res) => {
  const { id } = req.params;
  const clientes = await Clientes.findById(id); 
  clientes.opcion = !clientes.opcion;
  await clientes.save();
  res.redirect("/clientes");
};