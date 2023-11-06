// Ceci est le document à importer dans le fichier Main.jsx

// Cette fonction permettra d'afficher une image avec le titre de notre objet "Object1".
function Button() {

    // return est la valeur de retour de la fonction.
    return (
        // Cette div est le code HTML à retourner. elle peut être vide ou comporter des attributs comme ici "className".
        // className est un attribut qui permet de donner une classe à un élément HTML et sera éditable dans le fichier "App.css".
        <div className="ContenuObjet1">

            {/* h1 représente le titre de notre futur bouton */}
            <h1>Partie Bouton</h1>
            
            {/* <button></button> sont les balises qui permettent de créer un bouton, son contenu se trouve entre les deux balises ("Click me") */}
            <button className="buttonObject1">Click me</button>
        
        </div>
    );
}

// Cette ligne permet d'exporter notre fonction Object1 afin de pouvoir l'importer dans d'autres fichiers comme dans le fichier Main.jsx.
export default Button;

// A partir d'ici, les modifications à faire sont dans le fichier Main.jsx car nous avons fini de créer notre composant Object1.