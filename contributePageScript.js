let submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", () => {


  

  

  

   {


    //getting name and email
    let name = document.querySelector("#cot5-name").value;
    let email = document.querySelector("#cot5-email").value;

    //getting checkbox data
    let allCheckedBoxesElements = document.querySelectorAll('input[type="checkbox"]:checked');
    console.dir(allCheckedBoxesElements);
    let checkboxData = [];
    allCheckedBoxesElements.forEach((checkbox)=>{ checkboxData.push(checkbox.value);  })

    //getting radio data
    let selectedRadioElement = document.querySelector("input[type='radio']:checked");
    let radioData = "";
    if(selectedRadioElement != null){
      radioData = selectedRadioElement.value;
    }

    //getting list1 data
    let selectedSellingComparisionElement = document.querySelector("input[list='sellComparisions']");
    let sellingComparisionData = selectedSellingComparisionElement.value;

    //getting list2 data
    let improvementOpinionElement = document.querySelector("#improvementOpinion");
    let improvementOpinionData = improvementOpinionElement.value;

    //getting text area data
    let textareaData = document.querySelector("#praiseText").value;

    //showing form preview
    let confirmForm = confirm(`Form Preview:\n
Name: ${name}
Email Id: ${email}
Please Check All that Apply: ${checkboxData.join("\n")}
One thing you love about my website: ${radioData}
If my website were a book, how many copies would it sell? ${sellingComparisionData}
How can I improve my website? ${improvementOpinionData}
Any more praises? ${textareaData}
    `);

    if(confirmForm == true){
      alert("Form Successfully Submitted");
      let contributeBookForm = document.querySelector("#contributeBookForm");
      contributeBookForm.submit();
    }

  }

})
