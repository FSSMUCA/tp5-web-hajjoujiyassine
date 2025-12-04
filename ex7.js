function verifierMotDePasse(mdp) {
    return mdp.length >= 8 && mdp.includes("@");
}

let mdp = prompt("Entrez un mot de passe : ");

if (verifierMotDePasse(mdp)) {
    document.writeln("Mot de passe valide");
} else {
    document.writeln("Mot de passe non valide");
}
