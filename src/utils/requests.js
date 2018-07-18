export const uploadFileRequest = (url, file, documentRecord, progressBarUpdate) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const scContext = {"ClientId":"CLIENT","Language":"EN","RumDevice":"version: 1.0.88; build: 88","InstanceCode":"CB_HK","Version":"1.0","Channel":"MOBILE","Country":"HK","AppName":"RCWB","reqId": "234234234"};
    let formData = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('SC-CLIENT-CONTEXT', JSON.stringify(scContext));
    // xhr.setRequestHeader('Authorization', "Token fake_rcwb&2345678&HK&CB_HK");

    // For updating the state of the progressbar
    xhr.upload.addEventListener("progress", progressBarUpdate);

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            resolve({ fileName: file.name, documentRecord: JSON.parse(xhr.response) });
        } else {
            reject(xhr.statusText);
        }
    };

    xhr.onerror = () => {
      reject({ message: "XHR Error" });
    }

    formData.append('document', JSON.stringify(documentRecord));
    formData.append('asset', file);
    xhr.send(formData);
  })
}

export const deleteFileRequest = (url, documentRecord) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const scContext = {"ClientId":"CLIENT","Language":"EN","RumDevice":"version: 1.0.88; build: 88","InstanceCode":"CB_HK","Version":"1.0","Channel":"MOBILE","Country":"HK","AppName":"RCWB","reqId": "234234234"};
    xhr.open('POST', url, true);
    xhr.setRequestHeader('SC-CLIENT-CONTEXT', JSON.stringify(scContext));
    xhr.setRequestHeader('Authorization', "Token fake_rcwb&2345678&HK&CB_HK");
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            resolve("File Deleted");
        } else {
            reject(xhr.statusText);
        }
    };

    xhr.onerror = () => {
      reject({ message: "XHR Error" });
    }

    xhr.send(JSON.stringify(documentRecord));
  })
}

export const fetchdocumentChecklist = (url) => {
    return new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest();
        const scContext = {"ClientId":"CLIENT","Language":"EN","RumDevice":"version: 1.0.88; build: 88","InstanceCode":"CB_HK","Version":"1.0","Channel":"MOBILE","Country":"HK","AppName":"RCWB","reqId": "234234234"};
        xhr.open('GET', url, true);
        xhr.setRequestHeader('SC-CLIENT-CONTEXT', JSON.stringify(scContext));
        xhr.setRequestHeader('Authorization', "Token fake_rcwb&2345678&HK&CB_HK");
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = () => {
          reject({ message: "XHR Error" });
        }

        xhr.send();
    })
}
