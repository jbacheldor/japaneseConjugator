const body = document.querySelector("#body");
const menuSection = document.querySelector(".input-tester");
const bodySection = document.querySelector('.bodySection');

const courseOptions = ['genki', 'jplt'];
const typesOfSpeech = ['verbs', 'adverbs'];
const howToStudy = ['Follow a Course', "Build your Own"];
const verbForms = ['Te Form', 'Present Affirmative', 'Present Negative', 'Past Affirmative', 'Past Negative', 'Long Form', 'Short Form'];
const adjectiveForms = [];

function createButtons(name, section, onClickFunc) {
    const button = document.createElement('button');
    button.setAttribute('id', name);
    button.innerText = name;

    button.addEventListener('click', (Event) => {onClickFunc(Event)});

    section.append(button);
}

function selectAll(Event) {
    const answersEven = document.querySelectorAll('#bookAnswerEven');
    const answersOdd = document.querySelectorAll('#bookAnswerOdd');
    
    if(Event.target.getAttribute('selected') === "true" ) {
        Event.target.removeAttribute('selected');
        for(var i = 0; i < answersEven.length; i++){
            answersEven[i].removeAttribute('selected');
        }
        for(var i = 0; i < answersOdd.length; i++){
            answersOdd[i].removeAttribute('selected');
        }
    } else {
        Event.target.setAttribute('selected', 'true');
        for(var i = 0; i < answersEven.length; i++){
            answersEven[i].setAttribute('selected', true);
        }
        for(var i = 0; i < answersOdd.length; i++){
            answersOdd[i].setAttribute('selected', true);
        }
    }
}

function goNext() {
    console.log('go next');

}

function goBack() {
    console.log('go back');
}



function createGenkiMenu(answers) {
    // genki 1 and genki 2
    bookTitle = document.createElement('p');
    bookTitle.setAttribute('id','bookTitle');
    for(var i = 0; i < answers.length; i++){
        questionAnswer = document.createElement('button');
        if(i % 2 == 0) {
            questionAnswer.setAttribute('id', 'bookAnswerEven');
        }
        else {
            questionAnswer.setAttribute('id', 'bookAnswerOdd');
        }
        questionAnswer.innerHTML = answers[i];
        bookTitle.append(questionAnswer);
        questionAnswer.addEventListener('click', selectElement);
    }
    menuSection.append(bookTitle);

    // this will have to be Genki 2 but we aren't there justttt yet

    inputOption = document.createElement('p');
    inputOption.setAttribute('id', 'questionTitle');
    inputOption.innerHTML = 'Genki 2 Chapters';
    menuSection.append(inputOption);

    bookTitle = document.createElement('p');
    bookTitle.setAttribute('id','bookTitle');
    for(var i = 0; i < answers.length; i++){
        questionAnswer = document.createElement('button');
        if(i % 2 == 0) {
            questionAnswer.setAttribute('id', 'bookAnswerEven');
        }
        else {
            questionAnswer.setAttribute('id', 'bookAnswerOdd');
        }
        questionAnswer.innerHTML = answers[i];
        bookTitle.append(questionAnswer);
        questionAnswer.addEventListener('click', selectElement);
    }
    menuSection.append(bookTitle);

    createSubmitButton();
}

function createSubmitButton() {
    submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submit');
    submitButton.innerHTML = 'submit';
    menuSection.append(submitButton);

    submitButton.addEventListener("click", submitInfo);
}

// singular or multple
// mayhaps - make this be a switch case - makes incrementing and decrementing ezzz
function createMenu(question, answers) {
    inputOption = document.createElement('p');
    inputOption.setAttribute('id', 'questionTitle');
    inputOption.innerHTML = question;
    menuSection.append(inputOption);

    if(question === 'Genki 1 Chapters'){
        createGenkiMenu(answers);
    } 
    else {
        for(var i = 0; i < answers.length; i++){
            questionAnswer = document.createElement('p');
            questionAnswer.setAttribute('id', 'questionAnswer');
            questionAnswer.innerHTML = answers[i];
            menuSection.append(questionAnswer);
            questionAnswer.addEventListener('click', selectElement);
        }
    
        // gotta make it so you can only select all on certain ones 
        createSubmitButton();
    }

    if(question === "Genki 1 Chapters"){
        const footerSection = document.querySelector('#footerSection');
        footerSection.replaceChildren();
        createButtons('back', footerSection, goBack);
        createButtons('select all', footerSection, selectAll);
        createButtons('next', footerSection, goNext);
    }
    if(!body.querySelector('#back') && question !== 'How would you like to learn?') {
        const footerSection = document.createElement('div');
        footerSection.setAttribute('id', 'footerSection');
        bodySection.append(footerSection);
        createButtons('back', footerSection, goBack);
        createButtons('next', footerSection, goNext);
    }
}

function submitInfo(Event){
    const selected = document.querySelectorAll('#questionAnswer[selected="true"]');
    const newList = [];

    for(var i = 0; i < selected.length; i++){
        newList.push(selected[i].innerHTML);
    }

    menuSection.replaceChildren(); 

    if(newList.includes('Build your Own')){
        createMenu('Which vocabulary do you want to study?', typesOfSpeech);
    } else if (newList.includes('Follow a Course')) {
        createMenu('what course do you want to follow?', courseOptions);
    } else if (newList.includes('genki')) {
        createMenu('Genki 1 Chapters', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
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