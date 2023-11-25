let buttons = document.querySelectorAll('button');
let string = "";
for (let button of buttons) {
    button.addEventListener('click', (e)=> {
        let num = e.target.innerHTML;
        button.style.opacity = 0.8;
        setTimeout(()=>{
            button.style.opacity = 1;
        },500)
        console.log(num);
        if (num == "=") {
            string = eval(string);
            document.querySelector('input').value = string;

        } else if (num == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        } else{
            string = string + num;
            document.querySelector('input').value = string;
        }
    })
}