const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
    console.log('delete files...');
    fs.readdirSync(logsDir).forEach(file => {
        const filePath = path.join(logsDir, file);
        console.log(`delete files...${file}`);
        fs.unlinkSync(filePath);
    });
    fs.rmdirSync(logsDir);
} else {
    console.log(`${logsDir} directory does not exist.`);
}