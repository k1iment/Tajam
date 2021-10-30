document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('#load-btn');

    let integer = 0;

    btn.addEventListener('click', function(){
        integer+=1;
        
        let sheet = document.querySelectorAll('.project-pictures-container');

        sheet.forEach(function(i){
            let number = i.getAttribute("data-target")
            
            let finalNumber = parseInt(number);
            
            if (finalNumber===integer) {
                i.classList.remove('none-1')
            }
            if (integer>2) {
                return integer = 0;
            }
        })

        document.querySelector("#hide-btn").classList.remove("none")
    })

    let hide_btn = document.querySelector("#hide-btn");

    let second_integer = 0;

    hide_btn.addEventListener('click', function(){
        second_integer+=1;
        
        let sheet = document.querySelectorAll('.project-pictures-container');

        sheet.forEach(function(i){
            let number = i.getAttribute("data-path")
            
            let finalNumber = parseInt(number);
            
            if (finalNumber != 3) {
                i.classList.add('none-1')
            }
        })
    })

})