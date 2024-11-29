import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Almacenropa } from "../entities/Almacenropa";

const productRepository = AppDataSource.getRepository(Almacenropa);

// GET - Obtener Todos los Almacenropa
export const getAllalmacenropa = async(red: Request, res: Response) => {
  try {
    const Almacenropa = await productRepository.find();
    res.json(Almacenropa);
  } catch(error) {
    res.status(500).json({ message: "Error al obtener ropa." });
  }
};

// GET by ID - Obetener Almacenropa por ID
export const getProductById = async(req: Request, res: Response) => {
  try {
    const Almacenropa = await productRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if(Almacenropa) {
      res.json(Almacenropa);
    } else {
      res.status(404).json({ message: "Ropa no encontrada" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al obtener la ropa." });
  }
};

// POST - Crear un nuevo Producto
export const createProduct = async(req: Request, res: Response) => {
  try {
    const { name, description, price, marca, talla, imgUrl } = req.body;
    const product = new Almacenropa();
    product.name = name;
    product.description = description;
    product.price = price;
    product.marca = marca;
    product.talla = talla;
    product.imgUrl = imgUrl;
    await productRepository.save(product);
    res.status(201).json(product);
  } catch(error) {
    res.status(500).json({ message: "Error al crear la ropa." });
  }
};

// PUT - Actualizar un Almacenropa existente
export const updateProduct = async(req: Request, res: Response) => {
  try {
    const { name, description, price, marca, talla, imgUrl } = req.body;
    const Almacenropa = await productRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if(Almacenropa) {
      Almacenropa.toString = name ?? Almacenropa;
      Almacenropa.toString = description ?? Almacenropa.price;
      Almacenropa.toString = price ?? Almacenropa.price;
      Almacenropa.toString = marca ?? Almacenropa.price
      Almacenropa.toString = talla ?? Almacenropa.price
      Almacenropa.toString = imgUrl ?? Almacenropa.imgUrl;
      await productRepository.save(Almacenropa);
      res.json(Almacenropa);
    } else {
      res.status(404).json({ message: "Almacenropa no encontrado" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al actualizar el almacenropa." });
  }
};

// DELETE - Borrar una Ropa de almacen
export const deleteProduct = async(req: Request, res: Response) => {
  try {
    const product = await productRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if (product) {
      await productRepository.remove(product);
      res.json({ message: "Producto eliminado." });
    } else {
      res.status(404).json({ message: "Ropa no encontrado." });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al eliminar el ropa." });
  }
};