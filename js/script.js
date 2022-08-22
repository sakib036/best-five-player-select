// Top right side navber in main section
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
    else{
        alert('You Can Not Select More than five')
    } 
}
// get input value in input  field
function getTheValueOfInput(inptId){
    const getInputValueById=document.getElementById(inptId);
        const getInputValueByIdString=getInputValueById.value;
            const getInputValue=parseInt(getInputValueByIdString);
           return (getInputValue); 
          
}
// set the value in target place
function innerTextByID(innerTextId, value){
    const innerTextValueByID=document.getElementById(innerTextId);
    const innerTextValueByIDString=innerTextValueByID.innerText;
    const innerTexValue=parseInt(innerTextValueByIDString);
    innerTextValueByID.innerText=value;
    return (value);
}
document.getElementById('btn-calculate').addEventListener('click',function(){
    const getPlayerAmount=getTheValueOfInput('player-amount');
    if(getPlayerAmount>=0){
        const playerSelect=document.getElementById('selecct-player')
        const nomberOfPlayer=playerSelect.children.length;
        if(nomberOfPlayer>0){
            const totalPlayerAmount=getPlayerAmount*nomberOfPlayer;
            const totalPlayerExpenceValue=innerTextByID('player-expence',totalPlayerAmount);
        }
        else{
            alert('Please Select a Player') ;
        }
    } 
    else{
        alert('Please Enter a correct Number');
    }
    


})
document.getElementById('btn-total').addEventListener('click',function(){
    const managerExpence=getTheValueOfInput('manager-expence');
    const coachExpence=getTheValueOfInput('coach-expence');
    if(managerExpence>=0 && coachExpence>=0){
        const valeOfPlayerExpence=document.getElementById('player-expence');
        const valeOfPlayerExpenceString=valeOfPlayerExpence.innerText;
        const totalPlayerExpence=parseInt(valeOfPlayerExpenceString);
        if(totalPlayerExpence>0){
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