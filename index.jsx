const body = document.querySelector("#body");
const menuSection = document.querySelector(".input-tester");
const bodySection = document.querySelector('.bodySection');

const courseOptions = ['genki', 'jplt'];
const typesOfSpeech = ['verbs', 'adverbs'];
const howToStudy = ['Follow a Course', "Build your Own"];
const verbForms = ['Te Form', 'Present Affirmative', 'Present Negative', 'Past Affirmative', 'Past Negative', 'Long Form', 'Short Form'];
const adjectiveForms = ['Na', 'I'];

var currentElement = "";

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

    if(Event.target.getAttribute('selected') === "true") {
        Event.target.removeAttribute('selected');
        for(var i = 0; i < answersEven.length; i++){
            answersEven[i].removeAttribute('selected');
        }
        for(var i = 0; i < answersOdd.length; i++){
            answersOdd[i].removeAttribute('selected');
        }
    } else {
        Event.target.setAttribute('selected', true);
        for(var i = 0; i < answersEven.length; i++){
            answersEven[i].setAttribute('selected', true);
        }
        for(var i = 0; i < answersOdd.length; i++){
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

function createGenkiMenu(answers) {
    // genki 1 and genki 2
    bookTitle = document.createElement('div');
    bookTitle.setAttribute('id','bookTitle');
    for(var i = 0; i < answers.length; i++){
        questionAnswer = document.createElement('button');
        questionAnswer.innerHTML = answers[i];
        bookTitle.append(questionAnswer);
        questionAnswer.addEventListener('click', selectMultipleElement);
    }
    menuSection.append(bookTitle);

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
        questionAnswer.addEventListener('click', selectMultipleElement);
    }
    menuSection.append(bookTitle);

    createSubmitButton();
}

function createQuizPage() {
    // u must remove the input tester body
    background = document.querySelector('#background');
    background.style.backgroundImage = "url(./svgs/Background_Quiz.svg)";
    background.removeChild(document.querySelector("#header"));

    // sets the top part of the quiz page 
    topQuiz = document.createElement('div');
    topQuiz.setAttribute('id', 'topQuiz')

    home = document.createElement('button');
    home.setAttribute('id','homeButton');
    home.innerText = "home"
    topQuiz.append(home)

    form = document.createElement('span');
    form.setAttribute('id', 'formTitle');
    form.innerHTML = "{Form Here}"
    topQuiz.append(form)

    tutorial = document.createElement('button');
    tutorial.setAttribute('id','tutorialButton');
    tutorial.innerText = "tutorial"
    topQuiz.append(tutorial)
    bodySection.append(topQuiz)

    // add in the target value
    mainBlock = document.createElement('div');
    mainBlock.setAttribute('id', 'mainBlock');

    centerBlock = document.createElement('div');
    centerBlock.setAttribute('id', 'centerBlock');

    superScript = document.createElement('span');
    superScript.setAttribute('id', 'superScript');
    superScript.innerHTML = "た"
    centerBlock.append(superScript);

    kanjiBlock = document.createElement('span');
    kanjiBlock.setAttribute('id', 'kanjiBlock');
    kanjiBlock.innerHTML = "食べる"
    centerBlock.append(kanjiBlock);
    // centerBlock.style.width = `${kanjiBlock.innerHTML.length*20}px`
    mainBlock.append(centerBlock);

    translated = document.createElement('span');
    translated.setAttribute('id', 'translated');
    translated.innerHTML = "v. to eat"
    mainBlock.append(translated);

    bodySection.append(mainBlock)


    // add in the user value inputs 
    inputContainer = document.createElement('div');
    inputContainer.setAttribute('id', 'containerInputBox');

    inputBox = document.createElement('div');
    inputBox.setAttribute('id', 'inputBox');

    inputContainer.append(inputBox);


    clearButton = document.createElement('button');
    clearButton.setAttribute('id', 'clearButton');
    clearButton.innerText = "clear"
    clearButton.addEventListener('click', clearValues)
    inputBox.append(clearButton)


    var listOfTiles = ["た", "べ", "ま", "す"]

    
    for(let i = 0; i < listOfTiles.length; i++){
        inputBox.append(createInputTiles(listOfTiles[i]))
    }

    inputContainer.append(inputBox)

    bodySection.append(inputContainer)

    // now we need the input button-y section

    instruction = document.createElement('span')
    instruction.setAttribute('id', 'instruction')
    instruction.innerHTML = "type or select from below"
    bodySection.append(instruction)

    // set the special characters

    specialCharacters = document.createElement('div');
    specialCharacters.setAttribute('id', 'specialCharacters');

    var specialCharactersList = ["ゃ", "ゅ", "ょ", "ゅ", "っ", "ー", "゛"]

    for(let i = 0; i < specialCharactersList.length; i++){
        specialCharacter = document.createElement('div');
        specialCharacter.setAttribute('class', 'activeTiles');
        specialCharacter.innerHTML = specialCharactersList[i]
        specialCharacters.append(specialCharacter)
    }

    bodySection.append(specialCharacters)

    // set the non-special characters
    var regularCharactersList = [
        ["あ", "い", "う", "お", "え"],
        ["か", "き", "く", "こ", "け"],
        ["さ", "し", "す", "そ", "せ"],
        ["た", "つ", "ち", "と", "て"],
        ["な", "に", "ぬ", "の", "ね"], 
        ["は", "ひ", "ふ", "ほ", "へ"],
        ["ま", "み", "む", "も", "め"],
        ["や", "", "ゆ", "よ", ""],
        ["ら", "り", "る", "ろ", "れ"],
        ["わ", "ん", "", "を", ""]
    ]
    regularCharacters = document.createElement('div');
    regularCharacters.setAttribute('id', 'regularCharacters');

    regularCharactersList.forEach((column)=> {
        characterColumn = document.createElement('div');
        characterColumn.setAttribute('class', 'characterColumn');

        column.forEach((item) => {
            regularCharacter = document.createElement('div');
            regularCharacter.setAttribute('class', item == "" ? 'emptyTiles': 'activeTiles');
            regularCharacter.innerHTML = item
            regularCharacter.addEventListener('click', e => updateInput(e))
            characterColumn.append(regularCharacter)
        })

        regularCharacters.append(characterColumn)
    })

    bodySection.append(regularCharacters)

    // submit button

    submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submit');
    submitButton.innerHTML = "submit"
    submitButton.addEventListener("click", submitValues)

    bodySection.append(submitButton)
    
}

function clearValues(){
    parentComponent = document.querySelector('#inputBox').children;
    for(var i = 0; i < parentComponent.length; i++){
        if(parentComponent[i].nodeName == "INPUT"){
            parentComponent[i].value = ""
        }
    }
}

function submitValues() {

    console.log('mama mia !')
}

function updateInput(event) {
    const target = document.getElementById(currentElement.id)
    target.value = event.target.innerHTML
}

function setId(id) {

    id.setAttribute('selected', "true");

    if(currentElement){
        prevElement = document.getElementById(currentElement.id);
        prevElement.removeAttribute('selected');
    }

    console.log('id', id)
    currentElement = id;
}

// need to have this separate because the input tiles will be dynamically rendered each time i think
function createInputTiles(value) {
    inputTiles = document.createElement('input');
    inputTiles.setAttribute('class', 'inputTiles');
    inputTiles.setAttribute('id', `${Math.random()}`)
    inputTiles.value = value

    inputTiles.addEventListener("click", (e) => {
        setId(e.target)
    })

    inputTiles.addEventListener("keydown", e => {
        focusElement = document.getElementById(currentElement.id)
        e.preventDefault()
        switch (e.keyCode) {
            // this is a backspace
            case 46:
            //   this is a delete
            case 8:
                if(focusElement.value == ""){
                    if(focusElement.previousElementSibling != null){
                        setId(focusElement.previousElementSibling)
                        focusElement.previousElementSibling.value = ""
                    }
                  }
                else {
                    focusElement.value = ""
                }
                break;
            // key tabs girl 
            case 9:
                if(focusElement.nextElementSibling != null){
                    setId(focusElement.nextElementSibling)
                }
                break;
            // going to the left
            case 37:
                if(focusElement.previousElementSibling != null){
                    setId(focusElement.previousElementSibling)
                }
                break;
            case 39:
                if(focusElement.nextElementSibling != null){
                    setId(focusElement.nextElementSibling)
                }
                break;

            // we need one for taking in the values 
            // like if the keydown is an 'i' then we take in an i, yaa knowww
            // case "ArrowDown":
            //   // some code here…
            //   break;
          }
    })
    return inputTiles
}

function createResultsPage() {

}

function createSubmitButton() {
    submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submit');
    submitButton.innerHTML = 'submit';
    menuSection.append(submitButton);

    submitButton.addEventListener("click", e => {submitInfo(e)});
}

function updateStorage(nextPage, prevPage)
{
    sessionStorage.setItem('nextPage', nextPage);
    sessionStorage.setItem('prevPage', prevPage);
}

function figureOutPage(pageNumber)
{
   pageNumber = Number(pageNumber);
    const button = document.querySelector('[id="select all"]');
    if(button) bodySection.removeChild(button.parentNode);

    switch(pageNumber) {
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
        default:
            updateStorage(0, 0);
            createMenu('How would you like to learn?', howToStudy);
            break;
    }
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
            if(question === 'Which vocabulary do you want to study?'){
                questionAnswer.addEventListener('click', selectMultipleElement);
            }
            else {
                questionAnswer.addEventListener('click', selectSingleElement);
            }
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
    // Event.preventdefault()
    const selected = document.querySelectorAll('#questionAnswer[selected="true"]');
    const newList = [];

    for(var i = 0; i < selected.length; i++){
        newList.push(selected[i].innerHTML);
    }

    menuSection.replaceChildren(); 

    if(newList.includes('Build your Own')){
        figureOutPage(2);
    } else if (newList.includes('Follow a Course')) {
        figureOutPage(3);
    } else if (newList.includes('genki')) {
        figureOutPage(4);
    }
    else if (newList.includes('jplt')){
        figureOutPage(5);
    } 
}
// verb forms
// adjective forms

// this is for when you can only select one
// ie: if the target is Genki or JPLT or one of the singular elements 
function selectSingleElement(Event) {
    const selected = document.querySelector('[selected="true"]');

    // handles use case for removing if double clicked
    if(Event.target.getAttribute('selected')){
        Event.target.removeAttribute('selected');
    }
    // if a different one is clicked
    else {
        // if selected is true then we have to unselect that one and select target
        if(selected) {
            selected.removeAttribute('selected');
        }
        Event.target.setAttribute('selected', "true");
    }
}

// this is for when you can select multiple options on the screen
function selectMultipleElement(Event) {
    if(Event.target.getAttribute('selected')){
        Event.target.removeAttribute('selected');
    }
    else {
        Event.target.setAttribute('selected', "true");
    }
}


// // add event listen f

// function createNext( {

// })

// createMenu('How would you like to learn?', howToStudy);

createQuizPage()