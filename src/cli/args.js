const parseArgs = () => {
    let result = '';   
    process.argv.slice(2).forEach((arg, index) => {
        result += arg;
        if(index % 2 && index !== process.argv.lenght - 3) {
            result += ", "
        } else {
            result += " is "
        }
    });
    console.log(result.slice(0, -2));
};

parseArgs();