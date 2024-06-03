const express = require('express');
const router = express.Router();
const menuItem = require('../models/menuItem');

// API Endpoints for the Menu
router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new menuItem(data);

    const response = await newPerson.save();
    console.log("Data saved Successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await menuItem.find();
    console.log("Data loaded Successfully");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Internal server error" });
  }
});
router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (tasteType == 'Sweet' || tasteType == 'Spicy' || tasteType == 'Sour') {
      const response = await menuItem.find({ taste: tasteType });
      console.log("Data loaded Successfully");
      res.status(200).json(response)
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Internal server error" })
  }
})
module.exports = router;