let n = Number(prompt("Entrez un nombre de EX 3 : "));

document.writeln("Le nombre " + n + " est : ");
if (n < 0) {
    document.writeln("Nombre négatif");
} else {
    if (n <= 10) {
       document.writeln("Petit");
    } else {
        if (n <= 50) {
            document.writeln("Moyen");
        } else {
            if (n <= 100) {
                document.writeln("Grand");
            } else {
                document.writeln("Très grand");
            }
        }
    }
}
