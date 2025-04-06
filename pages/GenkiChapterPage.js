import { selectMultipleElement, createSubmitButton } from '../index.js';
import { getChapters } from '../local-data/localServer.js';

export function createGenkiMenu(answers) {
    // clean up girlies
    const menuSection = document.querySelector(".input-tester");

    // genki 1 and genki 2
    let bookTitle = document.createElement('div');
    bookTitle.setAttribute('id', 'bookTitle');
    for (let i = 0; i < answers.length; i++) {
        let questionAnswer = document.createElement('button');
        questionAnswer.setAttribute('id', 'bookAnswer');
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
        questionAnswer.setAttribute('id', 'bookAnswer');
        questionAnswer.setAttribute('disabled', true);
        questionAnswer.innerHTML = answers[i];
        bookTitle.append(questionAnswer);
        questionAnswer.addEventListener('click', selectMultipleElement);
    }
    menuSection.append(bookTitle);

    const bodySection = document.querySelector('.bodySection');

    createSubmitButton(getConjugations, bodySection);
}

async function getConjugations() {
    const chapters = document.querySelectorAll('#bookAnswer[selected="true"]');
    let chapterList = ""
    chapters.forEach((chapter) => {
        if (chapterList == "") chapterList = chapter.innerHTML
        else chapterList = chapterList + ", " + chapter.innerHTML

    })
    let data = {}
    try {
        //  this isnt working rn process.env.env != "LOCAL"
        if (true) {
            data = await getChapters(chapterList)
        } else {
            await fetch(`http://localhost:8000/genkiChapters?` + new URLSearchParams({
                    chapters: chapterList,
                }).toString())
                .then((res) => {
                    if (res.status == 200) data = res.json();
                }).catch((error) => {
                    console.log(error)
                })
        }
    } catch (error) {
        console.log('error', error)
    }
    return data
}