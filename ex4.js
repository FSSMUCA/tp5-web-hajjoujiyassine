let min = Number(prompt("Entrez le nombre minimal de EX4 : "));
let max = Number(prompt("Entrez le nombre maximal de EX4 : "));


for (let i = min; i <= max; i++) {
   
    if (i % 3 == 0 && i % 5 == 0) {
        document.writeln("Nbr " + i + " : Five&Three <br>");
    }
    else if (i % 3 == 0) {
        document.writeln("Nbr " + i + " : Three <br>");
    }
    else if (i % 5 == 0) {
        document.writeln("Nbr " + i + " : Five <br>");
    }
    else {
        document.writeln("Nbr " + i + "<br>");
    }
}
