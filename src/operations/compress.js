import { getAbsolutePath } from '../utils/fsHelpers.js';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import { promisify } from 'node:util'

const compress = async (command) => {
    const fileToCompressName = command.arguments[0];
    const compressedFileName = command.arguments[1];
    const absoluteFileToCompressPath = await getAbsolutePath(fileToCompressName);
    const absoluteCompressedFilePath = await getAbsolutePath(compressedFileName);

    try {
        await brotliCompress(absoluteFileToCompressPath, absoluteCompressedFilePath);
    } catch (err) {
        console.error(err)
        throw err;
    }
};

const brotliCompress = async (input, output) => {
    const brotli = createBrotliCompress();
    const promisifiedPipeline = promisify(pipeline);
    const source = createReadStream(input);
    const destination = createWriteStream(output);
    await promisifiedPipeline(source, brotli, destination);
};

export { compress };