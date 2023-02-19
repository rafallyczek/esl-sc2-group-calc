const NO_WINNER = -1;
const showButton = document.querySelector(".show");
const content = document.querySelector(".content");
const tableContainers = document.querySelectorAll(".tableContainer");
const matchesContainers = document.querySelectorAll(".matchesContainer");
const resetButton = document.querySelector(".reset");
const showHideMatches = document.querySelectorAll(".showHide");
const numberOfPlayers = 6;
const numberOfMatches = (numberOfPlayers*(numberOfPlayers-1))/2;
const numberOfGroups = 4;
/*
[0] - winner
[1] - loser
[2] - won maps
[3] - lost maps
*/
let matchResult = [-1, 0, 0];

let keys = ["vs0","vs1","vs2","vs3","vs4","vs5"];

//Array containing match results.
let matches = [
    [
        {id:0 ,player1:0,player2:1,winner:NO_WINNER,score:"0 0"},
        {id:1 ,player1:0,player2:2,winner:NO_WINNER,score:"0 0"},
        {id:2 ,player1:0,player2:3,winner:NO_WINNER,score:"0 0"},
        {id:3 ,player1:0,player2:4,winner:NO_WINNER,score:"0 0"},
        {id:4 ,player1:0,player2:5,winner:NO_WINNER,score:"0 0"},
        {id:5 ,player1:1,player2:2,winner:NO_WINNER,score:"0 0"},
        {id:6 ,player1:1,player2:3,winner:NO_WINNER,score:"0 0"},
        {id:7 ,player1:1,player2:4,winner:NO_WINNER,score:"0 0"},
        {id:8 ,player1:1,player2:5,winner:NO_WINNER,score:"0 0"},
        {id:9 ,player1:2,player2:3,winner:NO_WINNER,score:"0 0"},
        {id:10,player1:2,player2:4,winner:NO_WINNER,score:"0 0"},
        {id:11,player1:2,player2:5,winner:NO_WINNER,score:"0 0"},
        {id:12,player1:3,player2:4,winner:NO_WINNER,score:"0 0"},
        {id:13,player1:3,player2:5,winner:NO_WINNER,score:"0 0"},
        {id:14,player1:4,player2:5,winner:NO_WINNER,score:"0 0"}
    ],
    [
        {id:0 ,player1:0,player2:1,winner:NO_WINNER,score:"0 0"},
        {id:1 ,player1:0,player2:2,winner:NO_WINNER,score:"0 0"},
        {id:2 ,player1:0,player2:3,winner:NO_WINNER,score:"0 0"},
        {id:3 ,player1:0,player2:4,winner:NO_WINNER,score:"0 0"},
        {id:4 ,player1:0,player2:5,winner:NO_WINNER,score:"0 0"},
        {id:5 ,player1:1,player2:2,winner:NO_WINNER,score:"0 0"},
        {id:6 ,player1:1,player2:3,winner:NO_WINNER,score:"0 0"},
        {id:7 ,player1:1,player2:4,winner:NO_WINNER,score:"0 0"},
        {id:8 ,player1:1,player2:5,winner:NO_WINNER,score:"0 0"},
        {id:9 ,player1:2,player2:3,winner:NO_WINNER,score:"0 0"},
        {id:10,player1:2,player2:4,winner:NO_WINNER,score:"0 0"},
        {id:11,player1:2,player2:5,winner:NO_WINNER,score:"0 0"},
        {id:12,player1:3,player2:4,winner:NO_WINNER,score:"0 0"},
        {id:13,player1:3,player2:5,winner:NO_WINNER,score:"0 0"},
        {id:14,player1:4,player2:5,winner:NO_WINNER,score:"0 0"}
    ],
    [
        {id:0 ,player1:0,player2:1,winner:NO_WINNER,score:"0 0"},
        {id:1 ,player1:0,player2:2,winner:NO_WINNER,score:"0 0"},
        {id:2 ,player1:0,player2:3,winner:NO_WINNER,score:"0 0"},
        {id:3 ,player1:0,player2:4,winner:NO_WINNER,score:"0 0"},
        {id:4 ,player1:0,player2:5,winner:NO_WINNER,score:"0 0"},
        {id:5 ,player1:1,player2:2,winner:NO_WINNER,score:"0 0"},
        {id:6 ,player1:1,player2:3,winner:NO_WINNER,score:"0 0"},
        {id:7 ,player1:1,player2:4,winner:NO_WINNER,score:"0 0"},
        {id:8 ,player1:1,player2:5,winner:NO_WINNER,score:"0 0"},
        {id:9 ,player1:2,player2:3,winner:NO_WINNER,score:"0 0"},
        {id:10,player1:2,player2:4,winner:NO_WINNER,score:"0 0"},
        {id:11,player1:2,player2:5,winner:NO_WINNER,score:"0 0"},
        {id:12,player1:3,player2:4,winner:NO_WINNER,score:"0 0"},
        {id:13,player1:3,player2:5,winner:NO_WINNER,score:"0 0"},
        {id:14,player1:4,player2:5,winner:NO_WINNER,score:"0 0"}
    ],
    [
        {id:0 ,player1:0,player2:1,winner:NO_WINNER,score:"0 0"},
        {id:1 ,player1:0,player2:2,winner:NO_WINNER,score:"0 0"},
        {id:2 ,player1:0,player2:3,winner:NO_WINNER,score:"0 0"},
        {id:3 ,player1:0,player2:4,winner:NO_WINNER,score:"0 0"},
        {id:4 ,player1:0,player2:5,winner:NO_WINNER,score:"0 0"},
        {id:5 ,player1:1,player2:2,winner:NO_WINNER,score:"0 0"},
        {id:6 ,player1:1,player2:3,winner:NO_WINNER,score:"0 0"},
        {id:7 ,player1:1,player2:4,winner:NO_WINNER,score:"0 0"},
        {id:8 ,player1:1,player2:5,winner:NO_WINNER,score:"0 0"},
        {id:9 ,player1:2,player2:3,winner:NO_WINNER,score:"0 0"},
        {id:10,player1:2,player2:4,winner:NO_WINNER,score:"0 0"},
        {id:11,player1:2,player2:5,winner:NO_WINNER,score:"0 0"},
        {id:12,player1:3,player2:4,winner:NO_WINNER,score:"0 0"},
        {id:13,player1:3,player2:5,winner:NO_WINNER,score:"0 0"},
        {id:14,player1:4,player2:5,winner:NO_WINNER,score:"0 0"}
    ]
];

//Array containing results from certain groups. Last 6 properties indicate map wins vs certain players
let players = [
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
        displayTable(i);
        displayMatches(i);
    }

    const playerSelects = document.querySelectorAll(".playerSelect");
    const scoreSelects = document.querySelectorAll(".scoreSelect");
    const applyButtons = document.querySelectorAll(".applyButton");

    playerSelects.forEach(playerSelect => playerSelect.addEventListener("change",function(){
        matchResult[0] = +this.value;
        // if(+this.value!=NO_WINNER){
        //     this.style.backgroundColor = "lightgreen";
        // }else{
        //     this.style.backgroundColor = "white";
        // }
    }));

    scoreSelects.forEach(scoreSelect => scoreSelect.addEventListener("change",function(){
        matchResult[1] = +this.value.split(" ")[0];
        matchResult[2] = +this.value.split(" ")[1];
    }));

    applyButtons.forEach(applyButton => applyButton.addEventListener("click",function(){
        updateMatches(matchResult,+this.value.split(" ")[0],+this.value.split(" ")[1]);
        updatePlayers(+this.value.split(" ")[0]);
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

function displayTable(groupId){

    let sorted = players[groupId].slice();

    sorted = sortPlayers(sorted,groupId);
    
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

function displayMatches(groupId){

    let matchRow;

    for(let i=0;i<numberOfMatches;i++){
        matchRow = createMatchRow(groupId,i);
        matchesContainers[groupId].appendChild(matchRow);
    }

}

function sortPlayers(sorted,groupId){

    sorted.sort((a,b) => {

        let aMapsWonVsB = players[groupId][b.id][keys[a.id]];
        let bMapsWonVsA = players[groupId][a.id][keys[b.id]];
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

    });

    return sorted;

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

function createMatchRow(groupId,matchId){

    let player1 = matches[groupId][matchId].player1;
    let player2 = matches[groupId][matchId].player2;;

    const matchRow = document.createElement("div");
    matchRow.classList.add("match");

    const matchupDiv = document.createElement("div");
    matchupDiv.classList.add("matchup");

    const playerDiv1 = document.createElement("div");
    playerDiv1.textContent = players[groupId][player1].name;
    playerDiv1.classList.add("playerDiv");

    const vsDiv = document.createElement("div");
    vsDiv.textContent = "vs";

    const playerDiv2 = document.createElement("div");
    playerDiv2.textContent = players[groupId][player2].name;
    playerDiv2.classList.add("playerDiv");

    matchupDiv.appendChild(playerDiv1);
    matchupDiv.appendChild(vsDiv);
    matchupDiv.appendChild(playerDiv2);

    const playerSelect = document.createElement("select");
    playerSelect.classList.add("playerSelect");

    let option1 = document.createElement("option");
    option1.textContent = "Winner";
    option1.value = "-1";
    option1.selected = "true";

    let option2 = document.createElement("option");
    option2.textContent = players[groupId][player1].name;
    option2.value = players[groupId][player1].id;

    let option3 = document.createElement("option");
    option3.textContent = players[groupId][player2].name;
    option3.value = players[groupId][player2].id;

    playerSelect.appendChild(option1);
    playerSelect.appendChild(option2);
    playerSelect.appendChild(option3);

    const scoreSelect = document.createElement("select");
    scoreSelect.classList.add("scoreSelect");

    option1 = document.createElement("option");
    option1.textContent = "Score";
    option1.value = "0 0";
    option1.selected = "true";

    option2 = document.createElement("option");
    option2.textContent = "2-0";
    option2.value = "2 0";

    option3 = document.createElement("option");
    option3.textContent = "2-1";
    option3.value = "2 1";

    scoreSelect.appendChild(option1);
    scoreSelect.appendChild(option2);
    scoreSelect.appendChild(option3);

    const applyButton = document.createElement("button");
    applyButton.classList.add("applyButton");
    applyButton.textContent = "Apply";
    applyButton.value = `${groupId} ${matchId}`;

    matchRow.appendChild(matchupDiv);
    matchRow.appendChild(playerSelect);
    matchRow.appendChild(scoreSelect);
    matchRow.appendChild(applyButton);

    return matchRow;

}

function updateMatches(matchResult,groupId,matchId){

    if((matchResult[1]==0 && matchResult[2]==0) || matchResult[0]==NO_WINNER){
        matches[groupId][matchId].winner = NO_WINNER;
    }else{
        matches[groupId][matchId].winner = matchResult[0];
        matches[groupId][matchId].score = `${matchResult[1]} ${matchResult[2]}`;
    }

}

function updatePlayers(groupId){

    resetGroup(groupId);
    let winnerId;
    let loserId;
    for(let i=0;i<numberOfMatches;i++){

        if(matches[groupId][i].winner==NO_WINNER){
            continue;
        }

        winnerId = matches[groupId][i].winner;

        if(winnerId==matches[groupId][i].player1){
            loserId = matches[groupId][i].player2;
        }else{
            loserId = matches[groupId][i].player1;
        }

        //Update winners score
        players[groupId][winnerId].points += 3;
        players[groupId][winnerId].wins += +matches[groupId][i].score.split(" ")[0];
        players[groupId][winnerId].loses += +matches[groupId][i].score.split(" ")[1];
        players[groupId][winnerId].balance = players[groupId][winnerId].wins - players[groupId][winnerId].loses;
        players[groupId][winnerId][keys[loserId]] += matches[groupId][i].score.split(" ")[0];
        players[groupId][winnerId].played += 1;

        //Update losers score
        players[groupId][loserId].wins += +matches[groupId][i].score.split(" ")[1];
        players[groupId][loserId].loses += +matches[groupId][i].score.split(" ")[0];
        players[groupId][loserId].balance = players[groupId][loserId].wins - players[groupId][loserId].loses;
        players[groupId][loserId].played += 1;
    }

    for(let i=0;i<numberOfPlayers;i++){
        tableContainers[groupId].removeChild(tableContainers[groupId].lastElementChild);
    }
    displayTable(groupId);

}

function resetGroup(groupId){

    for(let i=0;i<numberOfPlayers;i++){
        players[groupId][i].played = 0;
        players[groupId][i].wins = 0;
        players[groupId][i].loses = 0;
        players[groupId][i].balance = 0;
        players[groupId][i].points = 0;
        players[groupId][i].vs0 = 0;
        players[groupId][i].vs1 = 0;
        players[groupId][i].vs2 = 0;
        players[groupId][i].vs3 = 0;
        players[groupId][i].vs4 = 0;
        players[groupId][i].vs5 = 0;
    }

}