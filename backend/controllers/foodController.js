import { log } from "console";
import foodModal from "../models/foodModel.js";
import fs from "fs";

//add food item

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModal({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//get all food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModal.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//remove food items
const removeFood = async (req, res) => {
  try {
    const food = await foodModal.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModal.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food deleted successfully"});
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addFood, listFood, removeFood };
