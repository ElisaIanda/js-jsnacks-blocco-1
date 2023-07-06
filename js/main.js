const nameList = ['Mario', 'Francesco', 'Elisa', 'Elena', 'Dario', 'Andrea'];
const lastnameList = ['Bianchi', 'Verdi', 'Biondi', 'Luci', 'Bastoni', 'Ianda'];
let randomList = [];
let numberList = nameList.length;

const createBtn = document.getElementById('create');
createBtn.addEventListener("click", crea);
const removeBtn = document.getElementById('remove');
const list = document.getElementById('list');


function crea() {

    for (i = 0; i < numberList; i++) {

        let casualName = Math.floor(Math.random() * numberList);
        let casualLastname = Math.floor(Math.random() * numberList);
        let randomName = nameList[casualName];
        let randomLastname = lastnameList[casualLastname];
        randomList.push(`${randomName} ${randomLastname}`)

    }

    list.append(randomList)
    removeBtn.addEventListener("click", rimuovi);

    function rimuovi() {

        list.remove(randomList);
    }
}

