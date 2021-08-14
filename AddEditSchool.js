import React from "react";
import db from "../firestore";

export default function AddEditSchool(schoolName,schoolAddress,schoolPinCode,schoolMedium,schoolBankAccntNo,schoolIFSCCode,schoolUPI,email) {
    
  db.collection("schools").doc(schoolPinCode).set({
    name: schoolName,
    address: schoolAddress,
    pincode: schoolPinCode,
    medium:schoolMedium,
    accountNo:schoolBankAccntNo,
    ifscCode:schoolIFSCCode,
    upiId:schoolUPI,
    adminMailId:email
  })
  .then(() => {
     const d = new Date();
     console.log("Document added at "+d.toString()); 
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });
}
