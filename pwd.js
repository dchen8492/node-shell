const pwd = (cmd) => {
    if (cmd === 'pwd'){
        console.log(process.cwd())
    }
}

module.exports = pwd

