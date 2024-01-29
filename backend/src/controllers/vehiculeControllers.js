// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const vehicules = await tables.vehicule.readAll();

    // Respond with the items in JSON format
    res.json(vehicules);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const vehicule = await tables.vehicule.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (vehicule == null) {
      res.sendStatus(404);
    } else {
      res.json(vehicule);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const vehicule = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.vehicule.create(vehicule);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const checkVehicule = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const vehicule = await tables.vehicule.checkVehicule(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (vehicule == null) {
      res.sendStatus(404);
    } else {
      res.json(vehicule);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  checkVehicule,
  // edit,
  add,
  // destroy,
};
