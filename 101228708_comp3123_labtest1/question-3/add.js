const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

process.chdir(logsDir);

for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    console.log(fileName);
    fs.writeFileSync(fileName, `This is log file ${i}.`);
}