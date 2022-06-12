// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  // baca file 1
  fs.readFile("./data1.json", { encoding: 'utf-8' }, (err, data1) => {
    if (err) {
      // error
      return fnCallback(err, null);
    } else {
      // baca file 2
      fs.readFile("./data2.json", { encoding: 'utf-8' }, (err, data2) => {
        if (err) {
          // error
          return fnCallback(err, null);
        } else {
          // baca file 3
          fs.readFile("./data3.json", { encoding: 'utf-8' }, (err, data3) => {
            if (err) {
              // error
              return fnCallback(err, null);
            } else {
              // olah data
              const fileData1 = JSON.parse(data1);
              const fileData2 = JSON.parse(data2);
              const fileData3 = JSON.parse(data3);

              const message1 = fileData1.message.split(" ")[1];
              const message2 = fileData2[0].message.split(" ")[1];
              const message3 = fileData3[0].data.message.split(" ")[1];

              fnCallback(null, [message1, message2, message3]);
            }
          });
        }
      });
    }
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
