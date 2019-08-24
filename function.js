/*console.log('HI');

let firstName = "George";
let lastName = "weathly";

console.log(`${firstName} ${lastName}`);

firstName = "Bill";
 lastName = "weathly";
 console.log(`${firstName} ${lastName}`);

 firstName = "ginny";
 lastName = "weathly";
 console.log(`${firstName} ${lastName}`);

 firstName = "Jamal";
 lastName = "Haynes";
 console.log(`${firstName} ${lastName}`);

 //const sayMyName = (first, last) {
     //return ${first} ${last};

    // console.log(sayMyName('callan, ' 'Mottison'));
 //}

//onst nuggetizer = (animal) {
    //return 'nugget ${animal}';


//} 

//const humanNuggetizer = (animal) {
    //return 'animal';
 
//}

//const spamFactory = (literalyAnything) {
    //return 'spam (lunch)';

    
//}

/*console.log(nuggetizer('chicken'));
console.log(nuggetizer('octopus'));
console.log(nuggetizer('jone work'));
  

console.log(humanNuggetizer('chicken'));
console.log(humanNuggetizer('octopus'));
console.log(humanNuggetizer('jone woker'));

console.log(spamFactory('chicken'));
console.log(spamFactory('octopus'));
console.log(spamFactory('jone woker'));*/


console.log('intro-to-js');

const printToDOM = (toPrint) => {
    document.getElementById('output').innerHTML = toPrint;
}


let bandNumber = 1;


const takeNumber =  (bandName) => {
  /*
    Write your awesome code here. See comments
    below for what should be returned.
  */

printToDOM(`<h3>${bandNumber}) ${bandName} </h3>`);
bandNumber++};

  //printToDom();  // you should already have this function written from the class lecture


takeNumber("Galactic Scum") // This should display "1. Galactic Scum" in the DOM
takeNumber("Underdogs") // This should display "2. Underdogs" in the DOM



//printToDom('callan');