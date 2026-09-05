import pkg from './tools.mjs'
const {createToolOnGitbook} = pkg;

// Create a new tool directory from the command line
const toolName = process.argv[2];
const email = process.argv[3];

if (!toolName) {
  console.warn('Usage: node add-space.mjs "Tool Name" [email]');
  process.exit(1);
}
createToolOnGitbook(toolName, email).then(function(space) {
  console.log(`${space.id} ${space.teamId}`);
  console.warn(space.urls.app);
});
