const semver = require('semver');
const required = '20.9.0';
const actual = process.version.replace(/^v/, '');

if (!semver.gte(actual, required)) {
  console.error(`\nERROR: Node ${required} or higher is required. Current: ${process.version}\n`);
  console.error('Use `nvm install 20 && nvm use 20` or upgrade Node in your environment.');
  process.exit(1);
}

console.log(`Node version ok: ${process.version}`);
