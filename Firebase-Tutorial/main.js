const firebaseConfig = {
    apiKey: "AIzaSyBAFq0dgj4YNCmC28Um4wF5bU4PnnEoDfo",
    authDomain: "contact-formtest-61fd4.firebaseapp.com",
    projectId: "contact-formtest-61fd4",
    storageBucket: "contact-formtest-61fd4.appspot.com",
    messagingSenderId: "133031520392",
    appId: "1:133031520392:web:5157ed173a0af04035973d"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   reference contact info Collection 
let contactInfo=firebase.database().ref("infos");

// listen  for a submit 
document.querySelector(".contact-form").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    // get values
    let name=document.querySelector(".name").value;
    let email=document.querySelector(".email").value;
    let message=document.querySelector(".message").value;
    
    console.log(name,email,message);

    saveContactInfo(name,email,message);
}

function saveContactInfo(name,email,message){
    let newContactInfo=contactInfo.push();

    newContactInfo.set({
        name:name,
        email:email,
        message:message,
    }); 
}