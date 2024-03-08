import * as userService from "../services/user.service.js";

// create one
export async function createUser(req, res) {
  try {
    const user = userService.createUser(req.body);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).send();
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
}

// get one by id

// get all
// update one by id
// delete one by id
