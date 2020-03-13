function choose(value) {
    debugger;
    var png = "";
    var message = "";
    var decision_1 = "";
    var decision_2 = "";
    var src = srcCheck();
    if (value == 1) {
        switch (src) {
            case('scene0.png'):
                png = 'scene1.png';
                message = 'Your journey begins at a fork in the road.';
                decision_1 = "Take the path";
                decision_2 = "Take the bridge";
                history(value, message, png);
                break;
            case('scene1.png'):
                png = 'scene2.png';
                message = 'You have arrived at a cute little house in the woods.';
                decision_1 = "Walk around back";
                decision_2 = "Knock on door";
                history(value, message, png);
                break;
            case('scene2.png'):
                png = 'scene4.png';
                message = "Peeking through the window, you see a witch inside the house.";
                decision_1 = "Sneak by window";
                decision_2 = "Wave at witch";
                history(value, message, png);
                break;
            case('scene3.png'):
                png = 'scene7.png';
                message = "Your stare is interrupted by the arrival of a huge troll.";
                decision_1 = "Say hello to troll";
                decision_2 = "Jump into stream";
                history(value, message, png);
                break;
            case('scene4.png'):
                png = 'scene8.png';
                end();
                break;
            case('scene7.png'):
                png = 'scene6.png';
                message = "Sorry, you became the troll's tasty lunch.";
                history(value, message, png);
                end();
                break;
        }
    } else {
        switch (src) {
            case('scene0.png'):
                png = 'scene1.png';
                message = 'Your journey begins at a fork in the road.';
                decision_1 = "Take the path";
                decision_2 = "Take the bridge";
                history(value, message, png);
                break;
            case('scene1.png'):
                png = 'scene3.png';
                message = 'You are standing on the bridge overlooking a peaceful stream.';
                decision_1 = "Walk across bridge";
                decision_2 = "Gaze into stream";
                history(value, message, png);
                break;
            case('scene2.png'):
                png = 'scene5.png';
                message = "Sorry, a witch lives in the house and you just became part of her stew.";
                history(value, message, png);
                end();
                break;
            case('scene3.png'):
                png = 'scene8.png';
                end();
                break;
            case('scene4.png'):
                png = 'scene8.png';
                end();
                break;
            case('scene7.png'):
                png = 'scene8.png';
                end();
                break;
        }
    }

    // if (message != "") {
    //alert(message);
    //Append:
    // document.getElementById('scenetext').innerHTML += " " + message;

    document.getElementById('kep').src = png;
    text('scenetext', message);
    text('decision1', decision_1);
    text('decision2', decision_2);
    document.getElementById('decision2').style.visibility = "visible";
    //style class kiirítás
    //alert(document.getElementById('decision1').className);
    //change style
    //document.getElementById('decision1').className = 'inverse';
    // document.getElementById('scenetext').innerHTML = message;
    // document.getElementById('decision1').innerHTML = decision_1;
    // document.getElementById('decision2').innerHTML = decision_2;

    //DOM
    // var scene = document.getElementById('scenetext');
    // while(scene.firstChild){
    //     scene.removeChild(scene.firstChild);
    // }
    // (scene.appendChild(document.createTextNode(message)));

    //childNodes: tömböt ad
    //firsChild
    //lastChild
    //nodeType pl element, text
    //nodeValue: csak sima szöveget tud, HTML elemeket nem, és csak text type-ra vagy attributumra működik
    //A DOM a szövegből több node-ot csinál a <strong> tag miatt, ezért a nodValue csak a <strong> tag-ig írja ki a szöveget.
    //Ami a <strong> után van az a <strong> childNode-ja lesz

    //sim szöveg megeresése Id vagy TagName alapján:
    //alert(document.getElementById('scenetext').childNodes[0].nodeValue);
    //alert(document.getElementById('scenetext').firstChild.nodeValue);
    //alert(document.getElementsByTagName('body')[0].childNodes[1].childNodes[4].childNodes[0].nodeValue);

    //sima szöveg módosítása, HTML elem nélkül:
    //document.getElementById('scenetext').childNodes[0].nodeValue = 'Teszt';
    //document.getElementById('scenetext').firstChild.nodeValue = 'Teszt';

    //<strong> vagy bármilyen taget tartalmazó szöveg módosítása:
    //1.remove all chiled node
    // var scene = document.getElementById('scenetext');
    // while(scene.firstChild){
    //     scene.removeChild(scene.firstChild);
    // }
    //create text node + append this new node to the scenetext div
    // scene.appendChild(document.createTextNode('Teszt'));
    //
}

// function text(id, text){
//     document.getElementById(id).innerHTML = text;
// }

function text(id, text) {
    var item = document.getElementById(id);
    while (item.firstChild) {
        item.removeChild(item.firstChild);
    }
    item.appendChild(document.createTextNode(text));
}

function end() {
    document.getElementById('gombok').style.display = "none";
    var timer = setTimeout(timeout, 5000);
}

function timeout() {
    document.getElementById('kep').src = 'scene0.png';
    document.getElementById('scenetext').innerHTML = "";
    document.getElementById('gombok').style.display = "block";
    document.getElementById('decision1').innerHTML = "Start Game";
    document.getElementById('decision2').style.visibility = "hidden";
    var history = document.getElementById('history');
    while (history.firstChild) {
        history.removeChild(history.firstChild);
    }

}

function history(value, message, png) {
    var history = document.getElementById('history');
    var item = document.createElement("p");
    item.appendChild(document.createTextNode('Decision ' + value + ' -> ' + png + ': ' + message));
    history.appendChild(item);
}