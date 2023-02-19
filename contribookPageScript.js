let submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", () => {


  

  

  

   {


    //getting name and email
    let name = document.querySelector("#cot6-name").value;
    let email = document.querySelector("#cot6-email").value;

    

    

    //getting text area data
    let textareaData = document.querySelector("#praiseText").value;

    //showing form preview
    let confirmForm = confirm(`Form Preview:\n
Name: ${name}
Email Id: ${email}

Any more praises? ${textareaData}
    `);

    if(confirmForm == true){
      alert("Form Successfully Submitted");
      let contriBookForm = document.querySelector("#contriBookForm");
      contriBookForm.submit();
    }

  }

})
