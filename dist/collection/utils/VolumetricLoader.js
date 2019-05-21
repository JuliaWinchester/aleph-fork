export class VolumetricLoader {
    constructor() { }
    load(src, container) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", src, true);
            xhr.onload = () => {
                let data = JSON.parse(xhr.responseText);
                data = this._mapfiles(data.baseurl, data.series);
                const loader = new AMI.VolumeLoader(container);
                loader
                    .load(data)
                    .then(() => {
                    const src = loader.data[0].mergeSeries(loader.data);
                    const stack = src[0].stack[0];
                    loader.free();
                    resolve(stack);
                })
                    .catch(error => {
                    console.log("Volume load error");
                    reject(error);
                });
            };
            xhr.onerror = error => {
                reject(error);
            };
            xhr.send();
        });
    }
    _mapfiles(baseurl, files) {
        return files.map(filename => {
            if (!baseurl.endsWith("/")) {
                baseurl += "/";
            }
            return `${baseurl}${filename}`;
        });
    }
}
