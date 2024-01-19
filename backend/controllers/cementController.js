const Cement = require("../models/cement");

const getAllCement = async (req, res) => {
  try {
    const cements = await Cement.find({});

    res.status(200).json({ cement: cements });
  } catch (e) {
    res.status(400).json({
      error: e,
    });
  }
};

const createCement = async (req, res) => {
  const cementName = req.body.cementName;

  const cementWeight = req.body.cementWeight;

  const cementPrice = req.body.cementPrice;
  const cementQuantity = req.body.cementQuantity;

  try {
    const cement = await Cement.create({
      cementName,
      cementWeight,
      cementPrice,
      cementQuantity,
    });

    return res.status(201).json({
      cement: cement,
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

const updateCement = async (req, res) => {
  const _id = req.params.id;
  const cementName = req.body.cementName;
  const cementWeight = req.body.cementWeight;

  const cementPrice = req.body.cementPrice;
  const cementQuantity = req.body.cementQuantity;

  try {
    const cement = await Cement.findOneAndUpdate(
      { _id },
      {
        cementName,
        cementWeight,
        cementPrice,
        cementQuantity,
      }
    );

    return res.status(201).json({
      cement: cement,
      message: "Updated Successfully",
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

const getCementById = async (req, res) => {
  const _id = req.params.id;
  try {
    const cement = await Cement.findById(_id);

    res.status(200).json({
      prod: cement,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

const getCementByCategory = async (req, res) => {
  const cementName = req.params.productCategory;

  try {
    const cementProducts = await Product.find({ cementName });

    if (categoryProducts.length <= 0) {
      throw Error;
    }
    res.status(200).json({ product: cementProducts });
  } catch (error) {
    res.status(400).json({ err: error });
  }
};

const deleteCementById = async (req, res) => {
  const _id = req.params.id;
  try {
    const cement = await Cement.findByIdAndDelete(_id);

    res.status(200).json({
      prod: cement,
      message: "deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

module.exports = {
  createCement,
  getAllCement,
  getCementByCategory,
  deleteCementById,
  getCementById,
  updateCement,
};
