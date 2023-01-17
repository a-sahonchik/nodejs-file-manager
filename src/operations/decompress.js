import { getAbsolutePath } from '../utils/fsHelpers.js';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';
import { promisify } from 'node:util';
import { assertFileExists } from '../utils/asserts.js';

const decompress = async (command) => {
    const fileToDecompressName = command.arguments[0];
    const decompressedFileName = command.arguments[1];
    const absoluteFileToDecompressPath = await getAbsolutePath(fileToDecompressName);
    const absoluteDecompressedFilePath = await getAbsolutePath(decompressedFileName);

    await assertFileExists(absoluteFileToDecompressPath);

    await brotliDecompress(absoluteFileToDecompressPath, absoluteDecompressedFilePath);
};

const brotliDecompress = async (input, output) => {
    const brotli = createBrotliDecompress();
    const promisifiedPipeline = promisify(pipeline);
    const source = createReadStream(input);
    const destination = createWriteStream(output);

    await promisifiedPipeline(source, brotli, destination);
};

export { decompress };