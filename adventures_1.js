function choose1() {
    var src = srcCheck();
    if (src == 'scene0.png') {
        document.getElementById('kep').src = 'scene1.png';
        alert('Your journey begins at a fork in the road.')
    }
    else if(src == 'scene1.png' ){
        document.getElementById('kep').src = 'scene2.png';
        alert('You have arrived at a cute little house in the woods.')
    }
    else if(src == 'scene2.png' ){
        document.getElementById('kep').src = 'scene4.png';
    }
    else if(src == 'scene3.png' ){
        document.getElementById('kep').src = 'scene7.png';
    }
    else if(src == 'scene4.png' ){
        document.getElementById('kep').src = 'scene8.png';
    }
    else if(src == 'scene7.png' ){
        document.getElementById('kep').src = 'scene6.png';
    }
}

function choose2() {
    var src = srcCheck();
    if (src == 'scene0.png') {
        document.getElementById('kep').src = 'scene1.png';
        alert('Your journey begins at a fork in the road.')
    }
    else if(src == 'scene1.png' ){
        document.getElementById('kep').src = 'scene3.png';
        alert('You are standing on the bridge overlooking a peaceful stream.')
    }
    else if(src == 'scene2.png' ){
        document.getElementById('kep').src = 'scene5.png';
    }
    else if(src == 'scene3.png' ){
        document.getElementById('kep').src = 'scene8.png';
    }
    else if(src == 'scene4.png' ){
        document.getElementById('kep').src = 'scene8.png';
    }
    else if(src == 'scene7.png' ){
        document.getElementById('kep').src = 'scene8.png';
    }
}

function resizeRock() {
    var rockWindowHeight = document.body.clientHeight;
    var rockSizeHeight = (rockWindowHeight - 100) * 0.9;
    document.getElementById('kep').style.height = rockSizeHeight;
}

function srcCheck() {
    var kep = document.getElementById('kep').src;
    kep = kep.split('/');
    var src = kep[kep.length - 1];
    return src;
}