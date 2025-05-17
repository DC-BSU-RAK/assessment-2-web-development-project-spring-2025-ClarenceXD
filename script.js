let update1Body = "A whole new snow-covered battleground awaits! \nBut beware, when a blizzard rolls in,\nyour sight and hearing are severely compromised. \nAdapt, survive, and dominate the unknown."
let update1Head = "DYNAMIC SNOW WEATHER"
let update1Video = "videos/SNOW_1.mp4"


let update2Body = "Your every step will leave tracks in the snow—use \nthem to hunt down your enemies and outmaneuver your foes. \n\n\n"
let update2Head = "TRACK ENEMIES BY THEIR FOOTPRINTS"
let update2Video = "videos/TRACK_1.mp4"

let update3Body = "For the first time ever, step into the shoes of a Boss.\nCommand the battlefield with overwhelming power \nand lead your side to victory. \n\n"
let update3Head = "BOSS FIGHT: PLAY AS VIPER OR FRED"
let update3Video = "videos/BOSS_1.mp4"

let update4Body = "Airdrops just got an upgrade. Every drop in \nthe limited-time mode guarantees\na high-value red item. The fight for supremacy \nbegins here—are you ready to claim it?"
let update4Head = "100% RED LOOT IN AIRDROPS"
let update4Video = "videos/RED_1.mp4"


let about1Body = "Load up your rucksack with supplies and ammo, \nor travel empty for maximum mobility. \nLight or heavy, it's all up to you.\n\n"
let about1Head = "GEAR UP"
let about1Video = "videos/GEARUP_2.mp4"


let about2Body ="Eliminate adversaries head-on, with stealth, \nor bypass the bullets altogether. You have the \nfreedom to fight however you desire.\nScour the lawless arena in search of valuable guns, attachments and supplies."
let about2Head ="SHOOT & LOOT"
let about2Video = "videos/SHOOT_2.mp4"

let about3Body ="Break out of the combat area alive for \na chance to strike it rich, \nbut be prepared to fight for survival.\n\n"
let about3Head ="BREAKOUT"
let about3Video = "videos/BREAKOUT_2.mp4"

let about4Body ="Trade with other players via an \nopen market system to own the ultimate raid loadout.\n\n\n"
let about4Head ="TRADE"
let about4Video = "videos/TRADE_2.mp4"


const mapbg = ["videos/farmlandbg.mp4","videos/northbg.mp4","videos/armory.bg.mp4","videos/valleybg.mp4","videos/tvbg.mp4"]

/*guild video*/

let guide1 = "https://www.youtube.com/embed/UEhc9js8QA8?si=eREXO0To6bwZjWjS"
let guide2 = "https://www.youtube.com/embed/tO0vjPFnjZw?si=_VebX7yeoSZIGqCY"

let title1 = "Thermal Hunt"
let title2 = "Fal"

let head1 = "Solo MP5 vs FARM FZ | Arena Breakout"
let head2 = "Destroying Chads With New FAL| Arena Breakout"

let channel1 = "by DorrNett"
let channel2 = "by Sade"



/*Used for Home Page*/

function bg_change(head, body, videoPath) {
    document.getElementById("log1").innerHTML = head;
    document.getElementById("log1.1").innerHTML = body;
    document.getElementById("updatevid").src = videoPath; /*update video path and reload*/
    document.getElementById("bg_video").load();
}
function about(head, body, videoPath) {
    document.getElementById("about1").innerHTML = head;
    document.getElementById("about1.1").innerHTML = body;
    document.getElementById("aboutvid").src = videoPath; /*update video path and reload*/
    document.getElementById("ab_video").load()
}

function map(videoPath){

    document.getElementById("mapvid").src = videoPath; /*update video path and reload*/
    document.getElementById("map_video").load()

}

function guide(link,title,head,from,active,unactive){


    /*highlights active tab*/
    active.style.color = "#FFA600";
    unactive.style.color = "#ffffff";

    /*Changes videos*/

    
    document.getElementById("guidevid").src = link; /*update video path and reload*/
    document.getElementById("guidevid").title = title; 
    document.getElementById("heading").innerHTML = head;
    document.getElementById("by").innerHTML = from;

    document.getElementById("guidevid2").src = link; /*update video path and reload*/
    document.getElementById("guidevid2").title = title; 
    document.getElementById("heading2").innerHTML = head;
    document.getElementById("by2").innerHTML = from;

    document.getElementById("guidevid3").src = link; /*update video path and reload*/
    document.getElementById("guidevid3").title = title; 
    document.getElementById("heading3").innerHTML = head;
    document.getElementById("by3").innerHTML = from;
}