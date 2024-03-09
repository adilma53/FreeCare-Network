import { prisma } from "../server.js";

// Function to create a user
export async function createUser(userData) {
  const user = await prisma.user.create({ data: userData });

  return user;
}
// get user by id
export async function getUserById(userId) {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  return user;
}
// get all users
export async function getAllUsers() {
  const users = await prisma.user.findMany();

  return users;
}
// update user by id
export async function updateUserById(userId, userData) {
  const user = await prisma.user.update({
    where: { id: userId },
    data: userData,
  });

  return user;
}
// delete user by id
export async function deleteUserById(userId) {
  const user = await prisma.user.delete({ where: { id: userId } });

  return user;
}
