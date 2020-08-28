import * as AWS from "aws-sdk";
import fs from "fs";
import getFileSha1 from "./getFileSha1";
import getFileExt from "./getFileExt";

// Enter copied or downloaded access ID and secret key here
const ID = "AKIAR5KZMOTEB45JUE45";
const SECRET = "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";
const BUCKET_NAME = "openverse-lms";
const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});

// WARNING
// This should not be in the client in production!
// This entire function should be replaced with a specific API call to upload
// artifacts to the S3 bucket, providing auth token like the rest of api calls,
// and should return a Promise like the current implementation, to not break
// the current publishing codes and flow.
export default function uploadFileToS3(
  localFileName: string,
  remotefileName?: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    // Read content from the file
    let fileContent;
    try {
      fileContent = fs.readFileSync(localFileName);
    } catch (e) {
      reject(e);
    }

    // Setting up S3 upload parameters
    const params = {
      Bucket: BUCKET_NAME,
      Key:
        remotefileName ||
        getFileSha1(localFileName) + getFileExt(localFileName), // File name you want to save as in S3
      Body: fileContent,
      ACL: "public-read",
    };

    // Uploading files to the bucket
    s3.upload(params, (err: any, data: any) => {
      if (err) {
        reject(err);
      } else {
        console.log(`File uploaded successfully. ${data.Location}`);
        resolve(data.Location);
      }
    });
  });
}