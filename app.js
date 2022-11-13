var btnTranslate= document.querySelector("#btn-translate") ;
var txtArea= document.querySelector("#txt-area");
var outputDiv= document.querySelector("#output");
var serverURL= "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text){
    return serverURL+"?"+"text="+text;
}

function clickHandler(){
    var inputTxt= txtArea.value;

     fetch(getTranslationURL(inputTxt))
        .then(response => (response.json()))
        .then (json =>{
            var translatedText= (json.contents.translated);
            outputDiv.innerText = translatedText;

            });
}





btnTranslate.addEventListener ("click", clickHandler)
