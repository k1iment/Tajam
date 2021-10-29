document.addEventListener('DOMContentLoaded', function() {
    function clickCounter() {
        i = 0;
        return function() {
            return i++;
        }
    }

    const counter  = clickCounter();

    console.log(counter);
    console.log(counter);
    console.log(counter);
    console.log(counter);
})