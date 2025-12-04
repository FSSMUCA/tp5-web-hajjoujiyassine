function sommeRecursive(n) {
    if (n === 1) return 1;
    return n + sommeRecursive(n - 1);
}

function sommeIterative(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i;
    }
    return s;
}

let N =Number(prompt("Entrez un nombre de EX10 : "));

document.writeln("La somme récursive de 1 à " + N + " est : " +sommeRecursive(N)+"<br>");
document.writeln("La somme itérative de 1 à " + N + " est : " +sommeIterative(N));