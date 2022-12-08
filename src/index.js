import { sayHiToUser, sayByeToUser } from "./greeter.js";
import os from 'os';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const WORKING_DIRECTORY_MESSAGE = 'You are currently in';
const EXIT_MESSAGE_INPUT = '.exit';

await sayHiToUser();

const currentDirectory = os.homedir();

const aaa = async () => {
    console.log(`${WORKING_DIRECTORY_MESSAGE} ${currentDirectory}`);

    const rl = readline.createInterface({ input, output });

    rl.on('line', (input) => {
        if (input === EXIT_MESSAGE_INPUT) {
            rl.close();
        } else {
            console.log(`${WORKING_DIRECTORY_MESSAGE} ${currentDirectory}`);
        }
    });

    rl.on('SIGINT', () => {
        rl.close();
    });

    rl.on('close', async () => {
        await sayByeToUser();
    });
};

await aaa();
