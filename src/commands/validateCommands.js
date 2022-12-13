import { commandsArgumentsCount, commandsParameters } from './commands.js';

const isCommandValid = async (command) => {
    const commandExists = await isCommandExists(command);

    if (!commandExists) {
        return false;
    }

    const commandArgumentsCountMatchAllowedValue = await isCommandArgumentsCountMatchAllowedValue(command);

    if (!commandArgumentsCountMatchAllowedValue) {
        return false;
    }

    const isCommandHasSpecificParameters = command.name in commandsParameters;

    if (!isCommandHasSpecificParameters) {
        return true;
    }

    const commandParameterExists = await isCommandParameterExists(command);

    return commandParameterExists;
}

const isCommandExists = async (command) => {
    return command.name in commandsArgumentsCount;
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
