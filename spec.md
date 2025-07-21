# Todo App IA – spec.md

## Description

Application web simple et élégante pour gérer une liste de tâches (Todo List) avec une interface moderne et animations.

---

## Fonctionnalités principales

- Ajouter une tâche via le champ texte ou la touche Entrée
- Supprimer une tâche avec une animation de disparition fluide
- Empêcher l’ajout de tâches vides avec un message d’alerte
- Interface responsive adaptée aux mobiles et tablettes

---

## Composants UI

- Input texte (#taskInput) pour saisir la tâche
- Bouton "Ajouter" pour valider l’ajout de la tâche
- Liste non ordonnée (#taskList) affichant les tâches sous forme d’éléments `<li>`
- Bouton "Supprimer" sur chaque tâche

---

## Logique JavaScript

- Fonction `addTask()` qui :
  - Valide la saisie utilisateur
  - Crée un élément `<li>` avec le texte de la tâche
  - Ajoute un bouton "Supprimer" avec gestionnaire d’événement
  - Ajoute l’élément à la liste avec animation d’apparition
  - Vide et remet le focus sur le champ texte

- Gestionnaire d’événement sur bouton "Supprimer" qui :
  - Lance une animation de disparition (`fadeOutLeft`)
  - Supprime l’élément du DOM à la fin de l’animation

- Gestionnaire d’événement clavier sur le champ texte pour détecter la touche Entrée et appeler `addTask()`

---

## Gestion des erreurs

- Empêche l’ajout de tâches vides avec une alerte utilisateur

---

## Design et animations

- Utilisation des animations CSS (`fadeInUp`, `fadeOutLeft`, etc.)  
- Style moderne avec dégradé, flou, ombres portées, typographie élégante  
- Responsive sur différentes tailles d’écran

---

## Technologies utilisées

- HTML5  
- CSS3 (animations, responsive design)  
- JavaScript ES6+  
- Google Fonts : Poppins
