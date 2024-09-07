let area= document.getElementById("area");
area.addEventListener('input',function(){
    var text=this.value;
    let chars=text.length;

    document.getElementById("char").innerHTML=chars
    

    text=text.trim();
    let word=text.split(" ");
    let cleanText=word.filter(function(ele){
        return ele !=" "
    })
    document.getElementById("word").innerHTML=cleanText.length;



})