function chooses(value) {
    var png = "";
    var message = "";
    var src = srcCheck();
    if (value == 1) {
        ;
        if (src == 'scene0.png') {
            png = 'scene1.png';
            message = 'Your journey begins at a fork in the road.';
        } else if (src == 'scene1.png') {
            png = 'scene2.png';
            message = 'You have arrived at a cute little house in the woods.';
        } else if (src == 'scene2.png') {
            png = 'scene4.png';
            message = "Peeking through the window, you see a witch inside the house.";
        } else if (src == 'scene3.png') {
            png = 'scene7.png';
            message = "Your stare is interrupted by the arrival of a huge troll.";
        } else if (src == 'scene4.png') {
            png = 'scene8.png';
            end();
        } else if (src == 'scene7.png') {
            png = 'scene6.png';
            message = "Sorry, you became the troll's tasty lunch.";
            end();
        }
    } else {
        if (src == 'scene0.png') {
            png = 'scene1.png';
            message = 'Your journey begins at a fork in the road.';
        } else if (src == 'scene1.png') {
            png = 'scene3.png';
            message = 'You are standing on the bridge overlooking a peaceful stream.';
        } else if (src == 'scene2.png') {
            png = 'scene5.png';
            message = "Sorry, a witch lives in the house and you just became part of her stew.";
            end();
        } else if (src == 'scene3.png') {
            png = 'scene8.png';
            end();
        } else if (src == 'scene4.png') {
            png = 'scene8.png';
            end();
        } else if (src == 'scene7.png') {
            png = 'scene8.png';
            end();
        }
    }
    document.getElementById('kep').src = png;
    if (message != "") {
        alert(message);
    }
}