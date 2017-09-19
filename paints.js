//Interior/exterior?

//interior
//what finish would you like that in? (flat, egg shell, satin, semi-gloss, or high gloss)?

//flat -->
//egg shell -->
//satin -->
//semi-gloss -->
//high gloss -->

//exterior
// what finish would you like that in?(flat, satin, semi-gloss, high gloss)?

//what grade of paint? (good, better, best)

var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');

var sherwinWestElmColors =[
{
  colorNumber: "SW 6215",
  name: "Rocky River",
},
{
  colorNumber: "SW 7632",
  name: "Modern Gray",
},
{
  colorNumber: "SW 6052",
  name: "Sandbank",
},
{
  colorNumber: "SW 7067",
  name: "Cityscape",
},
{
  colorNumber: "SW 7623",
  name: "Cascades",
},
{
  colorNumber: "SW 6236",
  name: "Grays Harbor",
},
{
  colorNumber: "SW 9161",
  name: "Dustblu",
},
{
  colorNumber: "SW 9056",
  name: "French Moire",
},
{
  colorNumber: "SW 7643",
  name: "Pussywillow",},
{
  colorNumber: "SW 6221",
  name: "Moody Blue",},
{
  colorNumber: "SW 7004",
  name: "Snowbound",
},
{
  colorNumber: "SW 2840",
  name: "Hammered Silver",
}
];

console.log(sherwinWestElmColors.name);

var response = prompt('Is this paint for the interior or exterior?');

if (response === "interior" || response === "exterior" ) {
    var finish = prompt("What finish would you like that in: flat, egg shell, satin, semi-gloss, or high gloss?");
    var grade = prompt("What grade of paint would you like that in: good, better or best?");
    // var final = yn(prompt("Is this correct? You\'d like an " + response " paint " + " with a " + finish + " finish " + " and a " + grade + " grade. (y/n)? "));
    var colorChoice = prompt("What color paint would you like?");
    console.log("So you'd like "  + colorChoice + " paint " + " wih a " + finish + " finish " + " and a " + grade + " grade? ");
  }
  else {
    console.log("Please put in a correct response.");
  }

