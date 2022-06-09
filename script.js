.avatar{
   width: 100%;
   height: auto;
   padding: 1em;
}

p {
   font-family: Futura;
   margin: 0!important;
   letter-spacing: 0.02em;
}

.profile-card {
   background-color: white;
   border: 1px solid rgba(0, 0, 0, 0.1);
   border-radius: 10px;
}function createEmployeeCard(employeeName, job, skills, country, avatarUrl){

let innerFlex = document.createElement("div");
innerFlex.classList.add("d-flex", "align-items-center", "col-md-7", "col-10", "m-1");

let cardDiv = document.createElement("div");
innerFlex.append(cardDiv);
cardDiv.classList.add("d-flex", "col-12", "profile-card");

let leftInfo = document.createElement("div");
leftInfo.classList.add("col-8", "py-3");

let div1 = document.createElement("div");
div1.classList.add("py-2")

let div2 = div1.cloneNode(true);
let div3 = div1.cloneNode(true);

let nameTitle = document.createElement("h4");
nameTitle.innerHTML = employeeName;

let employeeJob = document.createElement("p")
let employeeSkill = document.createElement("p")
let employeeCountry = document.createElement("p");

employeeJob.innerHTML = "Job: " + "<br>"  + job;
div1.append(employeeJob);

employeeSkill.innerHTML = "Skill: " + "<br>"  + skills;
div2.append(employeeSkill);

employeeCountry.innerHTML = "Country : " + "<br>"  + country;
div3.append(employeeCountry);

leftInfo.append(nameTitle);
leftInfo.append(div1);
leftInfo.append(div2);
leftInfo.append(div3);

let rightInfo = document.createElement("div");
let div4 = document.createElement("div");
rightInfo.classList.add("col-4", "d-flex", "justify-content-center", "align-items-center");

let avatar = document.createElement("img");
avatar.classList.add("avatar");
avatar.src = avatarUrl;

div4.append(avatar);
rightInfo.append(div4);

cardDiv.append(leftInfo);
cardDiv.append(rightInfo);

document.getElementById("profiles").append(innerFlex);
};

createEmployeeCard("Kaiden Herman", "Software Engineer", "C++, C#, Java, PHP, JavaScript, 
Python","United States", "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg");

createEmployeeCard("Elizabeth Dunn", "Accountant", "Excel, Word, Quickbooks", "England", 
"https://randomuser.me/api/portraits/women/76.jpg");

createEmployeeCard("Duan Moreno", "Teacher",  "Working with children, History, Word", "Argentina", 
"https://randomuser.me/api/portraits/med/men/93.jpg");
