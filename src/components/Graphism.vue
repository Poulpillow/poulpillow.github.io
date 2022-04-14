<template>
  <div class="graphism">
    <h1>Graphisme</h1>
    <div class="wrapper">
      <div class="project">
        <Project
          title="Dessins"
          subtitle="Loisirs"
          v-bind:picture="dessin"
          blabla="Tout au long de mes études supérieures, j’ai réalisé de nombreux dessins, en essayant plusieurs techniques différentes (aquarelles, posca, encre, etc.). J’ai toujours beaucoup aimé dessiner et tester de nouvelles choses. J’ai d’ailleurs créé un compte Instagram d’abord dédié uniquement à mes dessins, puis je me suis diversifié avec d’autres projets."
          :img="dessinpic"
          :hidimg="true"
          lien="https://www.instagram.com/poulpillow/"
          :hidlink="true"
          nom="Instagram : @poulpillow"
        />
      </div>
      
      <div class="project">
        <Project
          title="Game Jam Color"
          subtitle="Février 2022 - Événement en 48h "
          v-bind:picture="gamejam"
          blabla="Lors d’un week-end, en seulement 48h, nous avons participé avec des amis à la Game Jam Color de l’association 803Z de l’université Gustave Eiffel de Champs-sur-Marne.
Nous devions réaliser un jeu vidéo avec pour thème “La cour de récréation” et comme contrainte d’utiliser en couleur dominante du jeu l’ocre. J’ai été en charge lors de l’événement de tous les graphismes du jeu.
Le jeu que nous avons réalisé est un jeu qui ressemble à “Little Alchemy” ou “Doodle God” où il faut assembler des objets ensembles pour se sortir de situations plutôt délicates.
En tout, j’ai dû dessiner une soixantaine d’objets, six décors et une jaquette. Tous mes dessins ont été réalisés sur le logiciel Krita.
Ce défi fut très enrichissant, car il m’a aussi fallu créer une charte graphique à respecter, ainsi qu’une palette de couleur avec environ 10 couleurs à utiliser, ce qui m’a permis de tester mes capacités en un temps limité.
Nous avons gagné le prix du “Petit Alchimiste en Herbe”."
          :img="gamejampic"
          :hidimg="true"
          lien="https://just-kiel.itch.io/childchemy"
          :hidlink="true"
          nom="Page du jeu"
        />
      </div>
      <div class="project">
        <Project
          title="Cartographie"
          subtitle="Janvier 2021 - Projet IMAC"
          v-bind:picture="carto"
          blabla="Toujours en Art Appliqués, nous devions réaliser un projet en deux temps. Tout d’abord il nous fallait réaliser un Guide des styles avec des règles graphiques à respecter explicitées. Nous avons pour cela utilisé InDesign.
Ensuite, nous devions faire une cartographie d’un lieu tout en changeant totalement de style et en expliquant notre démarche. Nous avons utilisé Illustrator et Krita pour faire la carte.
Nous avons choisi avec mon binôme de faire une carte des Machines de l’Îles de Nantes dans un style enfantin et très simplifié, à destination des enfants qui souhaitent voir le Caroussel et l'Éléphant Mécanique. Nous avons eu une grande phase de réflexion sur ce que nous voulions faire et nous sommes très fiers du résultat. Je me suis principalement occupé de dessiner toutes les icônes, et de choisir la disposition des objets."
          :img="cartopic"
          :hidimg="true"
        />
      </div>
      <div class="project">
        <Project
          title="Glitch"
          subtitle="Novembre 2020 - Projet IMAC"
          v-bind:picture="glitch"
          blabla="En première année à l’IMAC, nous avions un projet en binôme à réaliser en Art Appliqués. Nous devions créer des moodboards sur le thème du glitch, puis créer 5 œuvres et expliquer notre travail et nos choix artistiques et esthétiques. Nous avons utilisé InDesign et Illustrator de la suite Adobe. "
          :img="glitchpic"
          :hidimg="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "./Project.vue";
export default {
  name: "Graphism",
  components: { Project },
  data() {
    return {
      dessin: require("../assets/projet/graphism/dessin.png"),
      gamejam: require("../assets/projet/graphism/gamejam.png"),
      glitch: require("../assets/projet/graphism/glitch.png"),
      carto: require("../assets/projet/graphism/elephant.png"),
      dessinpic: require("../assets/projet/graphism/dessin1.png"),
      gamejampic: require("../assets/projet/graphism/gamejam1.jpg"),
      cartopic: require("../assets/projet/graphism/carto.jpg"),
      glitchpic: require("../assets/projet/graphism/glitch1.png")
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.project {
  margin: 10%;
}
h1 {
  margin-top: 3%;
  color: #074b46;
}
* {
  text-align: center;
}
</style>
