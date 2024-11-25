function fetchData(url) {
    return new Promise(function(resolve, reject) {
        console.log("the downloading is starting from ", url);
        setTimeout(() => {
            let data = "dummy data";
            console.log("download completed");
            if (data != "dummy data") {
                reject(data);
            } else {
                resolve(data);
            }
        }, 4000);
    });
}

function saveData(data) {
    return new Promise(function(resolve, reject) {
        console.log("the downloaded data is", data);
        setTimeout(() => {
            let filename = "output.txt";
            console.log("the data is saved in the file");
            resolve(filename);
        }, 1000);
    });
}

function uploadData(filename, newurl) {
    return new Promise(function(resolve, reject) {
        console.log("the file is going to upload on", newurl);
        setTimeout(() => {
            let uploadfile = "successfully uploaded";
            console.log("the file is uploaded successfully");
            resolve(uploadfile);
        }, 2000);
    });
}

async function fun() {
    try {
        let data = await fetchData("www.google.com");
        let filename = await saveData(data);
        let result = await uploadData(filename, "www.virat.com");
        return result;
    } catch (err) {
        console.log("the error is", err);
    }
}

console.log("start");
fun().then(result => {
    console.log("result:", result);
});
console.log("end");
