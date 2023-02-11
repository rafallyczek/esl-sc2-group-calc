const showButton = document.querySelector(".show");
const content = document.querySelector(".content");
const tableContainers = document.querySelectorAll(".tableContainer");
const matchesContainers = document.querySelectorAll(".matchesContainer");
const resetButton = document.querySelector(".reset");
const showHideMatches = document.querySelectorAll(".showHide");
const numberOfPlayers = 6;
const numberOfGroups = 4;
/*
[0] - winner
[1] - loser
[2] - won maps
[3] - lost maps
*/
let matchResult = [];

let keys = ["vs0","vs1","vs2","vs3","vs4","vs5"];
let groupId;

//Table containing results from certain groups. Last 6 properties indicate map wins vs certain players
let results = [
    [
        {id: 0, name: "RagnaroK", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 1, name: "Dark", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 2, name: "Oliveira", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 3, name: "Neeb", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 4, name: "Cure", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 5, name: "Clem", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}
    ],
    [
        {id: 0, name: "Reynor", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 1, name: "GuMiho", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 2, name: "Creator", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 3, name: "Spirit", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 4, name: "ShoWTimE", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 5, name: "Astrea", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}
    ],
    [
        {id: 0, name: "Serral", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 1, name: "herO", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 2, name: "SpeCial", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 3, name: "Solar", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 4, name: "DRG", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 5, name: "Elazer", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}
    ],
    [
        {id: 0, name: "Maru", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 1, name: "HeRoMaRinE", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 2, name: "ByuN", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 3, name: "Classic", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 4, name: "Lambo", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 5, name: "Bunny", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}
    ]
];

showButton.addEventListener("click",function(){

    this.style.display = "none";
    content.style.display = "flex";
    resetButton.style.display = "block";
    for(let i=0;i<numberOfGroups;i++){
        groupId = i;
        displayTable();
        displayMatches();
    }

    const playerSelects = document.querySelectorAll(".playerSelect");
    const scoreSelects = document.querySelectorAll(".scoreSelect");

    playerSelects.forEach(playerSelect => playerSelect.addEventListener("change",function(){
        matchResult[0] = +this.value.split(" ")[0];
        matchResult[1] = +this.value.split(" ")[1];
        this.style.backgroundColor = "lightgreen";
        this.disabled = "true";
        this.nextElementSibling.removeAttribute("disabled");
    }));

    scoreSelects.forEach(scoreSelect => scoreSelect.addEventListener("change",function(){
        matchResult[2] = +this.value.split(" ")[0];
        matchResult[3] = +this.value.split(" ")[1];
        this.disabled = "true";
        update(matchResult,+this.value.split(" ")[2]);
    }));

    showHideMatches.forEach(showHide => showHide.addEventListener("click",function(){
        let isVisible = window.getComputedStyle(this.nextElementSibling).display=="none" ? false : true;
        if(isVisible){
            this.nextElementSibling.style.display = "none";
            this.textContent = "Show";
        }else{
            this.nextElementSibling.style.display = "flex";
            this.textContent = "Hide";
        }
    }));

    resetButton.addEventListener("click",function(){
        location.reload();
    });
    
});

function displayTable(){

    let sorted = results[groupId].slice();

    sorted.sort(sortPlayers);
    
    let tableRow;

    for(let i=0;i<numberOfPlayers;i++){
        if(i==0){
            tableRow = createTableRow(sorted[i],"#ddf4dd");
        }else if(i<3){
            tableRow = createTableRow(sorted[i],"#e5f4c6");
        }else{
            tableRow = createTableRow(sorted[i],"#fbdfdf");
        }
        tableContainers[groupId].appendChild(tableRow);
    }

}

function displayMatches(){

    let matchRow;

    for(let i=0;i<numberOfPlayers-1;i++){
        for(let j=i+1;j<numberOfPlayers;j++){
            matchRow = createMatchRow(i,j);
            matchesContainers[groupId].appendChild(matchRow);
        }
    }

}

function sortPlayers(a,b){

    let aMapsWonVsB = results[groupId][b.id][keys[a.id]];
    let bMapsWonVsA = results[groupId][a.id][keys[b.id]];
    let aPoints = Math.floor(aMapsWonVsB/2)*3;
    let bPoints = Math.floor(bMapsWonVsA/2)*3;
    let aBalance = aMapsWonVsB - bMapsWonVsA;
    let bBalance = bMapsWonVsA - aMapsWonVsB;

    if(b.points-a.points!=0){
        return b.points-a.points
    }else if(b.balance-a.balance!=0){
        return b.balance-a.balance;
    }else if(b.wins-a.wins!=0){
        return b.wins-a.wins;
    }else if(bPoints-aPoints!=0){
        return bPoints-aPoints;
    }else if(bBalance-aBalance!=0){
        return bBalance-aBalance;
    }else{
        return bMapsWonVsA-aMapsWonVsB;
    }

}

function createTableRow(playerData,color){

    const tableRow = document.createElement("div");

    const nameDiv = document.createElement("div");
    nameDiv.textContent = playerData.name;
    nameDiv.style.backgroundColor = color;

    let wins = 0;

    for(let i=0;i<6;i++){
        if(i==playerData.id){
            continue;
        }else{
            wins+=Math.floor(playerData[keys[i]]/2);
        }
    }

    let loses = playerData.played - wins;

    const matchScoreDiv = document.createElement("div");
    matchScoreDiv.textContent = `${wins}-${loses}`;
    matchScoreDiv.style.backgroundColor = color;
    matchScoreDiv.style.fontWeight = "bold";

    const mapScoreDiv = document.createElement("div");
    mapScoreDiv.textContent = `${playerData.wins}-${playerData.loses}`;
    mapScoreDiv.style.backgroundColor = color;

    const balanceDiv = document.createElement("div");
    if(playerData.balance>0){
        balanceDiv.textContent = "+" + playerData.balance;
    }else{
        balanceDiv.textContent = playerData.balance;
    }
    balanceDiv.style.backgroundColor = color;

    tableRow.appendChild(nameDiv);
    tableRow.appendChild(matchScoreDiv);
    tableRow.appendChild(mapScoreDiv);
    tableRow.appendChild(balanceDiv);
    tableRow.classList.add("tableRow");
    return tableRow;

}

function createMatchRow(player1,player2){

    const matchRow = document.createElement("div");
    matchRow.classList.add("match");

    const matchupDiv = document.createElement("div");
    matchupDiv.textContent = `${results[groupId][player1].name} vs ${results[groupId][player2].name}`;
    matchupDiv.classList.add("matchup");

    const playerSelect = document.createElement("select");
    playerSelect.classList.add("playerSelect");

    let option1 = document.createElement("option");
    option1.textContent = "Select winner";
    option1.value = "";
    option1.selected = "true";
    option1.disabled = "true";

    let option2 = document.createElement("option");
    option2.textContent = results[groupId][player1].name;
    option2.value = `${results[groupId][player1].id} ${results[groupId][player2].id}`;

    let option3 = document.createElement("option");
    option3.textContent = results[groupId][player2].name;
    option3.value = `${results[groupId][player2].id} ${results[groupId][player1].id}`;

    playerSelect.appendChild(option1);
    playerSelect.appendChild(option2);
    playerSelect.appendChild(option3);

    const scoreSelect = document.createElement("select");
    scoreSelect.classList.add("scoreSelect");
    scoreSelect.disabled = "true";

    option1 = document.createElement("option");
    option1.textContent = "Select score";
    option1.value = "";
    option1.selected = "true";
    option1.disabled = "true";

    option2 = document.createElement("option");
    option2.textContent = "2-0";
    option2.value = `2 0 ${groupId}`;

    option3 = document.createElement("option");
    option3.textContent = "2-1";
    option3.value = `2 1 ${groupId}`;

    scoreSelect.appendChild(option1);
    scoreSelect.appendChild(option2);
    scoreSelect.appendChild(option3);

    matchRow.appendChild(matchupDiv);
    matchRow.appendChild(playerSelect);
    matchRow.appendChild(scoreSelect);

    return matchRow;

}

function update(matchResult,id){

    //Update winners score
    results[id][matchResult[0]].points += 3;
    results[id][matchResult[0]].wins += matchResult[2];
    results[id][matchResult[0]].loses += matchResult[3];
    results[id][matchResult[0]].balance = results[id][matchResult[0]].wins - results[id][matchResult[0]].loses;
    results[id][matchResult[0]][keys[matchResult[1]]] += matchResult[2];
    results[id][matchResult[0]].played += 1;

    //Update losers score
    results[id][matchResult[1]].wins += matchResult[3];
    results[id][matchResult[1]].loses += matchResult[2];
    results[id][matchResult[1]].balance = results[id][matchResult[1]].wins - results[id][matchResult[1]].loses;
    results[id][matchResult[1]].played += 1;

    for(let i=0;i<6;i++){
        tableContainers[id].removeChild(tableContainers[id].lastElementChild);
    }
    groupId = id;
    displayTable();

}