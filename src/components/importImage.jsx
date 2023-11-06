// Ceci est le document à importer dans le fichier Main.jsx

// Cette fonction permettra d'afficher une image avec le titre de notre objet "importImage".
function ImportImage() {

    // return est la valeur de retour de la fonction.
    return (
        // Cette div est le code HTML à retourner. elle peut être vide ou comporter des attributs comme ici "className".
        // className est un attribut qui permet de donner une classe à un élément HTML et sera éditable dans le fichier "App.css".
        <div className="ContenuObjet2">

            {/* h1 représente le titre de notre futur image */}
            <h1>Photo 1</h1>

            {/* <img ... /> est la balise qui permet quant à elle d'afficher une image, celle-ci est sous forme d'une seul balise fermée par un "/>" à la fin */}
            <img src="https://images.unsplash.com/photo-1697201826242-141dec817a6f?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Object2" />
        
        </div>
    );
}

// Cette ligne permet d'exporter notre fonction importImage afin de pouvoir l'importer dans d'autres fichiers comme dans le fichier Main.jsx.
export default ImportImage;

// A partir d'ici, les modifications à faire sont dans le fichier Main.jsx car nous avons fini de créer notre composant Object2.