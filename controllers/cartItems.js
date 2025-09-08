import CartItem from "../models/CartItem.js";

export const addToCart = async (req, res) => {
  try {
    const { itemId } = req.body;
    const userId = req.user.id; // From JWT middleware

    let cartItem = await CartItem.findOne({ user: userId, item: itemId });

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cartItem = new CartItem({ user: userId, item: itemId, quantity: 1 });
    }

    await cartItem.save();
    res.json({ success: true, message: "Item added to cart", cartItem });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { itemId } = req.body;
    const userId = req.user.id;

    await CartItem.findOneAndDelete({ user: userId, item: itemId });

    res.json({ success: true, message: "Item removed from cart" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const cartItems = await CartItem.find({ user: userId }).populate("item");

    res.json({ success: true, cartItems });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};