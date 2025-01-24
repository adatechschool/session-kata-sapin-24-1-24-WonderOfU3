let afficherEtoiles = (n) =>
{
    let star = "", random = 0;
    for (let i = 0; i < n; i++) {
        random = Math.floor(Math.random() * 7);
        if (random === 0)
            star += "o";
        else if (random === 1)
            star += "+";
        else
            star += "*";
    }
    return (star);
}

let afficherTriangleGauche = (n) =>
{
    for (let i = 0; i < n; i++)
        console.log(afficherEtoiles(i) + "\\");
}

let afficherTriangleDroite = (n) =>
{
    let space = "";
    for (let i = 0; i < n - 1; i++)
        space += " ";
    for (let i = 0; i < n; i++) {
        console.log(space + "/" + afficherEtoiles(i));
        space = space.slice(0, -1);
    }
}

let afficherPointeSapin = (hauteur) =>
{
    let space = "";
    for (let i = 0; i < hauteur; i++)
        space += " ";
    console.log(space + "+");
    space = space.slice(0, -1);
    for (let i = 0; i < hauteur; i++) {
        console.log(space + "/" + afficherEtoiles(i) + "|" + afficherEtoiles(i) + "\\");
        space = space.slice(0, -1);
    }
}

let afficherEtage = (hauteur, pointe_offset, espacement) =>
{
    let space = "";
    for (let i = 0; i < hauteur + espacement - 1; i++)
        space += " ";
    for (let i = 0; i < hauteur; i++, pointe_offset++) {
        console.log(space + "/" + afficherEtoiles(pointe_offset) + "|" + afficherEtoiles(pointe_offset) + "\\");
        space = space.slice(0, -1);
    }
}

let afficherSapin = (etage, hauteur_etage) =>
{
    space = "";
    for (let i = 0; i < etage + hauteur_etage - 1; i++)
        space += " ";
    console.log(space + "+");
    for (let i = 0, j = etage - 1; i < etage; i++, j--)
        afficherEtage(hauteur_etage, i, j);
    space = space.slice(0, -1);
    for (let i = 0; i < etage; i++)
        console.log(space + "###");
}

/*afficherTriangleDroite(5);
afficherTriangleGauche(5);
afficherPointeSapin(1);
afficherPointeSapin(2);
afficherPointeSapin(3);
afficherEtage(3, 0, 3)
afficherEtage(3, 1, 2)
afficherEtage(3, 2, 1)
afficherEtage(3, 3, 0)
afficherSapin(3, 3);
afficherSapin(5, 4);*/
