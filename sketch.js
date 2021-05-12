const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg , hour;
function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here

    textSize(50);
    stroke("green")
    fill("green")

    if(hour>=12){
        text("time : " +  hour % 12 + " pm", 50, 100);
    } else if(hour == 0){
        text("time : 12 am", 100, 100 )
    }else{
        text("time : "+ hour%12 + " am", 50, 100)
    }
    

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    // write code slice the datetime
   hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    
    if(hour>=04 && hour<=06){
        bg = "sunrise1.png";
    } else if (hour >=06 && hour<=08){
        bg = "sunrise2.png";
    } else if (hour >=23 && hour==0){
        bg = "sunset10.png";
    } else if (hour ==0 && hour<=03){
        bg = "sunset11.png";
    } else{
        bg = "sunset12.png";
    }

    //load the image in backgroundImg variable here

    backgroundImg = loadImage(bg)

}