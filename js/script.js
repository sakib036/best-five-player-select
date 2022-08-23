// Top right side navber in main section 
// selected five
let cnt=0;
function selectPlayer(player){
    // count number
    cnt=cnt+1;
    // count number not more than 5
    if(cnt<=5){
        const playerName=player.parentNode.children[0].innerText;
        // create a paragraph
        const p=document.createElement('p');
        p.innerHTML=`${cnt}. ${playerName}`;
        const playerSelect=document.getElementById('selecct-player')
        playerSelect.appendChild(p);
        // when button click then button disable
        player.parentNode.children[2].disabled=true;
        player.parentNode.children[2].style.backgroundColor="gray";
    }
    // if more than five then worning
    else{
        alert('You Can Not Select More than five')
    } 
}
// get input value in input  field common Function
function getTheValueOfInput(inptId){
    const getInputValueById=document.getElementById(inptId);
        const getInputValueByIdString=getInputValueById.value;
        if(isNaN(getInputValueByIdString)==false){
                const getInputValue=parseInt(getInputValueByIdString);
                return (getInputValue);   
        }
        else{
            return(-1)
        }        
}
// set the value in target place common Function
function innerTextByID(innerTextId, value){
    const innerTextValueByID=document.getElementById(innerTextId);
    const innerTextValueByIDString=innerTextValueByID.innerText;
    const innerTexValue=parseInt(innerTextValueByIDString);
    innerTextValueByID.innerText=value;
    return (value);
}
// when calculator button click 
document.getElementById('btn-calculate').addEventListener('click',function(){
    const getPlayerAmount=getTheValueOfInput('player-amount');
    // if per playe amount input is a number and geter than 0 then
    if(getPlayerAmount>=0 && typeof(getPlayerAmount)==="number"){
        const playerSelect=document.getElementById('selecct-player')
        const nomberOfPlayer=playerSelect.children.length;
        // if select any player
        if(nomberOfPlayer>0){
            const totalPlayerAmount=getPlayerAmount*nomberOfPlayer;
            const totalPlayerExpenceValue=innerTextByID('player-expence',totalPlayerAmount);
        }
        // Not select any player
        else{
            alert('Please Select a Player') ;
        }
    } 
    // if per playe amount input is a string and less than 0 then
    else{
        alert('Please Enter a correct Number');
    }
    


})
document.getElementById('btn-total').addEventListener('click',function(){
    // manager input value
    const managerExpence=getTheValueOfInput('manager-expence');
    // coach input value
    const coachExpence=getTheValueOfInput('coach-expence');
    // Manager and coach input value check
    if(managerExpence>=0 && coachExpence>=0){
        // get the value of player Expence 
        const valeOfPlayerExpence=document.getElementById('player-expence');
        const valeOfPlayerExpenceString=valeOfPlayerExpence.innerText;
        const totalPlayerExpence=parseInt(valeOfPlayerExpenceString);
        if(totalPlayerExpence>0){
          // Total sum and assign value total 
            const totalExpence=managerExpence+coachExpence+totalPlayerExpence;
            const totalExpenceValue=innerTextByID('total-expence',totalExpence);
        }
        else{
            alert('Per-Player Amount Or Player Selection Empty')
        }
    }
    else{
        alert('Please Enter a correct Number');
    }
})