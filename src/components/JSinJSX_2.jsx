// L'utilisation des "{}" peut être réaliser uniquement dans un text HTML ({name} est heureux d'être ici.)
//  ou bien dans un attribut HTML (<img src={portrait}).
// Il est aussi posssible d'ajouter des objets dans les "{}" mais il faudra les entourer d'une nouvelle paire de "{}" ({{name}}).

// Ainsi notre code ressemblera à ça:
function JSinJSX2() {
    
    // const Thomas = {...} est un objet qui contient plusieurs variables. Il est possible de créer un objet vide et de le remplir plus tard.
    // Il est aussi possible de créer un objet avec des variables déjà définis.
    // Ici j'ai créé un objet qui contient une image, une description, un nom et un thème.
    //  Mais je peux en créer une version vierge que je pourrais remplir plus tard et m'en servir dans d'autres composants, dans d'autres projets.
    const Thomas = {
        portrait : "https://images.unsplash.com/photo-1677576874778-df95ea6ff733?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description : "Portrait d'un jeune homme",
        namePerson : "Thomas",
        theme: {
            backgroundcolor: "green",
            color: "Yellow",
        }
    };

    // Idem pour ce paysage.
    const Paysage = {
        image : "https://images.unsplash.com/photo-1697450300645-faf3676bb7b5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description : "Paysage de montagne",
        namePaysage : "Montagne",
        // color représente la couleur du texte et backgroundcolor la couleur de fond.
        theme: {
            backgroundcolor: "red",
            color: "blue",
        }
    };

    const Tiger = {
        name : 'Tiger',
        image : 'https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description : 'Tiger in the jungle',
        theme : {
            backgroundcolor : 'green',
            color : 'yellow',
        }
    };

    return (
        <>
            {/* Maintenant je crée une <div> qui va utiliser les infos que j'ai rempli au-dessus et me permet ainsi de gagner du temps
                en m'évitant de remplir à nouveaux chaque composant ! */}
            <div className="Thomas" style={Thomas.theme}>

                {/* h1 représente le titre de notre futur image */}
                <h1>Portrait de {Thomas.namePerson}, notre explorateur</h1>

                {/* Idem pour l'image */}
                <img className="Portrait" src={Thomas.portrait} alt={Thomas.description} />
        
            </div>

        
            <div className="Paysage" style={Paysage.theme}>

                <h1>{Paysage.namePaysage}</h1>
                <img className="PaysageMontagne" src={Paysage.image} alt={Paysage.description} />
            
            </div>

        </>
    );

}

export default JSinJSX2;