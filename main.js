/*--------------
    FUNCTION
--------------*/
function memberPrint (printLocation, arrayOrObject) {
    let member = `
    <div class="team-card">
        <div class="card-image">
            <img
                src="${arrayOrObject.memberPicture}"
                alt="${arrayOrObject.memberName}"
            />
        </div>
        <div class="card-text">
            <h3>${arrayOrObject.memberName}</h3>
            <p>${arrayOrObject.memberDuty}</p>
        </div>
    </div>
    `
    printLocation.innerHTML += member;
}

/*--------------
    MAIN
--------------*/
//Creo un array di oggetti per i dati dei membri
const members = [
    {
        memberName: "Wayne Barnett",
        memberDuty: "Founder & CEO",
        memberPicture: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        memberName: "Angela Caroll",
        memberDuty: "Chief Editor",
        memberPicture: "img/angela-caroll-chief-editor.jpg"
    },
    {
        memberName: "Walter Gordon",
        memberDuty: "Office Manager",
        memberPicture: "img/walter-gordon-office-manager.jpg"
    },
    {
        memberName: "Angela Lopez",
        memberDuty: "Social Media Manager",
        memberPicture: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        memberName: "Scott Estrada",
        memberDuty: "Developer",
        memberPicture: "img/scott-estrada-developer.jpg"
    },
    {
        memberName: "Barbara Ramos",
        memberDuty: "Graphic Designer",
        memberPicture: "img/barbara-ramos-graphic-designer.jpg"
    }
]

//All'apertura della pagina i dati nell'array vengono inseriti nel DOM
const container = document.querySelector(".team-container");
for (let i = 0; i < members.length; i++){
    memberPrint(container, members[i])
}




const addMemberButton = document.getElementById("addMemberButton")

//Al click del bottone "aggiungi" verrà creata un nuova card con i dati inseriti dall'utente
addMemberButton.addEventListener(`click`,
    function() {
        const name = document.getElementById("name")
        const role = document.getElementById("role")
        const img = document.getElementById("image")
        //Controllare che abbia inserito correttamente tutti i dati
        if (name.value != "" && role.value != "" && img.value != "") {
            const newMember =
                {
                    memberName: name.value,
                    memberDuty: role.value,
                    memberPicture: img.value
                }
            //Utilizzo la funzione per stampare la nuova card 
            memberPrint(container, newMember)
            //Inserisco l'oggetto nell'array principale
            members.push(newMember)
        }
    }
)