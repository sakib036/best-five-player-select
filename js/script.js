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