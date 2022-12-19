const REGEXP_FLAG_GMI = 'gmi';

const parseCommandFromInput = async (command) => {
    const parseCommandArgumentsRegExp = new RegExp(
        '(([^"\\s]*"[^"]+"[^"\\s]*)+|([^\'\\s]*\'[^\']+\'[^\'\\s]*)+|[^\\s"]+)',
        REGEXP_FLAG_GMI
    );

    const findQuotesRegExp = new RegExp(
        '(["\'])',
        REGEXP_FLAG_GMI
    );

    const matches = command
        .match(parseCommandArgumentsRegExp)
        .map(match => match.replaceAll(findQuotesRegExp, ''));

    const parsedCommand = {
        name: matches[0].toString(),
        arguments: matches.slice(1),
    };

    return parsedCommand;
};

export { parseCommandFromInput };
