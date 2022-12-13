import osModule from 'node:os';
import {
    CLI_COMMAND_OS_ARGUMENT_EOL,
    CLI_COMMAND_OS_ARGUMENT_CPUS,
    CLI_COMMAND_OS_ARGUMENT_HOMEDIR,
    CLI_COMMAND_OS_ARGUMENT_USERNAME,
    CLI_COMMAND_OS_ARGUMENT_ARCHITECTURE
} from '../commands/commands.js'

const CLI_ARGUMENT_EOL_OUTPUT_MESSAGE = 'Default system End-Of-Line marker:';
const CLI_ARGUMENT_CPUS_AMOUNT_MESSAGE = 'CPUs amount:';
const CLI_ARGUMENT_CPUS_CPU_MODEL_MESSAGE = 'CPU model';
const CLI_ARGUMENT_CPUS_CPU_SPEED_MESSAGE = 'CPU speed, GHz';
const CLI_ARGUMENT_HOMEDIR_OUTPUT_MESSAGE = 'Home directory:';
const CLI_ARGUMENT_USERNAME_OUTPUT_MESSAGE = 'System user name:';
const CLI_ARGUMENT_ARCHITECTURE_OUTPUT_MESSAGE = 'CPU architecture:';
const MHZ_TO_GHZ_DIVIDER = 1000;

const os = async (command) => {
    switch (command.arguments[0]) {
        case CLI_COMMAND_OS_ARGUMENT_EOL:
            await displayEndOfLineMarker();

            break;
        case CLI_COMMAND_OS_ARGUMENT_CPUS:
            await displayCpusInfo();

            break;
        case CLI_COMMAND_OS_ARGUMENT_HOMEDIR:
            await displayHomeDirectory();

            break;
        case CLI_COMMAND_OS_ARGUMENT_USERNAME:
            await displaySystemUserName();

            break;
        case CLI_COMMAND_OS_ARGUMENT_ARCHITECTURE:
            await displayCpuArchitectureInfo();

            break;
    }
}

const displayEndOfLineMarker = async () => {
    console.log(CLI_ARGUMENT_EOL_OUTPUT_MESSAGE, JSON.stringify(osModule.EOL));
}

const displayCpusInfo = async () => {
    const cpus = osModule.cpus();

    console.log(CLI_ARGUMENT_CPUS_AMOUNT_MESSAGE, cpus.length);

    const cpusInfo = {};

    cpus.forEach((cpuInfo, i) => {
        const cpuModel = cpuInfo.model;
        const cpuSpeedInGhz = cpuInfo.speed / MHZ_TO_GHZ_DIVIDER;

        const cpu = {
            [CLI_ARGUMENT_CPUS_CPU_MODEL_MESSAGE]: cpuModel,
            [CLI_ARGUMENT_CPUS_CPU_SPEED_MESSAGE]: cpuSpeedInGhz,
        };

        cpusInfo[i + 1] = cpu;
    })

    console.table(cpusInfo);
}

const displayHomeDirectory = async () => {
    console.log(CLI_ARGUMENT_HOMEDIR_OUTPUT_MESSAGE, osModule.homedir());
}

const displaySystemUserName = async () => {
    console.log(CLI_ARGUMENT_USERNAME_OUTPUT_MESSAGE, osModule.userInfo().username);
}

const displayCpuArchitectureInfo = async () => {
    console.log(CLI_ARGUMENT_ARCHITECTURE_OUTPUT_MESSAGE, osModule.arch());
}

export { os };