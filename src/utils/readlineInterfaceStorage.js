class ReadlineInterfaceStorage {
    setReadlineInterface(rl) {
        this.rl = rl;
    };

    getReadlineInterface() {
        return this.rl;
    };
}

const readlineInterfaceStorage = new ReadlineInterfaceStorage();

export { readlineInterfaceStorage };
