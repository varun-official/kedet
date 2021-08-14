import firebase from "firebase";
import "firebase/storage";

export default function Upload(uri,genfile) {
  let url = null;
  uploadImage = async(imageUri,genf) => {
      const response = await fetch(imageUri);
      const blob = await response.blob();
      return firebase.storage().ref().child(`children/${genf}`).put(blob).then(snapshot => {
       return snapshot.ref.getDownloadURL();
    })
   .then(downloadURL => {
      console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
      url = downloadURL;
      return downloadURL;
   })
   .catch(error => {
      console.log(`Failed to upload file and get link - ${error}`);
   });
  }
  return uploadImage(uri,genfile).then((url)=>{
     console.log("URL after uploading is "+url)
      return url;
  }).catch((err)=>console.log(err));
}

