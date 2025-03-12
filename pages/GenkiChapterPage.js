import { selectMultipleElement, createSubmitButton } from '../index.js';

export function createGenkiMenu(answers) {
    // clean up girlies
    const menuSection = document.querySelector(".input-tester");

    // genki 1 and genki 2
    let bookTitle = document.createElement('div');
    bookTitle.setAttribute('id', 'bookTitle');
    for (let i = 0; i < answers.length; i++) {
        let questionAnswer = document.createElement('button');
        if (i % 2 == 0) {
            questionAnswer.setAttribute('id', 'bookAnswerEven');
        } else {
            questionAnswer.setAttribute('id', 'bookAnswerOdd');
        }
        questionAnswer.innerHTML = answers[i];
        bookTitle.append(questionAnswer);
        questionAnswer.addEventListener('click', selectMultipleElement);
    }
    menuSection.append(bookTitle);

    let inputOption = document.createElement('p');
    inputOption.setAttribute('id', 'questionTitle');
    inputOption.innerHTML = 'Genki 2 Chapters';
    menuSection.append(inputOption);

    bookTitle = document.createElement('p');
    bookTitle.setAttribute('id', 'bookTitle');
    for (let i = 0; i < answers.length; i++) {
        let questionAnswer = document.createElement('button');
        if (i % 2 == 0) {
            questionAnswer.setAttribute('id', 'bookAnswerEven');
        } else {
            questionAnswer.setAttribute('id', 'bookAnswerOdd');
        }
        questionAnswer.innerHTML = answers[i];
        bookTitle.append(questionAnswer);
        questionAnswer.addEventListener('click', selectMultipleElement);
    }
    menuSection.append(bookTitle);

    createSubmitButton();
}