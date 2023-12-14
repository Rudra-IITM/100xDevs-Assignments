const fs = require("fs");

fs.readFile("sample.txt", "utf-8", (err, data) => {
    let prevChar = data[0];
    let str = prevChar;
    for (let i=1; i<data.length; i++){
        let currChar = data[i];
        if (prevChar==" " && currChar==" "){
            prevChar = currChar;
            continue;
        }
        str+=currChar;
        prevChar = currChar;
    }
    fs.writeFile("output_sample.txt", str, (err) => {
        console.log("Done Redefining");
    })
})