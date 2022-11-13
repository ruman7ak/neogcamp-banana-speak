var btnTranslate= document.querySelector("#btn-translate") ;
var txtArea= document.querySelector("#txt-area");
var outputDiv= document.querySelector("#output");




btnTranslate.addEventListener ("click", function addEventHandler(){
    outputDiv.innerText= ("djjdjd"+txtArea.value);
})

