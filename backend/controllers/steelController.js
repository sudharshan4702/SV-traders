const Steel = require("../models/Steel");

const getAllSteel = async (req, res) => {
  try {
    const steels = await Steel.find({});

    res.status(200).json({ steels: steels });
  } catch (e) {
    res.status(400).json({
      error: e,
    });
  }
};

const createSteel = async (req, res) => {
  const steelName = req.body.steelName;

  const steelSize = req.body.steelSize;

  const steelPrice = req.body.steelPrice;
  const steelQuantity = req.body.steelQuantity;

  try {
    const steel = await Steel.create({
      steelName,
      steelSize,
      steelPrice,
      steelQuantity,
    });

    return res.status(201).json({
      steel: steel,
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

const updateSteel = async (req, res) => {
  const _id = req.params.id;
  const steelName = req.body.steelName;
  const steelSize = req.body.steelSize;

  const steelPrice = req.body.steelPrice;
  const steelQuantity = req.body.steelQuantity;

  try {
    const steel = await Steel.findOneAndUpdate(
      { _id },
      {
        steelName,
        steelSize,
        steelPrice,
        steelQuantity,
      }
    );

    return res.status(201).json({
      steel: steel,
      message: "Updated Successfully",
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

const getSteelById = async (req, res) => {
  const _id = req.params.id;
  try {
    const steel = await Steel.findById(_id);

    res.status(200).json({
      prod: steel,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

const getSteelByCategory = async (req, res) => {
  const steelName = req.params.productCategory;

  try {
    const SteelProducts = await Product.find({ steelName });

    if (categoryProducts.length <= 0) {
      throw Error;
    }
    res.status(200).json({ product: SteelProducts });
  } catch (error) {
    res.status(400).json({ err: error });
  }
};

const deleteSteelById = async (req, res) => {
  const _id = req.params.id;
  try {
    const steel = await Steel.findByIdAndDelete(_id);

    res.status(201).json({
      prod: steel,
      message: "deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

module.exports = {
  createSteel,
  getAllSteel,
  getSteelByCategory,
  deleteSteelById,
  getSteelById,
  updateSteel,
};
