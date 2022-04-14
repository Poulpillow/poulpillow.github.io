<template>
  <div class="audiovisual">
    <h1>Audiovisual</h1>
    <div class="wrapper">
      <div class="project">
        <Project
          title="Porte-à-porte"
          subtitle="Novembre 2020 - 48h du court-métrage"
          v-bind:picture="porteaporte"
          blabla="Lors du 48h du court-métrage de l’association 803Z, nous avons dû réaliser un film de moins de 10 minutes. Le thème était “Présent” et nous avions comme contrainte d’ajouter un son de brosse à dent dans notre vidéo. Je me suis principalement occupée de la préproduction, avec l’écriture du scénario, mais aussi la préparation de la journée de tournage du samedi. J’ai ensuite été actrice en production, puis chargée de trouver des bruitages et des musiques libres de droit en post-production. Nous avons voulu réaliser une vidéo comique et avec peu de dialogues puisque nous n’avions pas de micros lors du tournage. C’était la première fois que je réalisais un vrai court-métrage et ce fut une événement très enrichissant. J’ai beaucoup appris en un week-end, que ce soit en écriture mais aussi en réalisation et direction d’une équipe."
          lien="https://www.youtube.com/watch?v=5xPWqGNKWeI&list=PLlO9PoOts5ofAWG6wnb8bvwkVH-2hGIew&index=12"
          :hidlink="true"
          nom="Vidéo"
        />
      </div>
      <div class="project">
        <Project
          title="Sale temps pour Johnny"
          subtitle="Novembre 2021 - 48h du court-métrage"
          v-bind:picture="johnny"
          blabla="Pour la deuxième édition des 48h de l’association 803Z, nous avions à nouveau un film court à réaliser, avec pour thème “Conflit” et en contrainte nous devions ajouter trois sons (notification d’un téléphone, griffonnage sur papier et tic tac d’une horloge). Nous avons choisi dès le début de l’événement de faire un Nanar, c’est-à-dire un film qui se veut exprès d’être mauvais ou abstrait afin de susciter le rire. Nous nous sommes beaucoup amusés car le Nanar permet beaucoup de libertés au niveau de l’écriture.
J’ai été chargé de l’écriture du scénario, ainsi que de l’organisation du matériel. J’ai ensuite été actrice puis j’ai à nouveau cherché en post production les bruitages et musiques libre de droit. Cette année-là nous avons pû faire du présentiel et cela a été un vrai plaisir de travailler avec mon équipe. Nous avons aussi eu le plaisir de voir notre court-métrage être diffusé en salle au cinéma de la Ferme du Buisson lors de la remise des prix."
          lien="https://www.youtube.com/watch?v=fmndi_0ZsCc&list=PLlO9PoOts5ocL3we1SMXeHArj_ZaIEhM3&index=4"
          :hidlink="true"
          nom="Vidéo"
        />
      </div>
      <div class="project">
        <Project
          title="Installation en cours ..."
          subtitle="Décembre 2020 - Projet IMAC"
          v-bind:picture="installation"
          blabla="En première année d’école d’ingénieur, nous avons dû réaliser un court-métrage avec une totale liberté sur le thème et le scénario. Par groupe de quatre, nous avons décidé de faire un court métrage sans dialogues et très léger. Nous avions décidé de faire des effets spéciaux avec ma main qui traverse l’écran de l’ordinateur. Pour cela nous avons utilisé un saladier rempli de lait avec du colorant vert et de la menthe pour faire un écran fond vert. Nous sommes fiers d’avoir réussi à réaliser cet effet et ce court-métrage. J’ai été chargé de l’écriture du scénario, ainsi qu' en partie du découpage technique. J’ai ensuite été actrice et me suis occupée d’une partie du dérushage et pré-montage de la vidéo. J’ai aussi cherché les bruitages, ainsi que les musiques."
          lien="https://youtu.be/YF7cRz_AAXE"
          :hidlink="true"
          nom="Vidéo"
        />
      </div>
      <div class="project">
        <Project
          title="Anxiété"
          subtitle="Décembre 2020 - Participation court-métrage"
          v-bind:picture="anxiete"
          blabla="J'ai participé en tant que chanteuse et actrice à un court-métrage réalisé par mes amis. Je me suis vraiment amusé à enregistrer ma voix et à tourner avec elles."
          lien="https://drive.google.com/file/d/1DuWXPDs6p0dPONPgIvKabP3h4FTYP3sj/view?usp=sharing"
          :hidlink="true"
          nom="Vidéo"
        />
      </div>
      <div class="project">
        <Project
          title="20 Janvier"
          subtitle="Décembre 2021 - Projet IMAC"
          v-bind:picture="janvier"
          blabla="Pour la deuxième année, nous devions faire un nouveau court-métrage, mais cette fois-ci avec un grand soin appliqué au scénario et à la réalisation de la vidéo. Chaque choix devait être justifié. Notre thème était le Transhumanisme. Nous avons alors décidé de réaliser un drame futuriste. J'ai participé à l'écriture du scénario, à la création du découpage technique. J'ai aussi été l'ingénieur son et la perchiste lors du tournage. Enfin j'ai participé au montage et au choix des bruitages et musiques. Cela a vraiment été un défi. Nous avons dû nous adapter aux aléas et avons vraiment réfléchi à ce que nous voulions transmettre comme message, comme histoire au spectateur."
          lien="https://drive.google.com/file/d/1D6y2NB2YJ04OZW8nx-ewIqDZUqizOO22/view?usp=sharing"
          :hidlink="true"
          nom="Vidéo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "./Project.vue";
export default {
  name: "Audiovisual",
  components: { Project },
  data() {
    return {
      pub: require("../assets/projet/projet.png"),
      porteaporte: require("../assets/projet/audiovisual/porte.jpg"),
      johnny: require("../assets/projet/audiovisual/johnny.jpg"),
      installation: require("../assets/projet/audiovisual/ordi.png"),
      anxiete: require("../assets/projet/audiovisual/pomme.png"),
      janvier: require("../assets/projet/audiovisual/janvier.png")
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
