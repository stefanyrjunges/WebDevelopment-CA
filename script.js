function spaceButton() {
    var header = document.getElementsByClassName("header")[0];
    var isMarginTopSet = false

    document.getElementById("buttonNav").addEventListener('click', function(){
        
        if(isMarginTopSet == true){
            header.style.marginTop = "40px"
        } else {
            header.style.marginTop = "200px"
        }

        isMarginTopSet = !isMarginTopSet;
    })
}

spaceButton()
