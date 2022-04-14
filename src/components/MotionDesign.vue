<template>
  <div class="motiondesign">
    <h1>Motion Design</h1>
    <div class="wrapper">
      <div class="project">
        <Project
          title="Un jour sur le Mékong"
          subtitle="Janvier 2022 - Projet tutoré - Mapping vidéo"
          v-bind:picture="mekong"
          blabla="En deuxième année d’école d’ingénieur, nous avions un projet tutoré à faire. Mon groupe avait pour mission de réaliser une vidéo qui serait projetée sur la façade du cinéma de la Ferme du Buisson de Noisiel, lors de leur premier festival “Si loin, si proche”. Ce festival regroupe des films venant du Vietnam, du Laos et du Cambodge, avec pour thème principal le Mékong.
                  Nous avons eu plusieurs choses à faire. Tout d’abord, prendre les mesures de la façade, afin de projeter nos animations avec précision sur le mur et ainsi jouer avec les reliefs de la façade. Ensuite, nous devions réaliser la vidéo. Nous avons fait le choix de n’utiliser aucune prise de vue réelle et de tout faire en animation 2D ou 3D.
                  Je me suis principalement occupé des animations 2D, comme par exemple la séquence sous l’eau avec les végétaux et animaux dessiné image par image entièrement réalisé sur Photoshop, ou encore le lever du soleil réalisé sous After Effect. 
                  Après, nous avons ajouté tout  le sound design, avec les bruitages et la musique. Je me suis occupé de trouver des bruitages.
                  Enfin, à l’aide du logiciel MapMap, nous avons projeté le 29 janvier sur la façade, en positionnant minutieusement notre vidéo sur le mur.
                  Pouvoir observer le résultat et voir la réaction du public fût une expérience très enrichissante. Nous avons reçu beaucoup de retours positifs sur notre vidéo, que ce soit du public, des organisateurs du festival ou encore de nos tuteurs.
                  Je suis très fière de ce projet.
                  Ce projet sera très prochainement présenté lors du salon de présentation des PTUT de l’IMAC, en mai 2022"
          :img="mekongpic"
          :hidimg="true"
          lien="https://drive.google.com/file/d/1i6annsvJtlWgOR6oHQclXnFGCrPf06eA/view?usp=sharing"
          :hidlink="true"
          nom="Vidéo"
        />
      </div>
      <div class="project">
        <Project
          title="Totoro Animation"
          subtitle="Avril 2021 - Projet IMAC"
          v-bind:picture="totoro"
          blabla="En première année d’école d’ingénieur, nous avions un cours d’After Effects (logiciel de la suite Adobe). Nous devions réaliser en projet une vidéo de quelques secondes avec un grappin déplaçant des objets d’un point A à un point B. Alors que beaucoup ont choisi un univers avec de vrais grappins d’usine ou de fête foraine, j’ai décidé de faire ce grappin dans le film Mon voisin Totoro du studio Ghibli. Ainsi, tel un grappin, la branche d’arbre aide les Susuwatari à traverser la rivière, sous les yeux curieux de Totoro et ses amis."
          :vid="totorovid"
          :hidvid="true"
        />
      </div>
      <div class="project">
        <Project
          title="Gertie the Dinosaur"
          subtitle="Janvier 2021 - Projet IMAC"
          v-bind:picture="gif"
          blabla="Projet réalisé lors du cours Formes et Techniques de l’Image. Nous devions choisir une œuvre parmi celles vues lors des séances. Ensuite il fallait faire une réappropriation en GIF de l'œuvre en utilisant une autre technique vu en cours. J’ai donc choisi le film d’animation Gertie the Dinosaur et l’ai réalisé entièrement en Stop Motion avec du carton, des fils de fer et de la pâte à modeler. Le processus le plus long et fastidieux a été d’installer le décor, la caméra et de faire Gertie. Le problème au départ est que j’avais fait un modèle de Gertie qui faisait une trentaine de centimètres, ce qui ne rentrait pas dans le cadre. De plus, j'avais testé avec de la pâte faite maison, mais la structure interne était trop dense pour la bouger et la pâte trop molle pour rester en place. Après plusieurs essais, j’ai finalement opté pour un petit modèle fait avec de la pâte Play Doh."
          :img="gertiepic"
          :hidimg="true"
        />
      </div>
      <div class="project">
        <Project
          title="Mr BowTie"
          subtitle="Décembre 2019 - Découverte d’une nouvelle technique"
          v-bind:picture="bowtie"
          blabla="Un soir, j’ai dessiné une petite poupée avec un nœud papillon. J’ai ensuite eu l’idée de le détacher de sa feuille blanche et de l’animer image par image dans une petite histoire. 
                  C’est un de mes projets préférés. Tout d’abord, il m’a permis de tester le Stop Motion, technique utilisé en films d’animation qui m’a toujours passionné, notamment dans les films de Laïka Studio (Coraline, L’étrange pouvoir de Norman, etc.) et des films de Tim Burton (Les Noces Funèbres, L’étrange noël de Mr Jack, etc.)."
          :vid="bowtievid"
          :hidvid="true"
        />
      </div>
      <div class="project">
        <Project
          title="Flipbook"
          subtitle="Décembre 2019 - Découverte d’une nouvelle technique"
          v-bind:picture="flipbook"
          blabla="J’ai réalisé un Flipbook montrant une interaction entre une balle et un fil.
                  Pour cela, à l’aide d’une tablette lumineuse, j’ai animé page par page mes objets en les superposant les unes par rapport aux autres. Pour cela je me suis inspiré des vidéos du youtubeur Andymation."
          :vid="flipbookvid"
          :hidvid="true"
        />
      </div>
      <div class="project">
        <Project
          title="Snake and Co"
          subtitle="Janvier 2020 - Découverte d’un nouveau support"
          v-bind:picture="snake"
          blabla="Après Mr Bowtie, j’ai refait un projet de Stop Motion, mais avec en support un tableau Velleda. Ici encore, comme pour le Flipbook, on suit un petit jeu entre une balle et un fil, fil qui ondule tel un serpent. Mon passage le plus réussi est lorsqu’il retombe après avoir sauté. Ici encore, je me suis inspirée de Andymation."
          :vid="snakevid"
          :hidvid="true"
        />
      </div>
      
      
      
    </div>
  </div>
</template>

<script>
import Project from "./Project.vue";

export default {
  name: "MotionDesign",
  components: { Project },
  data() {
    return {
      flipbook: require("../assets/projet/motiondesign/flipbook.png"),
      bowtie: require("../assets/projet/motiondesign/bowtie.png"),
      snake: require("../assets/projet/motiondesign/snake.png"),
      gif: require("../assets/projet/motiondesign/gertie.jpg"),
      totoro: require("../assets/projet/motiondesign/totoro.png"),
      mekong: require("../assets/projet/motiondesign/mekong.png"),
      mekongpic: require("../assets/projet/motiondesign/mekong.jpg"),
      totorovid: require("../assets/projet/motiondesign/totoro.mp4"),
      gertiepic: require("../assets/projet/motiondesign/gertie.gif"),
      bowtievid: require("../assets/projet/motiondesign/bowtie.mp4"),
      flipbookvid: require("../assets/projet/motiondesign/flipbook.mp4"),
      snakevid: require("../assets/projet/motiondesign/snake.mp4")
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
