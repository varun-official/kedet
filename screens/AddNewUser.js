import React from "react";
import db from "../firestore";

export default function writeUserData(name, email, phone) {
  db.collection("users").doc(phone).set({
    name: name,
    email: email,
    phone: phone,
    role:2
  })
  .then(() => {
    const d = new Date();
    console.log("Document successfully written at " + d.toString());
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });
}
