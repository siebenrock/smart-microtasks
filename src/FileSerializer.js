import JSZip from 'jszip';
import { saveAs } from 'file-saver';


class FileSerializer {

    createZip(json, files) {
        var zip = new JSZip();

        // create a file
        zip.file("data.json", JSON.stringify(json))
        zip.folder("uploads")

        for (let file of files) {
            zip.folder("uploads").file(file.name, file)
        }
        return zip;
    }

    downloadZip(zip, name) {
        let filename = (name || 'downloads') + '.zip'
        zip.generateAsync({type:"blob"}).then(function (blob) { // 1) generate the zip file
            saveAs(blob, filename);                          // 2) trigger the download
        }, function (err) {
            jQuery("#blob").text(err);
        });
    }
}

export default FileSerializer;


