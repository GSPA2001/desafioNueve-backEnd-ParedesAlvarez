import dotenv from 'dotenv';
import { Command } from 'commander';

const commandLineOptions = new Command();
commandLineOptions
    .option('--mode <mode>')
    .option('--port <port>')
commandLineOptions.parse()

// Proximamente defino los dos .env, mientras tanto trabajo con uno solo.
switch (commandLineOptions.opts().mode) {
    case 'prod':
        dotenv.config({ path: './.env'});
        break;
    
    case 'devel':
    default:
        dotenv.config({ path: './.env'});
}

const config = {
    //MONGOOSE_URL: process.env.MONGOOSE_URI,
    githubAuth: {
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CLIENT_CALLBACK,
    }
};

export default config;