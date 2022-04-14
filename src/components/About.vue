<template>
  <div class="about">
    <h1>A Propos</h1>
    <div class="page">
      <div class="text">
        <p>
          Je m'appelle Clémence Voegelé et j'ai 21 ans. 
          <br>Je suis actuellement en deuxième année d'école d'ingénieur à L'ESIPE, 
          <br>formation IMAC ( Image Multimédia Audiovisuel et Communication ).
        </p>

        <p>
          J'ai vécu dans la région Alsace, puis en Pays-de-la-Loire. 
          <br>J'étudie actuellement à l'université Gustave Eiffel de Champs-sur-Marne.
        </p>

        <p>
          Au cours de ma scolarité, j'ai suivi un parcours très scientifique.
          <br>J'ai fait un Bac S, puis je suis partie en CPGE PCSI 
          <br>( Physique Chimie Science de l'Ingénieur ). 
          <br>C'est dans cette formation que je me suis rendu compte que 
          <br>je voulais poursuivre mes études dans la Création Digitale et l'Art.
          <br>J'ai alors découvert l'IMAC. Grâce à cette formation, 
          <br>j'ai pu découvrir les différents métiers du multimédia.
        </p>

        <p>
          Je suis passionnée par la 3D, je n'ai pas encore eu le 
          <br>temps d'en faire beaucoup mais je suis motivée ! 
          <br>J'aime aussi beaucoup l'audiovisuel (films, sons) et surtout 
          <br>le Motion Design, en particulier le Stop Motion.
          <br>J'aimerai aussi continuer à créer dans ces domaines !
        </p>

        <p>
          J'adore le théâtre ! Pendant mon adolescence, j'en ai fait pendant 4 ans
          en atelier. 
          <br>Cela m'a permis de monter sur scène et de faire des rencontres 
          <br>merveilleuses avec des professionnels du théâtre. 
          <br>Je n'ai pas pu continuer pour des raisons personnelles mais cela ne m'a pas 
          <br>empêché par la suite de m'inscrire en candidate libre à l'option théâtre du Bac 
          <br>et d'aider plus tard une Hypokhâgne à candidater pour le Conservatoire de Nantes 
          <br>en étant sa partenaire de scène ! 
          <br>Cette année j'ai me suis aussi engagé en créant le pôle théâtre du Bureau des Arts 
          <br>de l'université (voir projets autres pour plus d'informations)
        </p>

        <p>
          J'aime sortir avec des amis, chanter, voir des films, voyager. 
          <br>Les films d'animation sont une grande inspiration pour moi. 
          <br>Mes influences principales sont les films de Tim Burton, 
          <br>de Laika Studios ou encore de Disney. 
          <br>Je suis fasciné par le processus de réalisation en stop motion, 
          <br>en animation 2D et 3D et par le travail de doublage. 
          <br> J'aimerais travailler dans ces domaines-là. 
          <br>Actuellement je recherche un stage pour les mois de juin et 
          <br>juillet 2022 dans le domaine de l'animation 3D, les graphismes, 
          <br>l'audiovisuel ou le design digital. 
          <br>J'aimerai principalement travailler sur la création de ses 
          <br>contenues et approfondir mes bases.
        </p>

        <p>
          Pour toute information complémentaire, je vous propose 
          <br>de regarder mon CV ci-contre ou de me contacter par mail,
          <br>téléphone ou sur les réseaux mentionnés ci-dessous.
        </p>

        <p>Bonne découverte !</p>
        <br>
        <br>
        <br>
        <br>
      </div>
      <div class="picture">
        <img src="../assets/projet/CV.png" width="800" height=auto>
        <a href="https://drive.google.com/file/d/1rng2XpoYThaaeDrOF1NemRFdXL0oLakd/view?usp=sharing">Curriculum vitæ</a>
      </div>
    </div>
    
  </div>
    
</template>

<script>
export default {
  name: "About",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.text {
  margin-right: 10%;
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: right;
}
.picture {
  margin-top: 10%;
}
h1 {
  margin-top: 3%;
  color: #074b46;
  text-align: center;
}
p {
  margin-top: 50px;
}
body {
  margin-bottom: 10%;
}
a {
  color: black;
}
</style>
