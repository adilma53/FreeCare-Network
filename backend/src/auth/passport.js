import { prisma } from '../server.js';
import bcrypt from 'bcryptjs';
import passport from 'passport';
import LocalStrategy from 'passport-local';


export default function (passport) {
    passport.use(
        new LocalStrategy(async function (email, password, done) {
            const user = await prisma.user.findUnique({ where: { email: email } });
            if (!user) return done(null, false, { message: 'Incorrect email.' });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return done(null, false, { message: 'Incorrect password.' });

            return done(null, user);
        })
    );

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(async function (id, done) {
        const user = await prisma.user.findUnique({ where: { id: Number(id) } });
        done(null, user);
    });
};