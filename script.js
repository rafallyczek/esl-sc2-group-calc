const NO_WINNER = -1;
const PLAYERS_PER_GROUP = 6;
const NUMBER_OF_MATCHES = (PLAYERS_PER_GROUP*(PLAYERS_PER_GROUP-1))/2;
const NUMBER_OF_GROUPS = 4;
const submit = document.querySelector(".submit");
const content = document.querySelector(".content");
const reset = document.querySelector(".reset");

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
        {id: 0, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 1, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 2, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 3, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 4, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 5, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}
    ],
    [
        {id: 0, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 1, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 2, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 3, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 4, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 5, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}
    ],
    [
        {id: 0, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 1, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 2, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 3, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 4, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 5, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}
    ],
    [
        {id: 0, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 1, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 2, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 3, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 4, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}, 
        {id: 5, name: "", played: 0, wins: 0, loses: 0, balance: 0, points: 0, vs0: 0, vs1: 0, vs2: 0, vs3: 0, vs4: 0, vs5: 0}
    ]
];

submit.addEventListener("click",function(){

    document.querySelector(".setup-header").style.display = "none";
    document.querySelector(".setup").style.display = "none";
    content.style.display = "flex";
    reset.style.display = "block";
    for(let i=0;i<NUMBER_OF_GROUPS;i++){
        populateGroups(i);
        displayGroups(i);
        displayMatches(i);
    }

    const applyButtons = document.querySelectorAll(".applyButton");
    const showHideMatches = document.querySelectorAll(".showHide");
    
    applyButtons.forEach(applyButton => applyButton.addEventListener("click",function(){
        const playerDivs = this.parentElement.querySelector(".matchup").querySelectorAll(".playerDiv");
        let scoreSelect = this.previousElementSibling;
        let playerSelect = scoreSelect.previousElementSibling;
        /*
        [0] - winner id
        [1] - won maps
        [2] - lost maps
        */
        let matchResult = [+playerSelect.value,+scoreSelect.value.split(" ")[0],+scoreSelect.value.split(" ")[1]];
        if((matchResult[1]==0 && matchResult[2]==0) || matchResult[0]==NO_WINNER){
            playerDivs.forEach(div => div.style.backgroundColor="darkgray");
        }else{
            playerDivs.forEach(div => {
                if(div.getAttribute("value")==+matchResult[0]){
                    div.style.backgroundColor="lightgreen";
                }
            });
        }
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

    reset.addEventListener("click",function(){
        location.reload();
    });

});

function populateGroups(groupId){

    let player;
    for(let i=0;i<6;i++){
        player = document.querySelector(`#group${groupId+1}-player${i+1}`);
        if(player.value==""){
            players[groupId][i].name = `Player ${i}`;
        }else{
            players[groupId][i].name = player.value;
        }
        
    }

}

function displayGroups(groupId){

    const group = document.createElement("div");
    group.classList.add("group");
    group.id = `group${groupId}`;

    const header = document.createElement("div");
    header.classList.add("header");
    header.classList.add("bg-clr-gray");
    header.classList.add("text-center");
    header.textContent = `Group ${groupId+1}`;

    const tableContainer = document.createElement("div");
    tableContainer.classList.add("tableContainer");
    tableContainer.id = `tableContainer${groupId}`;

    const showHideBar = document.createElement("div");
    showHideBar.classList.add("showHide");
    showHideBar.classList.add("bg-clr-gray");
    showHideBar.classList.add("text-center");
    showHideBar.textContent = "Show";

    const matchesContainer = document.createElement("div");
    matchesContainer.classList.add("matchesContainer");

    group.appendChild(header);
    displayPlayers(groupId,tableContainer);
    group.appendChild(tableContainer);
    group.appendChild(showHideBar);
    group.appendChild(matchesContainer);

    content.appendChild(group);

}

function displayPlayers(groupId,tableContainer){

    let sorted = players[groupId].slice();

    sorted = sortPlayers(sorted,groupId);
    
    let tableRow;

    for(let i=0;i<PLAYERS_PER_GROUP;i++){
        if(i==0){
            tableRow = createTableRow(sorted[i],"#ddf4dd");
        }else if(i<3){
            tableRow = createTableRow(sorted[i],"#e5f4c6");
        }else{
            tableRow = createTableRow(sorted[i],"#fbdfdf");
        }
        tableContainer.appendChild(tableRow);
    }

}

function displayMatches(groupId){

    const matchesContainers = document.querySelectorAll(".matchesContainer");
    let matchRow;

    for(let i=0;i<NUMBER_OF_MATCHES;i++){
        matchRow = createMatchRow(groupId,i);
        matchesContainers[groupId].appendChild(matchRow);
    }

}

function sortPlayers(sorted,groupId){

    sorted.sort((a,b) => {

        let aMapsWonVsB = players[groupId][a.id][keys[b.id]];
        let bMapsWonVsA = players[groupId][b.id][keys[a.id]];
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
    playerDiv1.setAttribute("value",player1);
    playerDiv1.classList.add("playerDiv");
    playerDiv1.classList.add("bg-clr-gray");
    playerDiv1.classList.add("text-center");

    const vsDiv = document.createElement("div");
    vsDiv.textContent = "vs";
    vsDiv.classList.add("bg-clr-gray");
    vsDiv.classList.add("text-center");

    const playerDiv2 = document.createElement("div");
    playerDiv2.textContent = players[groupId][player2].name;
    playerDiv2.setAttribute("value",player2);
    playerDiv2.classList.add("playerDiv");
    playerDiv2.classList.add("bg-clr-gray");
    playerDiv2.classList.add("text-center");
    
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
    for(let i=0;i<NUMBER_OF_MATCHES;i++){

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

    const tableContainerOld = document.querySelector(`#tableContainer${groupId}`);
    const tableContainerNew = document.createElement("div");
    tableContainerNew.classList.add("tableContainer");
    tableContainerNew.id = `tableContainer${groupId}`;

    const group = document.querySelector(`#group${groupId}`)

    displayPlayers(groupId,tableContainerNew);
    group.replaceChild(tableContainerNew,tableContainerOld);
    
}

function resetGroup(groupId){

    for(let i=0;i<PLAYERS_PER_GROUP;i++){
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