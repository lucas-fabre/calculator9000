// Cette fonction est la version optimisée de la fonction "Rencontres" du fichier List.jsx.
// Comme celle-ci, elle permet de créer une liste d'animaux rencontrés avec les mêmes paramètres.
// La différence est que celle-ci utilise un "ternary operator" qui permet de faire une condition en une seule ligne.
function RencontresOptimize({ name, rencontré }) {
    return (

        <li className="RencontresOptimize">

            {/* le "?" représente un "alors", le ":" représente "sinon" */}
            {/* Du coup, si {rencontré}= {true} alors(?) return "name + '✔' SINON(:) return uniquement {name}" */}
            { rencontré ? name + " ✔" : name }
        
        </li>
    )
}

function ChecklistOptimize() {
    return (

        <section>
            
            <h1>Animaux rencontrés (Optimisé)</h1>
            
            <ul>

                {/* Le premier composant "Rencontres" est un tigre et nous l'avons rencontré plus tôt sur notre page,
                 la valeur de "rencontré" sera donc "{true}" */}
                <RencontresOptimize name="Tigre" rencontré= {false} />
                
                {/* Le deuxième composant "Rencontres" est un lynx et nous ne l'avons pas rencontré plus tôt sur notre page,
                    la valeur de "rencontré" sera donc "{false}" */}
                <RencontresOptimize name="Lynx" rencontré= {true} />
                
                {/* Idem pour le loup */}
                <RencontresOptimize name="Loup" rencontré= {false} />

            </ul>

        </section>
    )
};

export default ChecklistOptimize;