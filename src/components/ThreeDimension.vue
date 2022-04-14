<template>
  <div class="threedimension">
    <h1>3D</h1>
    <div class="wrapper">
      <div class="project">
        <Project
          title="3D Project"
          subtitle="Décembre 2021 - Projet IMAC"
          v-bind:picture="scene"
          blabla="En deuxième année, nous avons découvert le logiciel Blender et la modélisation de scène 3D. Pour notre projet final, nous devions réaliser une nature morte fixe. Beaucoup on fait des tables avec des corbeilles de fruits. Un matin, j’ai eu l’idée de réaliser un parc de nouveau né avec plusieurs jeux à l’intérieur. J’ai réalisé toute la modélisation en live sur Twitch. J’ai beaucoup aimé créer le jeu en bois avec les fils et les petites boules, et aussi le tapis. Ils ont été deux vrais défis techniques à réaliser. Grâce à ce projet j’ai découvert la création 3D et j’ai une réelle passion pour ce domaine. J’aimerai approfondir mes connaissances dans ce domaine."
          :img="scenepic"
          :hidimg="true"
        />
      </div>
      <div class="project">
        <Project
          title="SantIMAC"
          subtitle="Janvier 2022 - Projet personnel"
          v-bind:picture="santimac"
          blabla="Cette année, nous avons fait à l’IMAC un père noël mystère. J’ai décidé de réaliser un dessin d’un bonhomme de neige modélisé sur Blender en 3D. A cela j’ai ajouté des bretzels fait maison. C’est un petit exercice que j’ai vraiment apprécié de faire."
          :img="santimacpic"
          :hidimg="true"
        />
      </div>
      <div class="project">
        <Project
          title="Title Sequence"
          subtitle="Mai 2022 - Projet IMAC [En cours]"
          v-bind:picture="title"
          blabla="Nous devons réaliser le Title Sequence d'un film que nous avons inventé. Notre binôme a choisi de réaliser animer cette vidéo entièrement en 3D grâce au logiciel Blender, After effects et Premiere pro. "
          :img="titlepic"
          :hidimg="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "./Project.vue";
export default {
  name: "ThreeDimension",
  components: { Project },
  data() {
    return {
      scene: require("../assets/projet/threedimension/scene.png"),
      santimac: require("../assets/projet/threedimension/snow.png"),
      title: require("../assets/projet/projet.jpeg"),
      scenepic: require("../assets/projet/threedimension/scene2.png"),
      santimacpic: require("../assets/projet/threedimension/snow2.png"),
      titlepic: require("../assets/no-image-available.jpeg")
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
* {
  text-align: center;
}
h1 {
  color: #074b46;
}
</style>
