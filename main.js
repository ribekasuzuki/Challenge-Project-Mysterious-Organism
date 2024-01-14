// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, arr) => {
  return {
    specimenNum: specimenNum,
    dna: arr,
  }
}

const newDNA = pAequorFactory(1, mockUpStrand());
const newDNAArray = newDNA.dna;
//console.log(newDNAArray);

const newDNA2 = pAequorFactory(2, mockUpStrand());
const newDNAArray2 = newDNA2.dna;
//console.log(newDNAArray2);

const newDNA3 = pAequorFactory(3, mockUpStrand());

//I'd got pretty stuck in this step. I had to write my thoughts down to find the right loop for this situation.
const mutate = (arr) => {
  let newBase = returnRandBase()
  console.log(newBase) //I used it to test the function
  while (arr[0] === newBase) {
    newBase = returnRandBase();
    console.log(newBase) //I used it to test the function but now I've changed to return
  }
  arr[0] = newBase;
  // Update the DNA array with the new base at the selected index
  console.log(arr) 
};

mutate(newDNAArray);


const compareDNA = (obj) => {
  console.log(newDNA.dna)
  console.log(obj.dna)
  let equalElements = [];
  for (let i = 0; i < obj.dna.length; i++)
  if (newDNA.dna[i] === obj.dna[i]) {
    equalElements.push(newDNA.dna[i])
  } 
  console.log(equalElements)
  let percentageEqualElements = Math.floor((equalElements.length/newDNA.dna.length) * 100)
  console.log(percentageEqualElements)

  console.log(`specimen #1 and specimen #2 have ${percentageEqualElements}% DNA in common.`)
}

compareDNA(newDNA2);
compareDNA(newDNA3);

const willLikelySurvive = (dna) => {
  let count = 0;  
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] == "C" || dna[i] == "G") {
      count++;
    }
  }
  return count / dna.length >= 0.6;
};

let willSurvive = [];
let counter = 1;

while (willSurvive.length < 30) {
  let newOrg = pAequorFactory(counter, mockUpStrand());
  
  if (willLikelySurvive(newOrg.dna)) {
    willSurvive.push(newOrg);
  }
  
  counter++;
}

console.log(willSurvive);
console.log(willSurvive.length)
