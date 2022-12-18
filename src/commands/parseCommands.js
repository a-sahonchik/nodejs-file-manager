const parseCommandFromInput = async (command) => {
    const regex = new RegExp(
        '(([^"\\s]*"[^"]+"[^"\\s]*)+|([^\'\\s]*\'[^\']+\'[^\'\\s]*)+|[^\\s"]+)',
        'gmi'
    );

    const quotesRegex = /(["'])/gmi;

    const matches = command.match(regex).map(match => match.replaceAll(quotesRegex, ''));

    const parsedCommand = {
        name: matches[0].toString(),
        arguments: matches.slice(1),
    };

    return parsedCommand;
};

export { parseCommandFromInput };
