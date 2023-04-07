interface Vegetation {
  name: string;
  description: string;
  image: string;
}

export interface BrazilVegetation {
  biomes: Vegetation[];
}

export const brazilVegetation: BrazilVegetation = {
  biomes: [
    {
      name: "Amazônia",
      description: "A Floresta Amazônica é a maior floresta tropical do mundo e abriga a maior biodiversidade em uma área do planeta. Estende-se por nove países da América do Sul, sendo a maior parte no Brasil.",
      image: "https://static.escolakids.uol.com.br/2019/05/bioma-amazonia.jpg"
    },
    {
      name: "Caatinga",
      description: "A Caatinga é um bioma exclusivamente brasileiro e é conhecida como a floresta branca devido à coloração clara das árvores durante a seca. É caracterizada por ser uma região semiárida, com vegetação adaptada à falta de água.",
      image: "https://static.preparaenem.com/2020/11/1-resistente-seca.jpg"
    },
    {
      name: "Cerrado",
      description: "O Cerrado é o segundo maior bioma da América do Sul e é conhecido por sua grande biodiversidade e por abrigar muitas nascentes de rios importantes do Brasil. É caracterizado por árvores baixas e arbustos espalhados, além de gramíneas e cactos.",
      image: "https://www.efloraweb.com.br/wp-content/uploads/2020/04/cerrado-1.jpg"
    },
    {
      name: "Mata Atlântica",
      description: "A Mata Atlântica é um bioma que abriga uma grande variedade de ecossistemas e é conhecida por sua riqueza em espécies animais e vegetais. Apesar de ser um dos biomas mais ameaçados do Brasil, ainda é possível encontrar belas paisagens preservadas.",
      image: "https://www.infoescola.com/wp-content/uploads/2016/01/mata-atlantica-103469276.jpg"
    },
    {
      name: "Pampas",
      description: "Os Pampas são uma região de pastagens que se estende do sul do Brasil até a Argentina e o Uruguai. É caracterizada por vegetação rasteira e gramíneas, além de abrigar uma grande variedade de espécies animais.",
      image: "https://beduka.com/blog/wp-content/uploads/2019/03/o-que-%C3%A9-o-pampa.jpg"
    },
    {
      name: "Pantanal",
      description: "O Pantanal é a maior área úmida continental do planeta e é considerado um dos maiores tesouros naturais do Brasil. É caracterizado por sua fauna e flora ricas e diversificadas, incluindo espécies raras e ameaçadas de extinção.",
      image: "https://cdn.ambientes.ambientebrasil.com.br/wp-content/uploads/2009/01/capap_geologiarelevoesolos.jpg"
    }
  ]
};