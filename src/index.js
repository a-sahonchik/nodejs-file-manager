import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { sayHiToUser, sayByeToUser } from "./utils/greeter.js";
import { parseCommandFromInput } from './commands/parseCommands.js';
import { isCommandValid } from './commands/validateCommands.js';
import { runCommand } from './commands/handleCommands.js';
import { readlineInterfaceStorage } from './utils/readlineInterfaceStorage.js';
import { displayCurrentWorkingDir, displayInvalidInputError, displayOperationFailedError } from './utils/logger.js';

const rl = readline.createInterface({ input, output });
readlineInterfaceStorage.setReadlineInterface(rl);

const fileManager = async () => {
    await sayHiToUser();

    await displayCurrentWorkingDir();

    rl.prompt();

    rl.on('line', async (input) => {
        const trimmedInput = input.trim();
        const command = await parseCommandFromInput(trimmedInput);

        const isCommandCallHasAnyErrors = !(await isCommandValid(command));

        if (isCommandCallHasAnyErrors) {
            await displayInvalidInputError();
        } else {
            try {
                await runCommand(command);
            } catch {
                await displayOperationFailedError();
            }
        }

        await displayCurrentWorkingDir();

        rl.prompt();
    });

    rl.on('SIGINT', () => {
        rl.close();
    });

    rl.on('close', async () => {
        await sayByeToUser();

        process.exit(0);
    });
};

await fileManager();
