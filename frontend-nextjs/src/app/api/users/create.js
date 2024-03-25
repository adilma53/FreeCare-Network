// // pages/api/users/create.js

// import { PrismaClient } from '@prisma/client';
// import bcrypt from 'bcrypt';

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { email, username, password } = req.body;

//   // Check if email or username already exists
//   const existingUser = await prisma.user.findFirst({
//     where: {
//       OR: [{ email }, { username }],
//     },
//   });

//   if (existingUser) {
//     if (existingUser.email === email) {
//       return res.status(400).json({ message: 'Email already exists' });
//     } else if (existingUser.username === username) {
//       return res.status(400).json({ message: 'Username already exists' });
//     }
//   }

//   try {
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = await prisma.user.create({
//       data: {
//         email,
//         username,
//         password: hashedPassword, // Store the hashed password in the database
//       },
//     });
//     res.status(201).json(newUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }
