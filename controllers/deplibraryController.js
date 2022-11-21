const bookData = require("../models/deplibraryModel");

const getbooks = async (req, res) => {
 
  try {
    const allbooks = await bookData.find();
    res.status(200).json(allbooks);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createbook = async (req, res) => {
  const book = req.body;
  const newbook = new bookData (book)
  try { 
    await newbook.save();
    res.status(201).json(newbook);
  }
  catch (err) {
    res.status(409).json({ message: err.message })
  }
};

const deletebook = async (req, res) => {
  const id = req.params.id;

  try { 
    await bookData.findByIdAndRemove(id).exec();
    res.send("Succesfully deleted");
  }
  catch (err) {
    console.log(err);
  }
};

module.exports = { getbooks, createbook, deletebook };
