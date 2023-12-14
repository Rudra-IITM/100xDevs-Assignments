const fs = require("fs")

let data = "Writing a file in JS"

fs.writeFile("output.txt", data, (err) => {
    console.log("Done Wriring");
})