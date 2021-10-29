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
                i.classList.remove('none')
            }
        })
    })

})