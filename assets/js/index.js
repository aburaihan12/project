
function changeBg(){
    var bgChange = document.getElementById('bgChange');
    var scrollvalue = window.scrollY;
    
    if(scrollvalue < 150){
        bgChange.classList.remove('bgcolor');
    }else{
        bgChange.classList.add('bgcolor');
    }

}

window.addEventListener('scroll' , changeBg);