const questions = [
  {
    question: "Quel est le principe actif du Doliprane ?",
    reponses: [
      { text: "Ibuprofène", correct: false },
      { text: "Paracétamol", correct: true },
      { text: "Aspirine", correct: false }
    ],
    explication: "Le principe actif du Doliprane est le paracétamol, utilisé comme antalgique et antipyrétique."
  },
  {
    question: "L'aspirine appartient à la classe des :",
    reponses: [
      { text: "Antibiotiques", correct: false },
      { text: "Anti-inflammatoires non stéroïdiens (AINS)", correct: true },
      { text: "Antiviraux", correct: false }
    ],
    explication: "L'aspirine est un AINS, c'est-à-dire un anti-inflammatoire non stéroïdien."
  },
  {
    question: "Le paracétamol est principalement utilisé pour :",
    reponses: [
      { text: "Réduire la fièvre et soulager la douleur", correct: true },
      { text: "Soigner une infection bactérienne", correct: false },
      { text: "Traiter les allergies", correct: false }
    ],
    explication: "Le paracétamol sert à réduire la fièvre et soulager la douleur."
  },
  {
    question: "Quel médicament est le plus adapté pour une inflammation ?",
    reponses: [
      { text: "Paracétamol", correct: false },
      { text: "Ibuprofène", correct: true },
      { text: "Paracétamol codéiné", correct: false }
    ],
    explication: "L'ibuprofène est un anti-inflammatoire, adapté pour traiter une inflammation."
  },
  {
    question: "L'antidote du paracétamol en cas de surdosage est :",
    reponses: [
      { text: "N-acétylcystéine", correct: true },
      { text: "Charbon actif", correct: false },
      { text: "Naloxone", correct: false }
    ],
    explication: "La N-acétylcystéine est l'antidote spécifique en cas de surdosage au paracétamol."
  },
  {
    question: "Quel médicament n’est PAS un antalgique ?",
    reponses: [
      { text: "Paracétamol", correct: false },
      { text: "Ibuprofène", correct: false },
      { text: "Amoxicilline", correct: true }
    ],
    explication: "L'amoxicilline est un antibiotique, pas un antalgique."
  },
  {
    question: "Quel effet secondaire est le plus fréquent avec les AINS ?",
    reponses: [
      { text: "Nausées", correct: false },
      { text: "Ulcères gastriques", correct: true },
      { text: "Somnolence", correct: false }
    ],
    explication: "Les AINS, comme l'ibuprofène, peuvent provoquer des ulcères gastriques."
  },
  {
    question: "On ne doit pas associer l’aspirine à :",
    reponses: [
      { text: "Du lait", correct: false },
      { text: "Un autre AINS", correct: true },
      { text: "Du paracétamol", correct: false }
    ],
    explication: "L'aspirine ne doit pas être associée à un autre AINS à cause du risque de saignements."
  },
  {
    question: "Le paracétamol est à éviter chez :",
    reponses: [
      { text: "Les personnes allergiques au gluten", correct: false },
      { text: "Les insuffisants hépatiques graves", correct: true },
      { text: "Les diabétiques", correct: false }
    ],
    explication: "Le paracétamol est contre-indiqué chez les personnes souffrant d’insuffisance hépatique grave."
  },
  {
    question: "Quel médicament est utilisé pour traiter une infection bactérienne ?",
    reponses: [
      { text: "Ibuprofène", correct: false },
      { text: "Amoxicilline", correct: true },
      { text: "Aspirine", correct: false }
    ],
    explication: "L’amoxicilline est un antibiotique efficace contre les infections bactériennes."
  }
];
