const USERNAME_ARGUMENT_NAME = "username"

async function sayHiToUser() {
    const argsList = process.argv.slice(2);

    const usernameArgumentName = `--${USERNAME_ARGUMENT_NAME}=`;
    let username = "Anonymous";

    argsList.map((argName, id) => {
        if (argName.startsWith(usernameArgumentName)) {
            username = argName.slice(usernameArgumentName.length);
        }
    });

    console.log(`Welcome to the File Manager, ${username}!`);
}

export { sayHiToUser };
