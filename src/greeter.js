const WELCOME_MESSAGE = 'Welcome to the File Manager';

const sayHiToUser = async () => {
    const username = await getUsernameFromInputArguments();

    const welcomeMessage = `${WELCOME_MESSAGE}, ${username}!`;

    console.log(welcomeMessage);
}

const FAREWELL_MESSAGE_BEGINNING = 'Thank you for using File Manager';
const FAREWELL_MESSAGE_END = 'goodbye!';

const sayByeToUser = async () => {
    const username = await getUsernameFromInputArguments();

    const farewellMessage = `${FAREWELL_MESSAGE_BEGINNING}, ${username}, ${FAREWELL_MESSAGE_END}`

    console.log(farewellMessage);
}

const USERNAME_ARGUMENT_NAME = 'username';
const DEFAULT_USERNAME = 'Anonymous';

const getUsernameFromInputArguments = async () => {
    const argsList = process.argv.slice(2);

    const usernameArgumentName = `--${USERNAME_ARGUMENT_NAME}=`;

    let username = DEFAULT_USERNAME;

    argsList.map((argName, id) => {
        if (argName.startsWith(usernameArgumentName)) {
            username = argName.slice(usernameArgumentName.length);
        }
    });

    return username;
}

export { sayHiToUser, sayByeToUser };
