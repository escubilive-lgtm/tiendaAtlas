import { Router } from "express";
import Productos from '../models/Productos';
import { createProductos, deleteProductos, renderEditProducto, renderProductos, statusProductos, updateProductos } from "../controllers/productoController";
import Clientes from "../models/Clientes";
import { createClientes, deleteClientes, renderEditCliente, renderClientes, statusClientes, updateClientes } from "../controllers/clienteController";   

const router = Router();

//rutas para productos
router.get("/", renderProductos);

router.post("/productos/agregar", createProductos);

router.get("/productos/:id/update", renderEditProducto);

router.post("/productos/:id/update", updateProductos);

router.get("/productos/:id/delete", deleteProductos);

router.get("/productos/:id/status", statusProductos);

// Rutas para clientes
router.get("/clientes", renderClientes);

router.post("/clientes/agregar", createClientes);

router.get("/clientes/:id/update", renderEditCliente);

router.post("/clientes/:id/update", updateClientes);

router.get("/clientes/:id/delete", deleteClientes);

router.get("/clientes/:id/status", statusClientes);

export default router;