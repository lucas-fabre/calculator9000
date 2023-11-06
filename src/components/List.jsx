
// Cette fonction permet de créer une liste d'animaux rencontrés avec en paramètre le nom de l'animal "{name}"
// et si il a été rencontré ou non "{recontré}".
function Rencontres({name, rencontré}) {
    // Si "{rencontré}" est égal à "true", alors on affiche "{name} ✔"
    if (rencontré){
        return (
            <li className="Animaux rencontrés">{name} ✔</li>
        )
    }
    // Sinon, on affiche juste "{name}".
    return (
        <li className="Animaux rencontrés">{name}</li>
    )
}

// Cette fonction permet de créer une liste d'animaux rencontrés avec en paramètre le nom de l'animal "{name}" et son état "{rencontré} (true ou false)".
function CheckList() {

    return (
        <section>
            
            <h1>Animaux rencontrés</h1>
            
            <ul>
                {/* Le premier composant "Rencontres" est un tigre et nous l'avons rencontré plus tôt sur notre page,
                 la valeur de "rencontré" sera donc "{true}" */}
                <Rencontres name="Tigre" rencontré= {true} />
                
                {/* Le deuxième composant "Rencontres" est un lynx et nous ne l'avons pas rencontré plus tôt sur notre page,
                    la valeur de "rencontré" sera donc "{false}" */}
                <Rencontres name="Lynx" rencontré= {false} />
                
                {/* Idem pour le loup */}
                <Rencontres name="Loup" rencontré= {false} />

            </ul>

        </section>
    )
}

export default CheckList;
// A noter que seule la fonction CheckList est exportée car c'est elle qui est utilisée dans le fichier Main.jsx.