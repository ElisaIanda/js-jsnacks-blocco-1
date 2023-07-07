const listaCognomi = ['Mario', 'Francesco', 'Elisa', 'Dario', 'Andrea', 'Sofia', 'Maria', 'Ercole', 'Pino', ];
const listaNome = ['Bianchi', 'Verdi', 'Biondi', 'Luci', 'Bastoni', 'Ianda'];

const listaInvitati = [];

for (let i = 0; i < 30; i++){


    const indiceCognome = Math.floor(Math.random() * listaCognomi.length);
    const indiceNome = Math.floor(Math.random() * listaNome.length);

    // const nuovoNome = listaCognomi[indiceCognome] + " " + listaNome[indiceNome];
    const nuovoNome = [listaCognomi[indiceCognome], listaNome[indiceNome]];

    // Non fa ripertere i nomi
    if(listaInvitati.indexOf(nuovoNome.join(" ")) >= 0){
        i--;
    }else{
        listaInvitati.push(nuovoNome.join(" "));
    }

    listaInvitati.push(nuovoNome.join(" "));
}
console.log(listaInvitati)
// let randomList = [];
// let numberList = nameList.length;

// const createBtn = document.getElementById('create');
// createBtn.addEventListener("click", crea);
// const removeBtn = document.getElementById('remove');
// const list = document.getElementById('list');


// function crea() {

//     for (i = 0; i < numberList; i++) {

//         let casualName = Math.floor(Math.random() * numberList);
//         let casualLastname = Math.floor(Math.random() * numberList);
//         let randomName = nameList[casualName];
//         let randomLastname = lastnameList[casualLastname];
//         randomList.push(`${randomName} ${randomLastname}`)

//     }

//     list.append(randomList)
//     removeBtn.addEventListener("click", rimuovi);

//     function rimuovi() {

//         list.remove(randomList);
//     }
// }

