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
for (let i = 0; i < members.length; i++) {
    let member = `
    <div class="team-card">
        <div class="card-image">
            <img
                src="${members[i].memberPicture}"
                alt="${members[i].memberName}"
            />
        </div>
        <div class="card-text">
            <h3>${members[i].memberName}</h3>
            <p>${members[i].memberDuty}</p>
        </div>
    </div>
  `
    container.innerHTML += member;
};



const addMemberButton = document.getElementById("addMemberButton")

//Al click del bottone "aggiungi" verrà creata un nuova card con i dati inseriti dall'utente
addMemberButton.addEventListener(`click`,
    function() {
        const name = document.getElementById("name")
        const role = document.getElementById("role")
        const img = document.getElementById("image")
        //Controllare che abbia inserito correttamente tutti i dati
        if (name.value != "" && role.value != "" && img.value != "") {
            members.push(
                {
                    memberName: name.value,
                    memberDuty: role.value,
                    memberPicture: img.value
                }
            )
            console.log(members)
        }
        //Aggiungere i dati in una nuova card
        let newMember = `
        <div class="team-card">
            <div class="card-image">
                <img
                    src="${members.pop().memberPicture}"
                    alt="${members.pop().memberName}"
                />
            </div>
            <div class="card-text">
                <h3>${members.pop().memberName}</h3>
                <p>${members.pop().memberDuty}</p>
            </div>
        </div>
        `
        container.innerHTML += newMember;
    }
)