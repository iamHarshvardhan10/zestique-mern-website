import Menu from "../models/menu.model.js";

export const createMenuListing = async (req, res) => {
    try {
        const listing = await Menu.create(req.body)
        return res.status(200).json(listing);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}