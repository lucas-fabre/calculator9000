// Cette fonction permettra d'afficher une image avec le titre de notre objet "Object3".
function JSinJSX() {
    // Maintenant que l'on maîtrise les bases de React, nous allons pouvoir rendre notre site plus dynamique en utilisant des "const".
    // Une "const" est une variable qui ne peut pas être modifiée une fois qu'elle a été déclarée.
    // Nous allons donc créer une const qui contiendra le lien de notre image.
    const portrait = "https://images.unsplash.com/photo-1694399120199-72ac9241c2f4?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const description = "Portrait d'une jeune fille";
    const name = "Léa";
    // Une fois ces const créées, nous allons pouvoir les utiliser dans notre code HTML sous forme de variables.

    return (
        
        <div className="ContenuObject3">

            {/* h1 représente le titre de notre futur image */}
            {/* "{}" permettent d'utiliser les variables définis au-dessus sous la forme d'u simple nom et ceci grâce à l'utilisation de JS */}
            <h1>Portrait de {name}, notre exploratrice</h1>

            {/* Idem pour l'image */}
            <img className="Portrait" src={portrait} alt={description} />
        
        </div>
    );
}

// Cette ligne permet d'exporter notre fonction Object3 afin de pouvoir l'importer dans d'autres fichiers comme dans le fichier Main.jsx.
export default JSinJSX;

// L'utilisation des "{}" peut être réaliser uniquement dans un text HTML ({name} est heureux d'être ici.)
//  ou bien dans un attribut HTML (<img src={portrait}).