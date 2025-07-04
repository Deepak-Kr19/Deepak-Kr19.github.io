import fs from 'fs';

/*
fs.writeFile("myfile.txt", "Hello World",(err) => {
    if (err) {
        console.error("Error writing to file:", err);
    } else {
        console.log("File written successfully");
    }
});
*/

/*
fs.appendFile("myfile.txt", "Hello World\n",(err) => {
    if (err) {
        console.error("Error appending to file:", err);
    } else {
        console.log("File appended successfully");
    }
});
*/

/*
fs.readFile("about.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("File content:", data);
    }
});
*/

/*
fs.rename("myfile.txt", "newfile.txt", (err) => {
    if (err) {
        console.error("Error renaming file:", err);
    } else {
        console.log("File renamed successfully");
    }
});
*/

fs.unlink("newfile.txt", (err) => {
    if (err) {
        console.error("Error deleting file:", err);
    } else {
        console.log("File deleted successfully");
    }
});