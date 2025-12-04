let sommePairs = 0;
let sommeImpairs = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    sommePairs = sommePairs + i;
  } else sommeImpairs = sommeImpairs + i;
}

document.writeln("Somme pairs :", sommePairs);
document.writeln("<br> Somme impairs :", sommeImpairs);
