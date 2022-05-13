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