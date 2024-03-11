import Menu from "../models/menu.model.js";

export const createMenuListing = async (req, res) => {
    try {
        const listing = await Menu.create(req.body)
        return res.status(200).json(listing);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteListing = async (req, res) => {
    const listing = await Menu.findById(req.params.id);

    if (!listing) {
        return res.status(404).json({ message: "Could not find the specified menu item." })
    }

    try {
        await Menu.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: `Deleted ${listing.name}` })
    } catch (error) {
        res.status(500).send('Server Error')
    }
}


export const updateListing = async (req, res) => {
    const listing = await Menu.findById(req.params.id)

    if (!listing) {
        return res.status(404).json({ message: "Could not find the specified menu item." })
    }

    try {
        const updatedListing = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedListing)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


export const getListing = async (req, res) => {
    try {
        const listing = await Menu.findById(req.params.id)

        if(!listing){
            return  res.status(404).json({message:"No listings found"})
        }
        res.status(200).json(listing)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}