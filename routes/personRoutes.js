const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.get("/:workType", async(req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == 'chef' || workType == 'owner' || workType == 'manager') {
      const response = await Person.find({ work: workType })
      console.log("Data loaded Successfully")
      res.status(200).json(response)
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Invalid Work Type!" })
  }
})
router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log("Data saved Successfully")
    res.status(200).json(response)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" })
  }
})

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data loaded Successfully")
    res.status(200).json(data)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" })
  }

});

router.put("/:id", async (req, res)=>{
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const response = await Person.findByIdAndUpdate(id, updatedData,{
      new: true,
      runValidators: true
    })
    if(!response){
      return res.status(404).json({error: "Person not found"})
    }

    console.log("Data loaded Successfully")
    res.status(200).json(response)

  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Internal server error" })
  }
} )

router.delete("/:id", async (req, res)=>{
  try {
    const id = req.params.id;
    const response = await Person.findByIdAndDelete(id)
    if(!response){
      return res.status(404).json({error: "Person not found"})
    }

    console.log("Data deleted Successfully")
    res.status(200).json("Person deleted Successfully")

  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Internal server error" })
  }
} )

module.exports = router;