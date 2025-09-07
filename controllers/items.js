import Item from "../models/Item.js";

export const createItem = async (req, res) => {
    try {
      const newItem = new Item(req.body);
      await newItem.save();
      res.json({"success":true,"message":"Item Added Successfully", item:newItem});
    } catch (error) {
      res.json({"success":false, "message": error.message , errors:[]});
    }
  };

  export const getAllItems = async (req, res) => {
    try {
      const items = await Item.find();
      res.json({"success":true,"message":"Items Data Found", items:items});
    } catch (error) {
      res.json({"success":false, "message": error.message });
    }
  };

  export const getItemById = async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
      if (!item) {
        return res.json({ "success":false,"message" : 'No Item found' });
      }
      res.json({"success":true,"message":"Items Data Found", items:item});
    } catch (error) {
      res.json({"success":false, "message": error.message,errors:[] });
    }
  };
  
  export const updateItem = async (req, res) => {
    try {

      const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!item) {
        return res.status(404).json({ message: 'No Item found' });
      }
      res.json({"success":true,"message":"Item's Data Updated", items:item});
    } catch (error) {
      res.json({"success":false, "message": error.message, errors:[]});
    }
  };
  
  export const deleteItem = async (req, res) => {
    try {
      const item = await Item.findByIdAndDelete(req.params.id);
      if (!item) {json({ message: 'No Item found' });
      }
      res.json({ message: 'Item deleted successfully' });
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  
