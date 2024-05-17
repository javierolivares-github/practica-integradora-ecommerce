import { Router } from "express";
import productDao from "../dao/mongoDao/product.dao.js";

// ROUTER
const router = Router();

// ROUTES
router.get("/", async (req, res) => {
  try {
    const products = await productDao.getAll();
    res.status(200).json({ status: "success", payload: products });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:pid", async (req, res) => {
  try {
    const { pid } = req.params;
    const product = await productDao.getById(pid);
    if (!product) return res.status(404).json({ status: "Error", msg: `The product with the id ${id} was not found.` });
    res.status(200).json({ status: "success", payload: product });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const product = req.body;
    const newProduct = await productDao.create(product);
    res.status(201).json({ status: "success", payload: newProduct });
  } catch (error) {
    console.log(error);
  }
});

router.put("/:pid", async (req, res) => {
  try {
    const { pid } = req.params;
    const productData = req.body;
    const updateProduct = await productDao.update(pid, productData);
    if (!updateProduct) return res.status(404).json({ status: "Error", msg: `The product with the id ${id} was not found.` });
    res.status(200).json({ status: "success", payload: updateProduct });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:pid", async (req, res) => {
  try {
    const { pid } = req.params;
    const product = await productDao.deleteOne(pid);
    if (!product) return res.status(404).json({ status: "Error", msg: `The product with the id ${id} was not found.` });
    res.status(200).json({ status: "success", payload: "Product deleted!" });
  } catch (error) {
    console.log(error);
  }
});

export default router;