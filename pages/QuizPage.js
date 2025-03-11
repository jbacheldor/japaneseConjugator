export function clearValues1() {
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
                    case 's':
                        focusElement.value = 'さ'
                        break;
                    case 't':
                        focusElement.value = 'た'
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
                    case 's':
                        focusElement.value = 'そ'
                        break;
                    case 't':
                        focusElement.value = 'と'
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
                    case 's':
                        focusElement.value = 'す'
                        break;
                    case 't':
                        focusElement.value = 'ち'
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
                    case 's':
                        focusElement.value = 'せ'
                        break;
                    case 't':
                        focusElement.value = 'て'
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
            if (focusElement.value.length == 0) {
                focusElement.value = 'え'
            }
            break;
            // g 
        case 71:

            // b
        case 66:

            // z
        case 90:

            // p
        case 80:

            // we got z
            // we got g
            // we got p
            // we got b
            // we got pya
            // we got pyu
            // we got pyo?
            // we also have ji man

        default:
            focusElement.value = e.key
    }
}