let currentElement = "";

let answerValues = []

export function clearValues() {
    let parentComponent = document.querySelector('#inputBox').children;
    for (let i = 0; i < parentComponent.length; i++) {
        if (parentComponent[i].nodeName == "INPUT") {
            parentComponent[i].value = ""
        }
    }
}

export function keysFunction(e, focusElement, setId) {

    switch (e.keyCode) {
        // this is a backspace
        case 46:
            //   this is a delete
        case 8:
            if (focusElement.value == "") {
                if (focusElement.previousElementSibling != null) {
                    setId(focusElement.previousElementSibling)
                    focusElement.previousElementSibling.value = ""
                }
            } else {
                focusElement.value = ""
            }
            break;
            // key tabs & enter girl
        case 13:
        case 9:
            if (focusElement.nextElementSibling != null) {
                setId(focusElement.nextElementSibling)
            }
            break;
            // going to the left
        case 37:
            if (focusElement.previousElementSibling != null) {
                setId(focusElement.previousElementSibling)
            }
            break;
            // going to the right
        case 39:
            if (focusElement.nextElementSibling != null) {
                setId(focusElement.nextElementSibling)
            }
            break;

            // for k
        case 75:
            // case for r
        case 82:
            // for y
        case 89:
            // for m
        case 77:
            // for w
        case 87:
            // for t
        case 84:
            focusElement.value = e.key
            break;

            // s 
        case 83:
            if (focusElement.value == "t") focusElement.value = 'ts'
            else focusElement.value = e.key
            break;

            // for h
        case 72:
            if (focusElement.value == "c") focusElement.value = 'ch'
            else if (focusElement.value == "s") focusElement.value = 'sh'
            else focusElement.value = e.key
            break;
            // vowel timmemeeeeee



            // case for i
        case 73:
            // then we need to see if we can compound
            if (focusElement.value.length == 1) {
                switch (focusElement.value) {
                    case 'k':
                        focusElement.value = 'き'
                        break;
                    case 'g':
                        focusElement.value = 'ぎ'
                        break;
                    case 'j':
                        //  ぢ oooh no this is also ji
                        focusElement.value = 'じ'
                        break;
                    case 'b':
                        focusElement.value = 'び'
                        break;
                    case 'p':
                        focusElement.value = 'ぴ'
                        break;
                    case 'ん':
                    case 'n':
                        focusElement.value = 'に'
                        break;
                    case 'h':
                        focusElement.value = 'ひ'
                        break;
                    case 'h':
                        focusElement.value = 'み'
                        break;
                    case 'r':
                        focusElement.value = 'り'
                        break;
                }
            } else if (focusElement.value.length == 0) {
                focusElement.value = 'い'
            } else if (focusElement.value.length > 1) {
                if (focusElement.value == "ch") focusElement.value = 'ち'
                else if (focusElement.value == "sh") focusElement.value = 'し'
            }
            break;
            // case for a
        case 65:
            if (focusElement.value.length == 1) {
                switch (focusElement.value) {
                    case 'k':
                        focusElement.value = 'か'
                        break;
                    case 'g':
                        focusElement.value = 'が'
                        break;
                    case 's':
                        focusElement.value = 'さ'
                        break;
                    case 'z':
                        focusElement.value = 'ざ'
                        break;
                    case 't':
                        focusElement.value = 'た'
                        break;
                    case 'd':
                        focusElement.value = 'だ'
                        break;
                    case 'b':
                        focusElement.value = 'ば'
                        break;
                    case 'p':
                        focusElement.value = 'ぱ'
                        break;
                    case 'ん':
                    case 'n':
                        focusElement.value = 'な'
                        break;
                    case 'h':
                        focusElement.value = 'は'
                        break;
                    case 'm':
                        focusElement.value = 'ま'
                        break;
                    case 'y':
                        focusElement.value = 'や'
                        break;
                    case 'r':
                        focusElement.value = 'ら'
                        break;
                    case 'w':
                        focusElement.value = 'わ'
                        break;
                }
            } else if (focusElement.value.length == 0) {
                focusElement.value = 'あ'
            }
            break;
            // case for o
        case 79:
            if (focusElement.value.length == 1) {
                switch (focusElement.value) {
                    case 'k':
                        focusElement.value = 'こ'
                        break;
                    case 'g':
                        focusElement.value = 'ご'
                        break;
                    case 's':
                        focusElement.value = 'そ'
                        break;
                    case 'z':
                        focusElement.value = 'ぞ'
                        break;
                    case 'd':
                        focusElement.value = 'ど'
                        break;
                    case 't':
                        focusElement.value = 'と'
                        break;
                    case 'b':
                        focusElement.value = 'ぼ'
                        break;
                    case 'p':
                        focusElement.value = 'ぽ'
                        break;
                    case 'ん':
                    case 'n':
                        focusElement.value = 'の'
                        break;
                    case 'h':
                        focusElement.value = 'ほ'
                        break;
                    case 'm':
                        focusElement.value = 'も'
                        break;
                    case 'y':
                        focusElement.value = 'よ'
                        break;
                    case 'r':
                        focusElement.value = 'ろ'
                        break;
                    case 'w':
                        focusElement.value = 'を'
                        break;
                }
            } else if (focusElement.value.length == 0) {
                focusElement.value = 'お'
            }
            break;
            // case for u
        case 85:
            if (focusElement.value.length == 1) {
                switch (focusElement.value) {
                    case 'k':
                        focusElement.value = 'く'
                        break;
                    case 'g':
                        focusElement.value = 'ぐ'
                        break;
                    case 's':
                        focusElement.value = 'す'
                        break;
                    case 'z':
                        //  there are doubles づ 
                        focusElement.value = 'ず'
                        break;
                    case 't':
                        focusElement.value = 'ち'
                        break;
                    case 'b':
                        focusElement.value = 'ぶ'
                        break;
                    case 'p':
                        focusElement.value = 'ぷ'
                        break;
                    case 'ん':
                    case 'n':
                        focusElement.value = 'ぬ'
                        break;
                    case 'f':
                        focusElement.value = 'ふ'
                        break;
                    case 'm':
                        focusElement.value = 'む'
                        break;
                    case 'y':
                        focusElement.value = 'ゆ'
                        break;
                    case 'r':
                        focusElement.value = 'る'
                        break;
                    case 'w':
                        focusElement.value = 'を'
                        break;
                }
            } else if (focusElement.value.length == 0) {
                focusElement.value = 'う'
            } else if (focusElement.value.length > 1 && focusElement.value == "ts") {
                focusElement.value = 'つ'
            }
            break;
            // case for e
        case 69:
            if (focusElement.value.length == 1) {
                switch (focusElement.value) {
                    case 'k':
                        focusElement.value = 'け'
                        break;
                    case 'g':
                        focusElement.value = 'げ'
                        break;
                    case 's':
                        focusElement.value = 'せ'
                        break;
                    case 'd':
                        focusElement.value = 'で'
                        break;
                    case 'z':
                        focusElement.value = 'ぜ'
                        break;
                    case 't':
                        focusElement.value = 'て'
                        break;
                    case 'b':
                        focusElement.value = 'べ'
                        break;
                    case 'p':
                        focusElement.value = 'ぺ'
                        break;
                    case 'ん':
                    case 'n':
                        focusElement.value = 'ね'
                        break;
                    case 'h':
                        focusElement.value = 'へ'
                        break;
                    case 'm':
                        focusElement.value = 'め'
                        break;
                    case 'r':
                        focusElement.value = 'れ'
                        break;
                }
            } else if (focusElement.value.length == 0) {
                focusElement.value = 'え'
            }
            break;
            // case for n 
        case 78:
            focusElement.value = 'ん'
            break;


            // the zesty additives

            // circle on back to this one fr
            // https://www.toptal.com/developers/keycode
            // https://www.nhk.or.jp/lesson/en/letters/hiragana.html

            // j baby
        case 74:
            // if (focusElement.value.length == 0) {
            //     focusElement.value = 'え'
            // }
            // break;
            // g 
        case 71:

            // b
        case 66:

            // z
        case 90:

            // p
        case 80:
            focusElement.value = e.key
            break;
            // we got z
            // we got g
            // we got p
            // we got b
            // we got pya
            // we got pyu
            // we got pyo?
            // we also have ji man
    }
}



export function createQuizPage() {
    // u must remove the input tester body
    const bodySection = document.querySelector(".bodySection");
    const inputTester = bodySection.querySelector(".input-tester");
    bodySection.removeChild(inputTester)

    const footerSection = document.querySelector("#footer-section");
    const body = document.querySelector(".bodySection");
    if (footerSection) body.removeChild(footerSection)

    // change background
    let background = document.querySelector('#background');
    background.style.backgroundImage = "url(./svgs/Background_Quiz.svg)";
    background.removeChild(document.querySelector("#header"));

    // sets the top part of the quiz page 
    let topQuiz = document.createElement('div');
    topQuiz.setAttribute('id', 'topQuiz')

    let home = document.createElement('button');
    home.setAttribute('id', 'homeButton');
    home.innerText = "home"
    topQuiz.append(home)

    let form = document.createElement('span');
    form.setAttribute('id', 'formTitle');
    form.innerHTML = "{Form Here}"
    topQuiz.append(form)

    let tutorial = document.createElement('button');
    tutorial.setAttribute('id', 'tutorialButton');
    tutorial.innerText = "tutorial"
    topQuiz.append(tutorial)
    bodySection.append(topQuiz)

    // add in the target value
    let mainBlock = document.createElement('div');
    mainBlock.setAttribute('id', 'mainBlock');

    // add in remaining amount
    let remaining = document.createElement('div');
    remaining.setAttribute('id', 'remainingQuestions');
    remaining.innerHTML = `remaining / total`

    mainBlock.append(remaining);

    let centerBlock = document.createElement('div');
    centerBlock.setAttribute('id', 'centerBlock');

    let superScript = document.createElement('span');
    superScript.setAttribute('id', 'superScript');
    superScript.innerHTML = "た"
    centerBlock.append(superScript);

    let kanjiBlock = document.createElement('span');
    kanjiBlock.setAttribute('id', 'kanjiBlock');
    kanjiBlock.innerHTML = "食べる"
    centerBlock.append(kanjiBlock);
    // centerBlock.style.width = `${kanjiBlock.innerHTML.length*20}px`
    mainBlock.append(centerBlock);

    let translated = document.createElement('span');
    translated.setAttribute('id', 'translated');
    translated.innerHTML = "v. to eat"
    mainBlock.append(translated);

    bodySection.append(mainBlock)

    // add in the user value inputs 
    let inputContainer = document.createElement('div');
    inputContainer.setAttribute('id', 'containerInputBox');

    let inputBox = document.createElement('div');
    inputBox.setAttribute('id', 'inputBox');

    inputContainer.append(inputBox);


    let clearButton = document.createElement('button');
    clearButton.setAttribute('id', 'clearButton');
    clearButton.innerText = "clear"
    clearButton.addEventListener('click', clearValues)
    inputBox.append(clearButton)


    let listOfTiles = ["た", "べ", "ま", "す"]


    for (let i = 0; i < listOfTiles.length; i++) {
        inputBox.append(createInputTiles(listOfTiles[i]))
    }

    inputContainer.append(inputBox)

    bodySection.append(inputContainer)

    // now we need the input button-y section

    let instruction = document.createElement('span')
    instruction.setAttribute('id', 'instruction')
    instruction.innerHTML = "type or select from below"
    bodySection.append(instruction)

    // set the special characters

    let specialCharacters = document.createElement('div');
    specialCharacters.setAttribute('id', 'specialCharacters');

    let specialCharactersList = ["ゃ", "ゅ", "ょ", "っ", "ー", "゛", "゜"]

    for (let i = 0; i < specialCharactersList.length; i++) {
        let specialCharacter = document.createElement('div');
        specialCharacter.setAttribute('class', 'activeTiles');
        specialCharacter.innerHTML = specialCharactersList[i]
        specialCharacters.append(specialCharacter)
    }

    bodySection.append(specialCharacters)

    // set the non-special characters
    let regularCharactersList = [
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
    let regularCharacters = document.createElement('div');
    regularCharacters.setAttribute('id', 'regularCharacters');

    regularCharactersList.forEach((column) => {
        let characterColumn = document.createElement('div');
        characterColumn.setAttribute('class', 'characterColumn');

        column.forEach((item) => {
            let regularCharacter = document.createElement('div');
            regularCharacter.setAttribute('class', item == "" ? 'emptyTiles' : 'activeTiles');
            regularCharacter.innerHTML = item
            regularCharacter.addEventListener('click', e => updateInput(e))
            characterColumn.append(regularCharacter)
        })

        regularCharacters.append(characterColumn)
    })

    bodySection.append(regularCharacters)

    // submit button

    let submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submit');
    submitButton.innerHTML = "submit"
    submitButton.addEventListener("click", submitValues)

    bodySection.append(submitButton)
}

function submitValues() {
    answerValues.push({
        word: '',
        form: '',
        answer: '',
        type: ''
    })
    console.log('answer values', answerValues)
}

function updateInput(event) {
    const target = document.getElementById(currentElement.id)
    target.value = event.target.innerHTML
}


// need to have this separate because the input tiles will be dynamically rendered each time i think
function createInputTiles(value) {
    let inputTiles = document.createElement('input');
    inputTiles.setAttribute('class', 'inputTiles');
    inputTiles.setAttribute('id', `${Math.random()}`)
    inputTiles.value = value

    inputTiles.addEventListener("click", (e) => {
        setId(e.target)
    })

    inputTiles.addEventListener("keydown", e => letterInput(e))
    return inputTiles
}


function setId(id) {
    id.setAttribute('selected', "true");

    if (currentElement) {
        let prevElement = document.getElementById(currentElement.id);
        prevElement.removeAttribute('selected');
    }

    currentElement = id;
}


function letterInput(e) {
    let focusElement = document.getElementById(currentElement.id)
    e.preventDefault()
    keysFunction(e, focusElement, setId)
}