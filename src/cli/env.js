const parseEnv = () => {
    let result = '';
    for (const key in process.env) {
        if(key.startsWith('RSS_')) {
            result += `${key}=${process.env[key]}; `
        }        
    }
    console.log(result.slice(0, -2));
};

parseEnv();