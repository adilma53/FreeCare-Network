


//-----------------------
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
const port = 3000

// Logging middleware
app.use(morgan('dev'));

// Security middleware
app.use(helmet());

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use(cors());

// Compression middleware
app.use(compression());

// Cookie and session middleware
app.use(cookieParser());

//-----------------------
await prisma.user.create({
    data: {
        name: 'Alice',
        email: 'alice_may@prisma.io',
        posts: {
            create: { title: 'Hello World' },
        },
        profile: {
            create: { bio: 'I like turtles' },
        },
    },
})

const allUsers = await prisma.user.findMany({
    include: {
        posts: true,
        profile: true,
    },
})
console.dir(allUsers, { depth: null })
//-----------------------


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})