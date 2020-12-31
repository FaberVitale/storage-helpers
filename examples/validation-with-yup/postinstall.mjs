import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { resolve, dirname } from 'path';
import { execSync } from 'child_process';

const exampleDir = dirname(process.argv[1]);
const repoRoot = resolve(exampleDir, '../..');

const sourcePath = resolve(repoRoot, './dist/storage_helpers.esm.js');
const destPath = resolve(exampleDir, './src/generated.storage_helpers.esm.js');

execSync('npm i', { cwd: repoRoot, stdio: 'inherit', shell: true });

pipeline(
  createReadStream(sourcePath, { encoding: 'utf-8' }),
  createWriteStream(destPath, { encoding: 'utf-8' }),
  err => {
    if (err) {
      throw err;
    }
  }
);
