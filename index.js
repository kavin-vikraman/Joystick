var w = (window.innerWidth/2)*0.93;
var globallx=1500,globally=1500,globalrx=1500,globalry=1500;
var trim1x=0,trim1y=0,trim2x=0,trim2y=0;
var flag=0;
var canvas, ctx;
canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d'); 
var width, height, radius, x_orig, y_orig,vert_pos=0,hori_pos=0;
let coord = { x: 0, y: 0 };
let paint = false;
var tempr=10;
var x_relative=width/2;
var y_relative=height/2;

var canvas1, ctx1;
canvas1 = document.getElementById('canvas1');
ctx1 = canvas1.getContext('2d');
document.getElementById("x_coordinate1").innerText = globalrx+trim2x;
document.getElementById("y_coordinate1").innerText = globalry+trim2y;     
resize1(); 
var width1, height1, radius1, x_orig1, y_orig1;
let coord1 = { x1: 0, y1: 0 };
let paint1 = false;
var a = 0;
var togcol = document.getElementById("toggle");
var togg = 1200;

resize(); 
document.getElementById("x_coordinate").innerText = globallx+trim1x;
document.getElementById("y_coordinate").innerText = globally;


var goFS = document.getElementById("goFS");
goFS.addEventListener("click", toggleFullScreen, false);
function toggleFullScreen() {
window.navigator.vibrate(50);
var doc = window.document;
var docEl = doc.documentElement;
var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    goFS.style.background = "white";
    requestFullScreen.call(docEl);
}
else {
    goFS.style.background = "black";
    cancelFullScreen.call(doc);
}
}

function toggle(){
    if(togg==1200){
        togg = 1900;
        window.navigator.vibrate(50);
        togcol.style.background = "white";
    }
    else{
        togg = 1200;
        window.navigator.vibrate(50);
        togcol.style.background = "black";
    }
} 


function start_handler(e) {
    if(e.touches[0].clientX-canvas.offsetLeft < w) {
        startDrawing(e);
    }
    if((e.touches[0].clientX > window.innerWidth/2 )){
        startDrawing1(e);
    }
   }
   
   function move_handler(e) {
    if(e.touches[0].clientX-canvas.offsetLeft < w) {
        Draw(e);
    }
    if((e.touches[0].clientX > window.innerWidth/2 )) {
        Draw1(e);
    }
   }
   
   function end_handler(e) {
     if((e.touches.length==1 && e.touches[0].clientX-canvas1.offsetLeft>0) || e.touches.length==0) {
        stopDrawing(e);
    }
    if((e.touches.length==1 && e.touches[0].clientX-canvas.offsetLeft< w) || e.touches.length==0){
        stopDrawing1(e);
    }
   }

function set_handlers(name) {
    // Install event handlers for the given element
    var el=document.getElementById(name);
    el.ontouchstart = start_handler;
    el.ontouchmove = move_handler;
    // Use same handler for touchcancel and touchend
    el.ontouchcancel = end_handler;
    el.ontouchend = end_handler;
}

function init() {
set_handlers("canvas");
set_handlers("canvas1");
}

var el = document.getElementById('rightY');
el.addEventListener('long-press', function(e) {
  rightyi();
});

function rightyd(){
    window.navigator.vibrate(50);
        if((globalry-2)>=1000&&(globalry-2)<=2000){
            trim2y=trim2y-2;
            document.getElementById("y_coordinate1").innerText =  globalry+trim2y;
        }
}
function rightyi(){
    window.navigator.vibrate(50);
    if((globalry+2)>=1000&&(globalry+2)<=2000){
        trim2y=trim2y+2;
        document.getElementById("y_coordinate1").innerText = globalry+trim2y;    
    }
    
}
function leftxd(){
    window.navigator.vibrate(50);
    if((globallx-2)>=1000&&(globallx-2)<=2000){
        trim1x=trim1x-2;
        document.getElementById("x_coordinate").innerText =  globallx+trim1x;
    }
}
function leftxi(){
    window.navigator.vibrate(50);
    if(((globallx+2)>=1000)&&(globallx+2<=2000)){
        trim1x=trim1x+2;
        document.getElementById("x_coordinate").innerText = globallx+trim1x;
    }
        
}
function rightxd(){
    window.navigator.vibrate(50);
    if(((globalrx-2)>=1000)&&(globalrx-2)<=2000){
        trim2x=trim2x-2;
        document.getElementById("x_coordinate1").innerText = trim2x+globalrx;
    }
}
function rightxi(){ 
    window.navigator.vibrate(50);
    if((globalrx+2)>=1000&&(globalrx+2)<=2000){
        trim2x=trim2x+2;
        document.getElementById("x_coordinate1").innerText = globalrx+trim2x;
    }
}



window.addEventListener('load', () => {
    document.addEventListener('mousedown', function (event) {
        if(event.clientX-canvas.offsetLeft < w) {           
            startDrawing(event);
        }
        else{
            startDrawing1(event);
        }
      });
    document.addEventListener('mouseleave', function (event) {
        if(event.clientX-canvas.offsetLeft < w) {
            stopDrawing(event);
        }
        else{
            stopDrawing1(event);
        }
      });
    document.addEventListener('mouseout', function (event) {
        if(event.clientX-canvas.offsetLeft < w) {
            stopDrawing(event);
        }
        else{
            stopDrawing1(event);
        }
      });
    document.addEventListener('mouseup', function (event) {
        if(event.clientX-canvas.offsetLeft < w) {
            stopDrawing(event);
        }
        else{
            stopDrawing1(event);
        }
      });
    document.addEventListener('mousemove', function (event) {
        if(event.clientX-canvas.offsetLeft < w) {
            Draw(event);
        }
        else {
            Draw1(event);
        }
      });

    // document.addEventListener('touchstart', function (e) {
    //         if(e.touches[0].clientX-canvas.offsetLeft < w) {
    //             startDrawing(e);
    //         }
    //         else{
    //             startDrawing1(e);
    //         }
    //   });
    //   document.addEventListener('touchend', function (e) {
    //     if(e.touches[0].clientX-canvas.offsetLeft < w) {
    //         stopDrawing(e);
    //     }
    //     else{
    //         stopDrawing1(e);
    //     }
    //     });
    //     document.addEventListener('touchcancel', function (e) {
    //         if(e.touches[0].clientX-canvas.offsetLeft < w) {
    //             stopDrawing(e);
    //         }
    //         else{
    //             stopDrawing1(e);
    //         }
    //     });
    // document.addEventListener('touchend', function (e) {
    //     if(e.targetTouches[0].identifier==tpCache[0].identifier)
    //     stopDrawing(e);
    //   });
    // document.addEventListener('touchmove', function (e) {
    //         if(e.touches[0].clientX-canvas.offsetLeft < w) {
    //             Draw(e);
    //         }
    //         else {
    //             Draw1(e);
    //         }
    //   });
    window.addEventListener('resize', resize);
    window.addEventListener('resize', resize1);
});

// function start_handler(ev) {
//     ev.preventDefault();
//     if (ev.targetTouches.length == 2) {
//       for (var i=0; i < ev.targetTouches.length; i++) {
//         tpCache.push(ev.targetTouches[i]);
//       }
//     }
//    }

function resize() {
    height = 260;
    width = (window.innerWidth)*0.4;
    radius = 100;
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    background();
    joystick(width / 2, height/2);
}

function background() {
    x_orig = width / 2;
    y_orig = height /2;

    ctx.beginPath();
    ctx.fillStyle = '#ECE5E5';
    ctx.fillRect(x_orig-100,y_orig-100,200,200);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(width/2,0)
    ctx.lineTo(width/2,height)
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0,height/2)
    ctx.lineTo(width,height/2)
    ctx.stroke();
}

function joystick(width, height) {
    ctx.beginPath();
    ctx.arc(width, height, 20, 0, Math.PI * 2, true);
    ctx.fillStyle = '#000000';
    ctx.fill();
    ctx.strokeStyle = '#FF0000';
    ctx.lineWidth = 2;
    ctx.stroke();
}

function getPosition(event) {
    
    var mouse_x = event.clientX || event.touches[0].clientX ;
    var mouse_y = event.clientY || event.touches[0].clientY ;
    coord.x = mouse_x - canvas.offsetLeft;
    coord.y = mouse_y - canvas.offsetTop;

}

function is_it_in_the_circles() {
    var current_radius = Math.sqrt( Math.pow(coord.x - (width/2), 2) + Math.pow(coord.y - (-vert_pos+height / 2), 2));
    if (20 >= current_radius) return true;
    else return false;
}

function inside() {
    if ((x_orig-100<coord.x && x_orig+100>coord.x)&&(y_orig-100<coord.y && y_orig+100>coord.y)) return true;
    else return false;
}

function startDrawing(event) {
    getPosition(event);
    if (is_it_in_the_circles()) {
        window.navigator.vibrate(50);
        paint = true;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        background();
        joystick(coord.x, coord.y);
        Draw();
    }
}

function stopDrawing() {
    paint = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background();
    joystick(width / 2, -vert_pos+height / 2);
    globallx=1500;
    document.getElementById("x_coordinate").innerText = globallx+trim1x;
    document.getElementById("y_coordinate").innerText = globally;
}

function Draw(event) {
    if (paint) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        background();
        var x, y;
        var angle = Math.atan2((coord.y - y_orig), (coord.x - x_orig));
        
        if (inside()) {
            joystick(coord.x, coord.y);
            x = coord.x;
            y = coord.y;
            x_relative = x - x_orig;
            y_relative = y - y_orig;
            globallx= Math.round(5*x_relative+1500);
            globally= Math.round((-y_relative)*5+1500);
            if((globallx+trim1x)<=2000&&(globallx+trim1x)>=1000)
            document.getElementById("x_coordinate").innerText =  globallx+trim1x;
            else
            document.getElementById("x_coordinate").innerText =  globallx;
            document.getElementById("y_coordinate").innerText =  globally;
            vert_pos= -y_relative;
        }
        else if(!inside()&&coord.x<width){
            x = 150 * Math.cos(angle) + x_orig;
            y = 150 * Math.sin(angle) + y_orig;
            if(x-x_orig>100)
                x = x_orig + 100;
            if(x-x_orig<-100)
                x = x_orig - 100;
            if(y-y_orig>100)
                y = y_orig + 100;
            if(y-y_orig<-100)
                y = y_orig - 100;
            x_relative = x - x_orig;
            y_relative = y - y_orig;
            globallx= Math.round(5*x_relative+1500);
            globally= Math.round((-y_relative)*5+1500);
            if((globallx+trim1x)<=2000&&(globallx+trim1x)>=1000)
            document.getElementById("x_coordinate").innerText =  globallx+trim1x;
            else
            document.getElementById("x_coordinate").innerText =  globallx;
            document.getElementById("y_coordinate").innerText =  globally;
            vert_pos= -y_relative;
            joystick(x,y);
        }
        else{
            stopDrawing();
         }
        hori_pos= x_relative;
        getPosition(event);
    }
}


// window.addEventListener('load', () => {


//     // document.addEventListener('mousedown', startDrawing1);
//     // document.addEventListener('mouseleave', stopDrawing1);
//     // document.addEventListener('mouseout', stopDrawing1);
//     // document.addEventListener('mouseup', stopDrawing1);
//     // document.addEventListener('mousemove', Draw1);

//     // document.addEventListener('touchstart', startDrawing1);
//     // document.addEventListener('touchend', stopDrawing1);
//     // document.addEventListener('touchcancel', stopDrawing1);
//     // document.addEventListener('touchmove', Draw1);
//     // window.addEventListener('resize', resize1);


// });



function resize1() {
    width1 = (window.innerWidth)*0.4;
    radius1 = 100;
    height1 = 260;
    ctx1.canvas.width = width1;
    ctx1.canvas.height = height1;
    background1();
    joystick1(width1 / 2, height1 / 2);
}

function background1() {
    x_orig1 = width1 / 2;
    y_orig1 = height1 / 2;
    ctx1.beginPath();
    ctx1.arc(x_orig1, y_orig1, radius1 + 10, 0, Math.PI * 2, true);
    ctx1.fillStyle = '#ECE5E5';
    ctx1.fill();
    ctx1.beginPath();
    ctx1.moveTo(width1/2,0)
    ctx1.lineTo(width1/2,height1)
    ctx1.stroke();
    ctx1.beginPath();
    ctx1.moveTo(0,height1/2)
    ctx1.lineTo(width1,height1/2)
    ctx1.stroke();
}

function joystick1(width1, height1) {
    ctx1.beginPath();
    ctx1.arc(width1, height1, 20, 0, Math.PI * 2, true);
    ctx1.fillStyle = '#000000';
    ctx1.fill();
    ctx1.strokeStyle = '#FF0000';
    ctx1.lineWidth = 2;
    ctx1.stroke();
}

function getPosition1(event) {
    // if(event.touches.length == 1){
        var mouse_x1 = event.clientX || event.touches[0].clientX;
        var mouse_y1 = event.clientY || event.touches[0].clientY ;
    // }
    // if(event.touches.length == 2){
    //     var mouse_x1 = event.clientX || event.touches[1].clientX;
    //     var mouse_y1 = event.clientY || event.touches[1].clientY ;
    // }
    coord1.x1 = mouse_x1 - canvas1.offsetLeft;
    coord1.y1 = mouse_y1 - canvas1.offsetTop;
}

function is_it_in_the_circle1s() {
    var current_radius1 = Math.sqrt(Math.pow(coord1.x1 - x_orig1, 2) + Math.pow(coord1.y1 - y_orig1, 2));
    if (20 >= current_radius1) return true
    else return false
}

function is_it_in_the_circle1d() {
    var current_radius1 = Math.sqrt(Math.pow(coord1.x1 - x_orig1, 2) + Math.pow(coord1.y1 - y_orig1, 2));
    if (radius1 >= current_radius1) return true
    else return false
}

function startDrawing1(event) {
    
    getPosition1(event);
    if (is_it_in_the_circle1s()) {
        window.navigator.vibrate(50);
        paint1 = true;
        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
        background1();
        joystick1(coord1.x1, coord1.y1);
        Draw1();
    }
}

function stopDrawing1() {
    paint1 = false;
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    background1();
    joystick1(width1 / 2, height1 / 2);
    globalrx=1500;
    globalry=1500; 
    document.getElementById("x_coordinate1").innerText = globalrx+trim2x;
    document.getElementById("y_coordinate1").innerText = globalry+trim2y;

}

function Draw1(event) {
    if (paint1) {
        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
        background1();
        var x1, y1;
        var angle1 = Math.atan2((coord1.y1 - y_orig1), (coord1.x1 - x_orig1));

        if (is_it_in_the_circle1d()) {
            joystick1(coord1.x1, coord1.y1);
            x1 = coord1.x1;
            y1 = coord1.y1;
            var x_relative1 = x1 - x_orig1;
            var y_relative1 = y1 - y_orig1;
            globalrx=Math.round(x_relative1*5+1500);
            globalry=Math.round((-y_relative1)*5+1500);
            if((globalrx+trim2x)<=2000&&(globalrx+trim2x)>=1000)
            document.getElementById("x_coordinate1").innerText =  globalrx+trim2x;
            else
            document.getElementById("x_coordinate1").innerText =  globalrx;
            if((globalry+trim2y)<=2000&&(globalry+trim2y)>=1000)
            document.getElementById("y_coordinate1").innerText =  globalry+trim2y;
            else
            document.getElementById("y_coordinate1").innerText =  globalry;
        }
        else if(!is_it_in_the_circle1d()&&coord1.x1>0){
            x1 = radius1 * Math.cos(angle1) + x_orig1;
            y1 = radius1 * Math.sin(angle1) + y_orig1;
            var x_relative1 = x1 - x_orig1;
            var y_relative1 = y1 - y_orig1;
            globalrx=Math.round(x_relative1*5+1500);
            globalry=Math.round((-y_relative1)*5+1500);
            if((globalrx+trim2x)<=2000&&(globalrx+trim2x)>=1000)
            document.getElementById("x_coordinate1").innerText =  globalrx+trim2x;
            else
            document.getElementById("x_coordinate1").innerText =  globalrx;
            if((globalry+trim2y)<=2000&&(globalry+trim2y)>=1000)
            document.getElementById("y_coordinate1").innerText =  globalry+trim2y;
            else
            document.getElementById("y_coordinate1").innerText =  globalry;
            joystick1(x1,y1);
        }
        else{
            stopDrawing1();
        }
        getPosition1(event);
    }
}

function start(){
    if(globally==1000){
        document.getElementById("start").style.background = "white";
        window.navigator.vibrate(50);
        a=1;
    }
}



var socket = new WebSocket('ws://192.168.131.156:8765');
socket.onerror = function(e){
console.log('Error:',e);
}
socket.onmessage = calc;
var count =0;
setInterval(data, 50);
function data(){
    if((globallx+trim1x)<=2000&&(globallx+trim1x)>=1000)
    var value_1 = globallx+trim1x;
    else
    var value_1 = globallx;

    var value_2 = globally+trim1y;
    if((globalrx+trim2x)<=2000&&(globalrx+trim2x)>=1000)
    var value_3 = globalrx+trim2x;
    else
    var value_3 = globalrx;
    if((globalry+trim2y)<=2000&&(globalry+trim2y)>=1000)
    var value_4 = globalry+trim2y;
    else
    var value_4 = globalry;
    var value_5= 1100;
    var value_6= togg;


	var status;
	switch(socket.readyState){
		case 0: status = "Contng";
		break;
		case 1: status = "Contd";
		break;
		case 3: status = "closed";
		break; 
	}
	document.getElementById("temp").innerHTML = "T = "+value_2.toString(10)+" Y = "+value_1.toString(10)+" P = "+value_4.toString(10)+" R = "+value_3.toString(10)+" "+value_5.toString(10)+" "+value_6.toString(10)+" "+status;
	const obj = {throttle:value_2,yaw:value_1,pitch:value_4,roll:value_3,mode:value_5,toggle:value_6};
	//document.getElementById("temp1").innerHTML = JSON.stringify(obj);
    
    if(a==1){
        socket.send(JSON.stringify(obj));
    }
	
}
function calc(event){
	document.getElementById("temp2").innerHTML = event.data;
}


