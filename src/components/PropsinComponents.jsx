// !!! TOUT LE TEMPS LIRE LA DOC EN ENTIER AVANT DE COMMENCER A CODER !!!

// Ici je récupère les informations de mon objet Animal en les écoutants et je les utilises dans mon code HTML.
// Pour faire ceci il faut intégrer les props dans les paramètres de la fonction Animal avec les accolades {}.
// En revanche, il ce peut qu'il y ait beaucoup trop de props à intégrer dans les paramètres de la fonction Animal.
// Pour éviter cela, il est possible de créer un objet "props" qui contiendra toutes les props que l'on souhaite utiliser.
// Dans notre cas, nous remplaçerons les props "specie", "weight" et "description" par "props".
function Animal({specie, weight, description}) {
    
    return (
        <div className="Tiger">

            <h1>Premier animal rencontré</h1>

            {/* En précisant le props "specie" puis "name", je peux placer plus précisement mes éléments rajoutés directement depuis
            mon composant parent "Main". */}
            <p>{specie.name}</p>
            
            <p>L'animal pèse {weight}Kg en moyenne.</p>  
            
            <img src="https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={description} 
            />

        </div>
    );
}

export default Animal;