import project1 from "../assets/projects/Uliza.webp";
import project2 from "../assets/projects/Vitriare.webp";
import project3 from "../assets/projects/project-4.jpg";
import project4 from "../assets/projects/Goney.webp";

export const HERO_CONTENT = `Je suis un développeur full stack passionné, avec un talent pour la création d'applications web robustes et évolutives. Avec 3 ans d'expérience pratique, j'ai affiné mes compétences en technologies front-end telles que React et Next.js, ainsi qu'en technologies back-end comme Laravel et MySQL. Mon objectif est de tirer parti de mon expertise pour créer des solutions innovantes qui stimulent la croissance des entreprises et offrent des expériences utilisateur exceptionnelles.`;

export const ABOUT_TEXT = `Je suis un développeur full stack polyvalent, passionné par la création d'applications web intuitives et performantes. Avec 5 ans d'expérience, j'ai maîtrisé des technologies comme React, Next.js, Laravel et MySQL. Curieux et adaptable, je m'épanouis dans les environnements collaboratifs et aime relever des défis complexes pour créer des solutions de qualité. En dehors du code, je reste actif, explore de nouvelles technologies et contribue à des projets open-source.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Front-End Developer",
    company: "Octogone.",
    description: `Conception et développement d'interfaces utilisateur pour des applications web à l'aide de Next.js et React. Collaboration étroite avec les développeurs backend pour intégrer les composants frontend avec les API Laravel. Mise en œuvre de conceptions réactives et optimisation des performances du frontend.`,
    technologies: ["Javascript", "React.js", "Next.js"],
  },
  {
    year: "2022 - 2023",
    role: "Full-stack Developer",
    company: "Skynet Burundi",
    description: `Membre d'une équipe dans le développement et la maintenance d'applications web en utilisant Laravel, Html, tailwindCss JQuery. Collaboré avec les parties prenantes pour définir les exigences et les délais du projet.`,
    technologies: ["HTML", "CSS", "Tailwindcss", "JavaScript", "JQuery", "AJAX", "Laravel", "mySQL"],
  },
  
];

export const PROJECTS = [
  {
    title: "Uliza services",
    image: project1,
    description:
      "Uliza services est une plateforme de petites annonces,elle permet la mise en relation entre l'offre et la demande locale; Elle rend possible l'achat et la vente de tout ce qui est légal sans exiger un déplacement.",
    technologies: ["HTML", "Tailwindcss", "JQuery", "Laravel", "MySQL"],
  },
  {
    title: "Vitriare",
    image: project2,
    description:
      "Vitriare est une plateforme innovante qui révolutionne la manière dont les créateurs de contenu partagent leurs œuvres avec leur public. Grâce à des fonctionnalités interactives telles que des commentaires, des likes et des partages, Vitriare favorise l'engagement et la collaboration entre les créateurs et leur public. ",
    technologies: ["HTML", "Tailwindcss", "JQuery", "Laravel", "MySQL"],
  },
  {
    title: "CARH",
    image: project3,
    description:
      "CARH est un logiciel orienté finance banque... avec sa grande capacité à gérer les clients dans diverse catégorie d'épargne tout en leur donnant la capacité de demander un crédit. le produit CARH a la capacité de calculer votre delai de paiement avec une grande précision sur le montant et la date de chaque paiement ; pour tout client avec son algorthme basé sur le calcul de mensualité...",
    technologies: ["HTML", "CSS","JQuery", "Tailwindcss", "Laravel"],
  },
  {
    title: "Goney CD",
    image: project4,
    description:
      "Goney est une plateforme de paiement basée dans la ville de Goma province Nord-Kivu, République démocratique du Congo ,qui permet à ses utilisateurs de faire des achats en ligne, de payer dans des magasins avec leur carte Goney, et de transférer de l'argent entre amis, tout en assurant la sécurité des transactions et des données de ses utilisateurs.",
    technologies: ["HTML", "CSS", "React", "Laravel"],
  },
  
];

export const CONTACT = {
  address: "15th Cibitoke Avenue No 36, Bujumbura, Burundi ",
  phoneNo: "+243 851 985 165 ",
  email: "victorienilunga@gmail.com",
};
