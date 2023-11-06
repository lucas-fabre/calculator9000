// Je commence par définir une liste (array) d'animaux avec un id, un nom et un type, entourée de crochets.
const animaux = [
    // Chaque animal est un objet (props) avec un id, un nom et un type car il est entouré d'accolades.
    {id: 1,
     nom: 'Tigre',
     type: 'Félins'
    },
    {id: 2,
     nom: 'Lynx',
     type: 'Félins'
    },
    {id: 3,
     nom: 'Loup',
     type: 'Canidés'
    },
    {id: 4,
     nom: 'Chien',
     type: 'Canidés'
    },
    {id: 5,
     nom: 'Aigle',
     type: 'Rapaces'
    },
    {id: 6,
     nom: 'Faucon',
     type: 'Rapaces'
    },
];

function ListAnimauxGlobale() {

    // Les fonctions fléchées permettent de retourner un élément sans avoir à utiliser le mot-clé "return".
    // En revanche, si l'on veut rajouter du code à la suite de la flèche, il faudra utiliser les "{}" suivis du mot-clé "return".
    // Pour pouvoir récupérer toutes les infos de notre liste d'animaux, nous allons utiliser la fonction map().
    const listAnimaux = animaux.map((animal) =>
        // key= est un attribut donner à chaque élément de la liste afin de pouvoir les différencier.
        <li key={animal.id}> 
            
            <p>{animal.nom} est un animal de la famille des {animal.type}</p>
        
        </li>
    );

    return (
        // Ne pas oublié de mettre une div autour de tout le code JSX dans le return.
        <div className="ListAnimauxGlobale">

            <h1>Rendering List</h1>

            <h2>Liste des animaux ainsi que leurs familles</h2>

            <ul>{listAnimaux}</ul>

        </div>
    );
}

export default ListAnimauxGlobale;