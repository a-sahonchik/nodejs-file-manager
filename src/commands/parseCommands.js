const parseCommand = async (command) => {
    const splittedCommand = command.split(' ');

    const parsedCommand = {
        name: splittedCommand[0].toString(),
        arguments: splittedCommand.slice(1),
    }

    return parsedCommand;
}

export { parseCommand };
