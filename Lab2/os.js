const os = require("os");

console.log(os.platform());  //win32
console.log(os.arch());      //x64
console.log(os.cpus());     //CPU details
console.log(os.totalmem()); //total memory -- return size byte
console.log(os.freemem());  //free memory
console.log(os.hostname()); //Computer name
console.log(os.homedir());  //home directory
console.log(os.uptime());  //System uptime