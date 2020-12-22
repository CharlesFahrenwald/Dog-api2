'use strict';
$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });

  function watchForm(){
    $("#dog-num-form").submit(event => {
      event.preventDefault();
      imageReturn();
    });
  }

  function imageReturn() {
   fetch("https://dog.ceo/api/breed/" + dogPhotoToFind() + "/images/random")
    .then(response => response.json())
    .then (responseJson => displayDogs(responseJson))
    .catch(error => alert("no dogs found"));
  }
  
  function dogPhotoToFind() {
      let breed = $("#dog-breed").val();
      return breed;
  }

  function displayDogs(responseJson) {
    console.log(responseJson);
   if (responseJson.status !== "success"){
       alert("no dogs found");
   } else if (responseJson.status === "success") {
       $(".results").replaceWith(
           `<img src= "${responseJson.message}" class="results">`
       );
       $(".results").removeClass("hidden");
   }
}
    