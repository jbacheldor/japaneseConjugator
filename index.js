import { createQuizPage } from "./pages/QuizPage.js";
import { createGenkiMenu } from "./pages/GenkiChapterPage.js";

const body = document.querySelector("#body");
const menuSection = document.querySelector(".input-tester");
const bodySection = document.querySelector('.bodySection');

const courseOptions = ['genki', 'jplt'];
const typesOfSpeech = ['verbs', 'adverbs'];
const howToStudy = ['Follow a Course', "Build your Own"];
const verbForms = ['Te Form', 'Present Affirmative', 'Present Negative', 'Past Affirmative', 'Past Negative', 'Long Form', 'Short Form'];
const adjectiveForms = ['Na', 'I'];

function createButtons(name, section, onClickFunc) {
    const button = document.createElement('button');
    button.setAttribute('id', name);
    button.innerText = name;

    button.addEventListener('click', (Event) => { onClickFunc(Event) });

    section.append(button);
}

function selectAll(Event) {
    const answersEven = document.querySelectorAll('#bookAnswerEven');
    const answersOdd = document.querySelectorAll('#bookAnswerOdd');

    if (Event.target.getAttribute('selected') === "true") {
        Event.target.removeAttribute('selected');
        for (let i = 0; i < answersEven.length; i++) {
            answersEven[i].removeAttribute('selected');
        }
        for (let i = 0; i < answersOdd.length; i++) {
            answersOdd[i].removeAttribute('selected');
        }
    } else {
        Event.target.setAttribute('selected', true);
        for (let i = 0; i < answersEven.length; i++) {
            answersEven[i].setAttribute('selected', true);
        }
        for (let i = 0; i < answersOdd.length; i++) {
            answersOdd[i].setAttribute('selected', true);
        }
    }
}

// maybe do some switch case stuff - but that's for tomorrowww
function goNext() {
    console.log('go next');
    const pageNum = sessionStorage.getItem('nextPage');
    menuSection.replaceChildren();
    figureOutPage(pageNum);
}

function goBack() {
    console.log('go back');
    const pageNum = sessionStorage.getItem('prevPage');
    menuSection.replaceChildren();
    figureOutPage(pageNum);
}

function createResultsPage() {

}

export function createSubmitButton(callbackFunction) {
    let submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submit');
    submitButton.innerHTML = 'submit';
    menuSection.append(submitButton);

    submitButton.addEventListener("click", e => {
        if (callbackFunction) {
            callbackFunction();
            submitInfo(e);
        } else {
            submitInfo(e)
        }
    });
}

function updateStorage(nextPage, prevPage) {
    sessionStorage.setItem('nextPage', nextPage);
    sessionStorage.setItem('prevPage', prevPage);
}

function figureOutPage(pageNumber) {
    pageNumber = Number(pageNumber);
    const button = document.querySelector('[id="select all"]');
    if (button) bodySection.removeChild(button.parentNode);

    switch (pageNumber) {
        case 2:
            updateStorage(0, 1);
            createMenu('Which vocabulary do you want to study?', typesOfSpeech);
            break;
        case 3:
            updateStorage(0, 1);
            createMenu('what course do you want to follow?', courseOptions);
            break;
        case 4:
            updateStorage(0, 3);
            createMenu('Genki 1 Chapters', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
            break;
        case 5:
            updateStorage(0, 3);
            createMenu('JPLT Tests', ['N1', 'N2', 'N3', 'N4', 'N5']);
            break;
            // case 6:
            //     updateStorage(0, 3);
            //     createMenu('JPLT Tests', ['N1', 'N2', 'N3', 'N4', 'N5']);
            //     break;
            // case 7:
            //     updateStorage(0, 3);
            //     createMenu('JPLT Tests', ['N1', 'N2', 'N3', 'N4', 'N5']);
            //     break;
        case 6:
            updateStorage(0, 4);
        default:
            updateStorage(0, 0);
            createMenu('How would you like to learn?', howToStudy);
            break;
    }
}
// singular or multple
// mayhaps - make this be a switch case - makes incrementing and decrementing ezzz
function createMenu(question, answers) {
    let inputOption = document.createElement('p');
    inputOption.setAttribute('id', 'questionTitle');
    inputOption.innerHTML = question;
    menuSection.append(inputOption);

    if (question === 'Genki 1 Chapters') {
        createGenkiMenu(answers);
    } else {
        for (let i = 0; i < answers.length; i++) {
            let questionAnswer = document.createElement('p');
            questionAnswer.setAttribute('id', 'questionAnswer');
            questionAnswer.innerHTML = answers[i];
            menuSection.append(questionAnswer);
            if (question === 'Which vocabulary do you want to study?') {
                questionAnswer.addEventListener('click', selectMultipleElement);
            } else {
                questionAnswer.addEventListener('click', selectSingleElement);
            }
        }

        // gotta make it so you can only select all on certain ones 
        createSubmitButton();
    }

    if (question === "Genki 1 Chapters") {
        const footerSection = document.querySelector('#footerSection');
        footerSection.replaceChildren();
        createButtons('back', footerSection, goBack);
        createButtons('select all', footerSection, selectAll);
        createButtons('next', footerSection, goNext);
    }
    if (!body.querySelector('#back') && question !== 'How would you like to learn?') {
        const footerSection = document.createElement('div');
        footerSection.setAttribute('id', 'footerSection');
        bodySection.append(footerSection);
        createButtons('back', footerSection, goBack);
        createButtons('next', footerSection, goNext);
    }
}

function submitInfo(Event) {
    // Event.preventdefault()
    const selected = document.querySelectorAll('#questionAnswer[selected="true"]');
    const newList = [];

    for (let i = 0; i < selected.length; i++) {
        newList.push(selected[i].innerHTML);
    }

    menuSection.replaceChildren();

    if (newList.includes('Build your Own')) {
        figureOutPage(2);
    } else if (newList.includes('Follow a Course')) {
        figureOutPage(3);
    } else if (newList.includes('genki')) {
        figureOutPage(4);
    } else if (newList.includes('jplt')) {
        figureOutPage(5);
    } else {
        createQuizPage();
    }
}
// verb forms
// adjective forms

// this is for when you can only select one
// ie: if the target is Genki or JPLT or one of the singular elements 
function selectSingleElement(Event) {
    const selected = document.querySelector('[selected="true"]');

    // handles use case for removing if double clicked
    if (Event.target.getAttribute('selected')) {
        Event.target.removeAttribute('selected');
    }
    // if a different one is clicked
    else {
        // if selected is true then we have to unselect that one and select target
        if (selected) {
            selected.removeAttribute('selected');
        }
        Event.target.setAttribute('selected', "true");
    }
}

// this is for when you can select multiple options on the screen
export function selectMultipleElement(Event) {
    if (Event.target.getAttribute('selected')) {
        Event.target.removeAttribute('selected');
    } else {
        Event.target.setAttribute('selected', "true");
    }
}

createMenu('How would you like to learn?', howToStudy);

// createQuizPage()