import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import { PrismaClient } from "@prisma/client";
import passport from "passport";
import passportConfig from "./auth/passport.js";
import session from "express-session";

import swaggerUi from "swagger-ui-express";
import specs from "./config/swagger.js";

import * as dummy from "./utils/DummyData.util.js";
import * as service from "./services/user.service.js";

// ---------------------------------
// routes import
import helloRoutes from "./routes/hello.routes.js";
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";
import imageUploadRoutes from "./routes/imageUpload.route.js";

// ---------------------------------

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

passportConfig(passport);
app.use(
  session({
    secret: "efwefwfew4324242wef", // replace with your own secret key
    resave: false,
    saveUninitialized: false,
  }),
);
// Initialize Passport.js in your application
app.use(passport.initialize());
app.use(passport.session());
// Configure Passport.js with the local strategy

// Logging middleware
app.use(morgan("dev"));
// Security middleware
app.use(helmet());
// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
app.use(cookieParser());

// ---------------------------------
// routes usage
app.use("/hello", helloRoutes);
app.use("/user", userRoutes);
app.use("/post", postRoutes);
app.use("/image", imageUploadRoutes);

// ---------------------------------

// const userData = { email: "adil5@gmail.com", password: "password5" };
// service.createUser(userData);

const allUsers = await prisma.user.findMany();
const allPosts = await prisma.post.findMany();

console.dir(allUsers, { depth: null });
console.dir(allPosts, { depth: null });
//-----------------------

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export { prisma , app};
