const Vendor = require("../models/vendor");

const getAllVendor = async (req, res) => {
  try {
    const vendors = await Vendor.find({});

    res.status(200).json({ vendors: vendors });
  } catch (e) {
    res.status(400).json({
      error: e,
    });
  }
};

const addVendor = async (req, res) => {
  const vendorGST = req.body.vendorGST;
  const vendorName = req.body.vendorName;
  const vendorPhone = req.body.vendorPhone;
  const paymentBending = req.body.paymentBending;
  const vendorCompany = req.body.vendorCompany;

  try {
    const vendor = await Vendor.create({
      vendorGST,
      vendorName,
      vendorPhone,
      vendorCompany,
      paymentBending,
    });

    res.status(201).json({
      vendor: vendor,
    });
  } catch (error) {
    res.status(401).json({
      e: error,
    });
  }
};

const deleteVendorById = async (req, res) => {
  const _id = req.params.id;
  try {
    const vendor = await Vendor.findByIdAndDelete(_id);

    res.status(200).json({
      prod: vendor,
      message: "deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

const findVendorByComapny = async (req, res) => {
  const vendorCompany = req.params.vendorCompany;

  try {
    const vendor = await Vendor.find({ vendorCompany });

    if (categoryProducts.length <= 0) {
      throw Error;
    }
    res.status(200).json({ vendor: vendor });
  } catch (error) {
    res.status(400).json({ err: error });
  }
};
const getVendorById = async (req, res) => {
  const _id = req.params.id;
  try {
    const vendor = await Vendor.findById(_id);

    res.status(200).json({
      vendor: vendor,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
module.exports = {
  getAllVendor,
  addVendor,
  deleteVendorById,
  findVendorByComapny,
  getVendorById,
};
