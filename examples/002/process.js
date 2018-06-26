console.log(`This process is pid ${process.pid}`);
process.on('exit', (code) => {
    console.log(`The process has now finished, exiting with code: ${code}`);
});