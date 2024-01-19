const Paint = require("../models/Paint");

const getAllPaint = async (req, res) => {
  try {
    const paints = await Paint.find({});

    res.status(200).json({ paints: paints });
  } catch (e) {
    res.status(400).json({
      error: e,
    });
  }
};

const createPaint = async (req, res) => {
  const paintName = req.body.paintName;
  const paintType = req.body.paintType;
  const paintLitre = req.body.paintLitre;
  const paintColor = req.body.paintColor;
  const paintPrice = req.body.paintPrice;
  const paintQuantity = req.body.paintQuantity;

  try {
    const paint = await Paint.create({
      paintName,
      paintType,
      paintColor,
      paintPrice,
      paintLitre,
      paintQuantity,
    });

    return res.status(201).json({
      paint: paint,
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

const updatePaint = async (req, res) => {
  const _id = req.params.id;
  const paintName = req.body.paintName;
  const paintType = req.body.paintType;
  const paintLitre = req.body.paintLitre;
  const paintColor = req.body.paintColor;
  const paintPrice = req.body.paintPrice;
  const paintQuantity = req.body.paintQuantity;

  try {
    const paint = await Paint.findOneAndUpdate(
      { _id },
      {
        paintName,
        paintType,
        paintColor,
        paintPrice,
        paintLitre,
        paintQuantity,
      }
    );

    return res.status(201).json({
      paint: paint,
      message: "Updated Successfully",
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

const getPaintById = async (req, res) => {
  const _id = req.params.id;
  try {
    const paint = await Paint.findById(_id);

    res.status(200).json({
      prod: paint,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

const getPaintByCategory = async (req, res) => {
  const paintName = req.params.productCategory;

  try {
    const paintProducts = await Product.find({ paintName });

    if (categoryProducts.length <= 0) {
      throw Error;
    }
    res.status(200).json({ product: paintProducts });
  } catch (error) {
    res.status(400).json({ err: error });
  }
};

const deletePaintById = async (req, res) => {
  const _id = req.params.id;
  try {
    const paint = await Paint.findByIdAndDelete(_id);

    res.status(201).json({
      prod: paint,
      message: "deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

module.exports = {
  createPaint,
  getAllPaint,
  getPaintByCategory,
  deletePaintById,
  getPaintById,
  updatePaint,
};
