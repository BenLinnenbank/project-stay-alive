const div1 = document.querySelector('#div-one');
const div2 = document.querySelector('#div-two');

document.onkeydown = detectKey;



function detectKey(e) {
    setInterval(() => {
    //This "if" statement detects collision of the two objects.
    if(div1.getBoundingClientRect().right >= div2.getBoundingClientRect().left && div1.getBoundingClientRect().top >= div1.getBoundingClientRect().bottom){
    alert("You just bumped into an alien!!!")
    }}, 1);
    
    
    const posLeft = document.getElementById('div-one').offsetLeft;
    const posTop = document.getElementById('div-one').offsetTop;

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        // const spaceManPosition = div1.getBoundingClientRect();
        // const alien = div2.getBoundingClientRect();
        // if (spaceManPosition.left > alien.left || spaceManPosition.left === alien.left) {
        //     alert('bumped into an alien');
        // }
        document.getElementById('div-one').style.top  = (posTop-58)+"px";
        // console.log(spaceManPosition);
        // console.log(alien);
    }
    else if (e.keyCode == '40') {
        // down arrow
        // const spaceManPosition = div1.getBoundingClientRect();
        // const alien = div2.getBoundingClientRect();
        // if (spaceManPosition.left >= alien.left || spaceManPosition.left === alien.left) {
        //     alert('bumped into an alien');
        // }
        document.getElementById('div-one').style.top  = (posTop+58)+"px";
        // console.log(spaceManPosition.left);
        // console.log(alien.left);
    }
    else if (e.keyCode == '37') {
       // left arrow
    //    const spaceManPosition = div1.getBoundingClientRect();
    //    const alien = div2.getBoundingClientRect();
    //    if (spaceManPosition.left >= alien.left || spaceManPosition.left === alien.left) {
    //        alert('bumped into an alien');
    //    }
        document.getElementById('div-one').style.left  = (posLeft-58)+"px";
        // console.log(spaceManPosition);
        // console.log(alien);
    }
    else if (e.keyCode == '39') {
       // right arrow
    //    const spaceManPosition = div1.getBoundingClientRect();
    //    const alien = div2.getBoundingClientRect();
    //    if (spaceManPosition.left >= alien.left || spaceManPosition.left === alien.left) {
    //        alert('bumped into an alien');
    //    }
        document.getElementById('div-one').style.left  = (posLeft+58)+"px";
        // console.log(spaceManPosition);
        // console.log(alien);
    }
}