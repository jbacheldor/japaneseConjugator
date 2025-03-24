export function createResultsPage() {
    // need a clear page function

    const bodySection = document.querySelector(".bodySection");
    const inputTester = bodySection.querySelector(".input-tester");
    bodySection.removeChild(inputTester)

    const submit = bodySection.querySelector("#submit");
    bodySection.removeChild(submit)

    const footerSection = document.querySelector("#footerSection");
    const body = document.querySelector(".bodySection");
    if (footerSection) body.removeChild(footerSection)

    // need a scrollable box
    let resultsBox = document.createElement('div')
        // resultsBox.setAttribute('id', 'resultsBox');
    resultsBox.setAttribute('class', 'input-tester');

    let resultsHeader = document.createElement('span')
    resultsHeader.setAttribute('id', 'results-Header')
    resultsHeader.innerHTML = "Results"
    resultsBox.append(resultsHeader)

    let hrDiv = document.createElement('hr')
    resultsBox.append(hrDiv)


    let starContainer = document.createElement('div')
    starContainer.setAttribute('id', 'starContainer');

    for (let i = 0; i < 5; i++) {
        let star = document.createElement('div')
        star.setAttribute('class', 'star');
        starContainer.append(star)
    }

    resultsBox.append(starContainer)

    //  can we do this where we just keep calling it??
    resultsBox.append(hrDiv)


    // then we need break down of adjectives vs verbs

    let typeBox = document.createElement('div')
    typeBox.setAttribute('class', 'typeBox');

    // for each type (so only two - iterate through this situation)
    for (let i = 0; i < 2; i++) {
        let formBox = document.createElement('div')
        formBox.setAttribute('class', 'formBox');

        let formTitle = document.createElement('span')
        formTitle.setAttribute('class', 'formTitle')

        formTitle.innerHTML = "form here girl"

        formBox.append(formTitle);

        let formMetricBox = document.createElement('div');
        formMetricBox.setAttribute('class', 'formMetricBox')

        formBox.append(formMetricBox);

        let formPercentage = document.createElement('span');
        formPercentage.setAttribute('class', 'form-percentage')
        formPercentage.innerHTML = "72%"

        formBox.append(formPercentage);

        typeBox.append(formBox);
    }

    resultsBox.append(hrDiv)

    // i fear i will need d3 for this

    let genkiHeaders = document.createElement('span')
    genkiHeaders.setAttribute('id', 'genkiHeaders')
    resultsBox.append(genkiHeaders)


    resultsBox.append(hrDiv)


    let formsHeader = document.createElement('span')
    formsHeader.setAttribute('id', 'formsHeader')
    resultsBox.append(formsHeader)


    // for each form (so only two - iterate through this situation)
    for (let i = 0; i < 2; i++) {
        let formBox = document.createElement('div')
        formBox.setAttribute('class', 'formBox');

        let formTitle = document.createElement('span')
        formTitle.setAttribute('class', 'formTitle')

        formTitle.innerHTML = "form here girl"

        formBox.append(formTitle);

        let formMetricBox = document.createElement('div');
        formMetricBox.setAttribute('class', 'formMetricBox')

        formBox.append(formMetricBox);

        let formPercentage = document.createElement('span');
        formPercentage.setAttribute('class', 'form-percentage')
        formPercentage.innerHTML = "72%"

        formBox.append(formPercentage);

        typeBox.append(formBox);
    }

    bodySection.append(resultsBox)
}