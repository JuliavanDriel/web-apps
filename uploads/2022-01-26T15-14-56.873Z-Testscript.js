const { spawn } = require('child_process');
const newSpawnProces = spawn('coomand', ['file.js']);

newSpawnProces.stdout.on('data', (data) => {
  console.log(data);
});

newSpawnProces.stderr.on('data', (data) => {
  console.error(data);
});

newSpawnProces.on('exit', (code) => {
  console.log(`Exited with code ${code}`);
});


