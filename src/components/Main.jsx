// !!! TOUT LE TEMPS LIRE LA DOC EN ENTIER AVANT DE COMMENCER A CODER !!!

import React, { useState } from "react";
import Button from "./Button";
import ImportImage from "./importImage";
import JSinJSX from "./JSinJSX";
import JSinJSX2 from "./JSinJSX_2";
import Animal from "./PropsinComponents";
import CheckList from "./List";
import ChecklistOptimize from "./ListOptimize";
import ListAnimauxGlobale from "./RenderingList";

// Cette fonction est un composant.
// Elle importera les autres composants et les affichera dans l'ordre voulue.
function Main() {
    
    // return() permet de retourner le code HTML de notre composant.
    return (
        
        // Cette div est le code HTML à retourner. elle peut être vide ou comporter des attributs comme ici "className".
        // Elle est aussi obligatoire car elle permet de retourner plusieurs éléments HTML. Si elle n'était pas là,
        // nous ne pourrions retourner qu'un seul élément HTML.
        <div className="Main">
            {/* Ici, nous affichons notre composant "Button" qui intègre son propre code (<h1> puis <button>). */}
             {/* Il est aussi l'enfant de Main car il est utilisé dans la fonction Main. */}
            <Button />

            {/* Ici, nous affichons notre composant "importImage" qui intègre son propre code (<h1> puis <img>). */}
            <ImportImage />

            {/* Ici, nous affichons notre composant "JSinJSX" qui intègre son propre code (<h1> puis <img> mais avec du JS à l'intérieur). */}
            <JSinJSX />

            <JSinJSX2 />

            {/* Dans ce cas précis, j'ai rajouté des props dans mon composant enfant 'Animal' qui ne sont pas de base à l'intérieur.
            Je vais donc lui faire hériter ses props que je pourrai utiliseret modifier dans ce dernier (PropsinComponents.jsx). */}
            <Animal 
                specie= {{name : 'Tigre'}} 
                weight= {'250'}
                description= {'Tiger in the jungle'}
            />

            {/* Checklist est le composant qui me permettra d'importer ma première liste d'animaux croisés (List.jsx) */}
            <CheckList />

            {/* ChecklistOptimize est le composant qui me permettra d'importer ma deuxième liste d'animaux croisés
            mais d'une meilleure manière (ListOptimize.jsx) */}
            <ChecklistOptimize />

            {/* {/* RenderingList est le composant qui me permettra d'importer ma troisième liste d'animaux 
            qui elle se trouve sous forme de tableau (RenderingList.jsx) */}
            <ListAnimauxGlobale />

        </div>
    );
}

// Cette ligne permet d'exporter notre fonction Main afin de pouvoir l'importer dans d'autres fichiers comme dans le fichier App.jsx.
export default Main;

// A partir d'ici, les modifications à faire sont dans le fichier App.jsx car nous avons fini de créer notre composant Main.