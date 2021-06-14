let sc = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let sv = '';
for (i of buttons) {
    i.addEventListener('click', (e) => {
        bt = e.target.innerText;
        if (bt == 'X') {
            bt = '*';
            sv += bt;
            sc.value = sv;
        }
        else if (bt == 'AC') {
            sv = "";
            sc.value = sv;
        }
        else if(bt=='C'){
            sv="";
            sc.value=sv;
        }
        else if (bt == '=') {
            sc.value = eval(sv);
            sv=sc.value;
        }
        else {
            sv += bt;
            sc.value = sv;
        }

    })
}
