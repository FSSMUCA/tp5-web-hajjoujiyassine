function factorielle(n) {
    if (n === 0) return 1;
    return n * factorielle(n - 1);
}
let F = Number(prompt("Entrez un nombre pour calculer sa factorielle : "));

document.writeln("La factorielle de " + F + " est : " +factorielle(F));
