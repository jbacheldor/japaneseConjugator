const body = document.querySelector("#body");
const menuSection = document.querySelector(".input-tester");
const bodySection = document.querySelector('.bodySection');

const courseOptions = ['genki', 'jplt'];
const typesOfSpeech = ['verbs', 'adverbs'];
const howToStudy = ['Follow a Course', "Build your Own"];
const verbForms = ['Te Form', 'Present Affirmative', 'Present Negative', 'Past Affirmative', 'Past Negative', 'Long Form', 'Short Form'];
const adjectiveForms = [];

function createMenu(question, answers) {

    inputOption = document.createElement('p');
    inputOption.setAttribute('id', 'questionTitle');
    inputOption.innerHTML = question;
    menuSection.append(inputOption);

    for(var i = 0; i < answers.length; i++){
        questionAnswer = document.createElement('p');
        questionAnswer.setAttribute('id', 'questionAnswer');
        questionAnswer.innerHTML = answers[i];
        menuSection.append(questionAnswer);
        questionAnswer.addEventListener('click', selectElement);
    }

    submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submit');
    submitButton.innerHTML = 'submit';
    menuSection.append(submitButton);

    submitButton.addEventListener("click", submitInfo);
}

function submitInfo(Event){
    const selected = document.querySelectorAll('#questionAnswer[selected="true"]');
    const newList = [];

    for(var i = 0; i < selected.length; i++){
        newList.push(selected[i].innerHTML);
    }

    menuSection.replaceChildren(); 

    console.log(newList);
    if(newList.includes('Build your Own')){
        console.log('woah');
        createMenu('Which vocabulary do you want to study?', typesOfSpeech);
    } else {
        console.log('oh no');
        createMenu('what course do you want to follow?', courseOptions);
    }
    // document.removeChild(menuSection);
    // createMenu();
}

// womp womp wompppp - on certain ones u can only select one

// Genki Chapters
// 1 - 12

// JPLT
// 1 - 5

// verb forms
// adjective forms

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