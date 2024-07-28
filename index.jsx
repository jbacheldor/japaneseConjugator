const body = document.querySelector("#body");
const menuScreen = document.querySelector("#menuScreen");
body.append(menuScreen);

const studyOptions = ['genki', 'jplt'];
const typesOfSpeech = ['verbs', 'adverbs'];
const howToStudy = ['Follow a Course', "Build your Own"];

function createMenu(question, answers) {
    const bodySection = document.querySelector(".input-tester");

    inputOption = document.createElement('p');
    inputOption.setAttribute('id', 'questionTitle');
    inputOption.innerHTML = question;
    bodySection.append(inputOption);

    for(var i = 0; i < answers.length; i++){
        questionAnswer = document.createElement('p');
        questionAnswer.setAttribute('id', 'questionAnswer');
        questionAnswer.innerHTML = answers[i];
        bodySection.append(questionAnswer);
        questionAnswer.addEventListener('click', selectElement);
    }

    submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submit');
    submitButton.innerHTML = 'submit';
    bodySection.append(submitButton);

    // submitButton.addEventListener("click", submitInfo);

    // when submit is click then 
    // remove and add in the next 
    // document.removeChild();
    // when submit is selected
}

// function submitInfo(){

// }



function selectElement(Event) {
    if(Event.target.getAttribute('selected') === "true"){
        Event.target.removeAttribute('selected');
    }
    else {
        Event.target.setAttribute('selected', true);
    }
}

// // add event listen f

// function createNext( {

// })

createMenu('How would you like to learn?', howToStudy);