import { sayHiToUser, sayByeToUser } from "./greeter.js";
import os from 'os';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { isCommandValid } from './commands/validateCommands.js';

const WORKING_DIRECTORY_MESSAGE = 'You are currently in';
const EXIT_MESSAGE_INPUT = '.exit';
const INVALID_INPUT_MESSAGE = 'Invalid input';

await sayHiToUser();

const currentDirectory = os.homedir();

console.log(`${WORKING_DIRECTORY_MESSAGE} ${currentDirectory}`);

const rl = readline.createInterface({ input, output });

rl.on('line', async (input) => {
    const isCommandCallHasAnyErrors = !(await isCommandValid(input));

    if (isCommandCallHasAnyErrors) {
        console.log(INVALID_INPUT_MESSAGE);
    }

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
