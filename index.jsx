const body = document.querySelector("#body");
const menuSection = document.querySelector(".input-tester");
const bodySection = document.querySelector('.bodySection');

const courseOptions = ['genki', 'jplt'];
const typesOfSpeech = ['verbs', 'adverbs'];
const howToStudy = ['Follow a Course', "Build your Own"];
const verbForms = ['Te Form', 'Present Affirmative', 'Present Negative', 'Past Affirmative', 'Past Negative', 'Long Form', 'Short Form'];
const adjectiveForms = [];

function createButtons(name, section) {
    const button = document.createElement('button');
    button.setAttribute('id', name);
    button.innerText = name;

    section.append(button);
}

// singular or multple
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

    // gotta make it so you can only select all on certain ones 

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

    const footerSection = document.createElement('div');
    footerSection.setAttribute('id', 'footerSection');
    bodySection.append(footerSection);
    createButtons('back', footerSection);
    createButtons('next', footerSection);

    console.log(newList);
    if(newList.includes('Build your Own')){
        createMenu('Which vocabulary do you want to study?', typesOfSpeech);
    } else if (newList.includes('Follow a Course')) {
        createMenu('what course do you want to follow?', courseOptions);
    } else if (newList.includes('genki')) {
        createMenu('Genki Chapters', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    }
    else if (newList.includes('jplt')){
        createMenu('JPLT Tests', ['N1', 'N2', 'N3', 'N4', 'N5']);
    } 
}
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