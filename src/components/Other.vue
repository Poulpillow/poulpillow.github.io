<template>
  <div class="other">
    <h1>Other projects</h1>
    <div class="wrapper">
      <div class="project">
        <Project
          title="Atelier théâtre"
          subtitle="2021/2022 - Engagement Associatif"
          v-bind:picture="theatre"
          blabla="Pour l’année 2021/2022, j’ai décidé de fonder un pôle théâtre au Bureau des Arts de l’université. Avec l’aide de deux personnes j’ai tenu tout au long de l’année un atelier hebdomadaire de 2h, où nous invitons étudiants débutants ou professionnels à réaliser des exercices sur différents domaines du théâtre : travail sur la voix, le corps, les intéractions avec les autres, l’improvisation, etc. 
Mon but est de poser des bases solides dans ce pôle afin que l’année prochaine les prochains responsables théâtre puissent créer un événement tel que les 48h de la scène ou encore préparer une pièce de théâtre à jouer en fin d’année. Je suis très fière de ce que nous avons accompli jusqu’à présent. Cet atelier m’a permis de transmettre ma passion pour le théâtre à d’autres personnes et m’a fait progresser en tant qu’intervenante et pédagogue."
          :img="theatrepic"
          :hidimg="true"
        />
      </div>
      <div class="project">
        <Project
          title="E-Taverne"
          subtitle="2021/2022 - Engagement Associatif"
          v-bind:picture="etaverne"
          blabla="Je suis actuellement présidente de l’association de streaming de l’université Gustave Eiffel. Nous proposons du contenu vidéo diffusé en live sur la plateforme Twitch. J’ai été chargé de diriger l’équipe, faire la communication, gérer le matériel et les réunions et organiser les évènements. Prochainement nous allons faire notre plus grand évènement qui se trouve être un 48h du streaming où nous collecterons des dons pour les reverser à un organisme humanitaire.
Cette opportunité m’a permis de découvrir de nombreuses responsabilités en tant que président d’une association, j’ai aussi pû développer mes compétences en gestion de réunion, et organisation d'une équipe."
          :img="etavernepic"
          :hidimg="true"
          lien="https://www.twitch.tv/e_taverne"
          :hidlink="true"
          nom="Chaine Twitch"
        />
      </div>
      <div class="project">
        <Project
          title="Esthétique Algorithmique - Recoding"
          subtitle="Mars 2021 - Projet individuel IMAC"
          v-bind:picture="eaone"
          blabla="Nous devions choisir une œuvre digitale des années 60 et tenter de coder à l’instar de l’artiste pour refaire l'œuvre. Nous devions ensuite proposer des améliorations. Nous avons utilisé le langage p5.js. Je n’avais jamais utilisé ce langage avant et j’ai beaucoup appris grâce à ce projet. J’ai aussi appris à bien analyser et comprendre les techniques et méthodes de l’artiste afin de reproduire son œuvre. J’ai ensuite ajouté des options tel que changer la palette de couleurs, pouvoir choisir un nombre de points pour les placer ensuite comme l’utilisateur le veut. J’ai vraiment apprécié ce projet !"
          :img="eaonepic"
          :hidimg="true"
          lien="https://poulpillow.github.io/Algorithmic-Aesthetics/"
          :hidlink="true"
          nom="Test ici"
        />
      </div>
      <div class="project">
        <Project
          title="Esthétique Algorithmique - Vidéo IA"
          subtitle="Mai 2021 - Projet IMAC"
          v-bind:picture="eatwo"
          blabla="Par binôme, nous devions coder en p5.js et travailler avec une IA afin de réaliser une vidéo artistique et justifier notre démarche et notre concept. Nous avons alors pris une IA qui générait des dessins de modèles des années 50 et en ajoutant notre code, nous avons pu créer un mouvement qui ressemble à une danse. Comprendre le fonctionnement de l’IA au départ à été vraiment complexe mais nous sommes fiers du résultat. "
          :vid="eatwovid"
          :hidvid="true"
        />
      </div>
      <div class="project">
        <Project
          title="Space Run 3D"
          subtitle="Décembre 2021 - Projet IMAC"
          v-bind:picture="spacerun"
          blabla="Nous avons dû réaliser en OpenGL un jeu qui ressemble à un Temple Run. Nous avons décidé de l’adapter à un univers de science fiction.
Envolez-vous dans votre vaisseau spatial et tentez d’échapper aux ennemis ! Attention de nombreux obstacles se trouveront sur votre chemin ! 
Nous avions beaucoup de contraintes à respecter. Il fallait un jeu visuel, avec les fonctionnalités de déplacements, de sauts, la génération d’obstacles et le ramassage de pièces. J’ai été en charge des déplacements de la caméra, ainsi qu’en partie de la génération de pièces et d’obstacles. Je me suis aussi appliquée à la physique des sauts et choisi les textures 2D. Ce fut un projet très difficile mais j’ai beaucoup appris en C++ et en OpenGL grâce à lui."
          lien="https://github.com/adudree/imacrun3D"
          :hidlink="true"
          nom="Lien Git"
        />
      </div>
      <div class="project">
        <Project
          title="Workshop"
          subtitle="Octobre 2020 - Projet IMAC"
          v-bind:picture="workshop"
          blabla="Pendant une semaine, nous avons fait un exercice d’écriture : nous devions écrire un texte et le travailler pour ensuite le mettre en scène dans une vidéo ou un audio. J’ai décidé de faire un texte poétique rythmé où chaque ligne est composée uniquement de 2 ou 3 mots. J’ai ensuite enregistré une amie. Le résultat est un audio de 3 minutes. J’ai beaucoup aimé travailler sur ce texte, il m’a permis de m’exprimer dans une phase de ma vie où j’avais de nombreux problèmes personnels mais aussi de m’améliorer en écriture et en montage audio."
          :aud="workshopaud"
          :hidaud="true"
        />
      </div>
      <div class="project">
        <Project
          title="Conte audio"
          subtitle="Mai 2021 - Projet IMAC"
          v-bind:picture="conte"
          blabla="En Techniques du Son, nous devions réaliser un audio de quelques minutes sur Pro Tools. Nous avons décidé avec mon binôme de faire une réinterprétation du conte le Petit Chaperon Rouge.
Nous avons donc réécrit l'histoire. Nous nous sommes ensuite enregistrés puis nous avons monté l'audio sur protools.
Je me suis occupé en partie de l'histoire, j'ai ensuite enregistré et doublé les voix, puis je me suis occupé de la partie du son en MIDI et de la recherche des bruitages et des musiques. 
Je n'avais jamais vraiment travaillé de son auparavant et ce fut une très belle expérience. Nous avons pris beaucoup de plaisir à doubler et à travailler le son"
          :aud="conteaud"
          :hidaud="true"
        />

      </div>
      <div class="project">
        <Project
          title="Portfolio"
          subtitle="Mars 2022 - Projet Personnel"
          v-bind:picture="portfolio"
          blabla="J’ai réalisé ce portfolio avec Vue.js. Pendant 48h, avec une amie, nous avons codé notre portfolio. Nous avons principalement fait la structure du site pendant ces 48h, puis nous avons continué ensuite la mise en page et le contenu. Nous sommes fiers de ce que nous avons fait."
          lien="https://github.com/Poulpillow/poulpillow.github.io"
          :hidlink="true"
          nom="Lien Git"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "./Project.vue";
export default {
  name: "Other",
  components: { Project },
  data() {
    return {
      theatre: require("../assets/projet/other/803z.png"),
      etaverne: require("../assets/projet/other/etaverne.jpg"),
      eaone: require("../assets/projet/other/ea1.png"),
      eatwo: require("../assets/projet/other/ea2.png"),
      spacerun: require("../assets/projet/other/spacerun.png"),
      workshop: require("../assets/projet/projet.jpeg"),
      portfolio: require("../assets/projet/projet.jpeg"),
      conte: require("../assets/projet/projet.jpeg"),
      workshopaud: require("../assets/projet/other/workshop.mp3"),
      conteaud: require("../assets/projet/other/conte.mp3"),
      theatrepic: require("../assets/projet/other/theatre.png"),
      etavernepic: require("../assets/projet/other/etaverne2.jpg"),
      eatwovid: require("../assets/projet/other/eatwo.mp4"),
      eaonepic: require("../assets/projet/other/recoding.jpg"),
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
