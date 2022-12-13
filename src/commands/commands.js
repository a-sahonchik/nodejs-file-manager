const commands = [
    'up',
    'cd',
    'ls',
    'cat',
    'add',
    'rn',
    'cp',
    'mv',
    'rm',
    'os',
    'hash',
    'compress',
    'decompress',
]

const commandsArgumentsCount = {
    'up': 0,
    'cd': 1,
    'ls': 0,
    'cat': 1,
    'add': 1,
    'rn': 2,
    'cp': 2,
    'mv': 2,
    'rm': 1,
    'os': 1,
    'hash': 1,
    'compress': 2,
    'decompress': 2,
}

const commandsParameters = {
    'os': [
        '--EOL',
        '--cpus',
        '--homedir',
        '--username',
        '--architecture',
    ],
}

export { commands, commandsArgumentsCount, commandsParameters };