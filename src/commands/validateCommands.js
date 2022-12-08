import { commands, commandsArgumentsCount, commandsParameters } from './commands.js';
import { parseCommand } from './parseCommands.js';

const isCommandValid = async (command) => {
    const parsedCommand = await parseCommand(command);

    const commandExists = await isCommandExists(parsedCommand);

    if (!commandExists) {
        return false;
    }

    const commandArgumentsCountMatchAllowedValue = await isCommandArgumentsCountMatchAllowedValue(parsedCommand);

    if (!commandArgumentsCountMatchAllowedValue) {
        return false;
    }

    const isCommandHasSpecificParameters = parsedCommand.name in commandsParameters;

    if (!isCommandHasSpecificParameters) {
        return true;
    }

    const commandParameterExists = await isCommandParameterExists(parsedCommand);

    return commandParameterExists;
}

const isCommandExists = async (command) => {
    return commands.includes(command.name);
}

const isCommandArgumentsCountMatchAllowedValue = async (command) => {
    const executedCommandArgumentsCount = command.arguments.length;
    const requiredCommandArgumentsCount = commandsArgumentsCount[command.name];

    return executedCommandArgumentsCount === requiredCommandArgumentsCount;
}

const isCommandParameterExists = async (command) => {
    const existingCommandParameters = commandsParameters[command.name];

    return existingCommandParameters.includes(command.arguments.toString());
}

export { isCommandValid };
