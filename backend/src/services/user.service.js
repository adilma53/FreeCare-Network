import { prisma } from "../server.js";

// Function to create a user
export async function createUser(userData) {
  const user = await prisma.user.create({ data: userData });

  console.log("this is user ->", user);

  return user;
}
// get user by id
export async function getUserById(id) {
  const user = await prisma.user.findUnique({ where: id });

  return user;
}
// get all users
export async function getAllUsers() {
  const users = await prisma.user.findMany();

  return users;
}
// update user by id
export async function updateUserById(id, userData) {
  const user = await prisma.user.update({ where: id, data: userData });

  return user;
}
// delete user by id
export async function deleteUserById(id) {
  const user = await prisma.user.delete({ where: id });

  return user;
}
