const AdmZip = require('adm-zip');
async function createZipArchive(){
 const zip = new AdmZip();
 const outputFile = "test.zip";
 zip.addLocalFile("docghi.txt");
 zip.writeZip(outputFile);
 console.log(`Created ${outputFile} complete`);
}
createZipArchive();