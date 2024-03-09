import * as userService from "../services/user.service.js";

// create one ✅
export async function createUser(req, res) {
  try {
    const user = await userService.createUser(req.body);
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
export async function getUser(req, res) {
  try {
    const user = await userService.getUserById(parseInt(req.params.id));
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).send();
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
}

// get all
export async function getUsers(req, res) {
  try {
    const user = await userService.getAllUsers();
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).send();
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
}

// update one by id
export async function updateUser(req, res) {
  try {
    const user = await userService.updateUserById(
      parseInt(req.params.id),
      req.body,
    );
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).send();
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
}

// delete one by id
export async function deleteUser(req, res) {
  try {
    const user = await userService.deleteUserById(parseInt(req.params.id));
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).send();
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
}
