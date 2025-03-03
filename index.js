function introduction(name = "Aki") {
    return (`Hi, my name is ${name}.`)
}
console.log(`Hi, my name is ${name}.`);

function introductionWithLanguage (name = "Gracie", language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name = "Gracie", language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}