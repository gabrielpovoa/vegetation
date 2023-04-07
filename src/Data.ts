interface Vegetation {
  id: number;
  name: string;
  description: string;
  image: string;
  gallery: string[];
}

export interface BrazilVegetation {
  biomes: Vegetation[];
}

export const brazilVegetation: BrazilVegetation = {
  biomes: [
    {
      id: 0,
      name: "Amazônia",
      description: "A Floresta Amazônica é a maior floresta tropical do mundo e abriga a maior biodiversidade em uma área do planeta. Estende-se por nove países da América do Sul, sendo a maior parte no Brasil.",
      image: "https://static.escolakids.uol.com.br/2019/05/bioma-amazonia.jpg",
      gallery: [
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2019/08/amazonia.jpg",
        "https://www.gov.br/mma/pt-br/assuntos/noticias/no-dia-da-amazonia-conheca-curiosidades-da-maior-floresta-tropical-do-mundo-e-acoes-que-unem-preservacao-e-desenvolvimento/parna_juruena_adriano-gambarini-c-1100x777.jpg/@@images/463db33a-7e73-409f-9c06-e4b814a98643.jpeg",
        "https://static.significados.com.br/foto/amazonia.jpg",
        "https://s2.glbimg.com/cE_ou9IvZUjlvZ5xGVm_-N__Tuw=/0x0:800x533/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2020/D/F/Mam7XrT4WvoHyhhYo0Ww/de49161c-11ae-4c26-a99a-8bb4bf5b70a2-20-281-29.jpg",
        "https://portalamazonia.com/images/p/34821/b2ap3_medium_TelesPires.jpeg",
        "https://upload.wikimedia.org/wikipedia/commons/5/5b/Igarap%C3%A9_Manacapuru%2C_Amazonas.jpg",
        "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/08/34324_B401B8D72EDD4FA9-2.jpg?w=876&h=484&crop=1",
        "https://classic.exame.com/wp-content/uploads/2022/08/GettyImages-1242000049.jpg?quality=70&strip=info&w=1024",
        "https://www.apato.org.br/wp-content/uploads/2021/09/bioma-amazonico.jpg",
        "https://www.tauatour.com.br/pt-br/img/taua/amazonia-bioma.jpg",
        "https://portalamazonia.com/images/p/34183/large.jpeg",
        "https://veja.abril.com.br/wp-content/uploads/2017/03/rio-amazonas-20060602-031.jpg?quality=70&strip=info&w=1024&resize=1200,800",
        "https://amazoniareal.com.br/wp-content/uploads/2021/05/20210506_RA_Enchente05.jpg",
        "https://www.momondo.com.br/discover/wp-content/uploads/sites/282/2017/05/5d4f75ed-1634-392f-ba30-8a39368de6f6.jpg",
        "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/amazonia.jpg",
        "https://alavoura.com.br/wp-content/uploads/2020/08/lobo-guarc3a1.jpg",
      ],
    },
    {
      id: 1,
      name: "Caatinga",
      description: "A Caatinga é um bioma exclusivamente brasileiro e é conhecida como a floresta branca devido à coloração clara das árvores durante a seca. É caracterizada por ser uma região semiárida, com vegetação adaptada à falta de água.",
      image: "https://static.preparaenem.com/2020/11/1-resistente-seca.jpg",
      gallery: [
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/04/vegetacao-da-caatinga.jpg",
        "https://conexaoplaneta.com.br/wp-content/uploads/2016/04/caatinga-gambarini-abre.jpg",
        "https://i.pinimg.com/originals/1c/91/c4/1c91c4e31f067ed6a833387dfc387539.jpg",
        "https://www.letrasambientais.org.br/img/posts/mJco1w.jpg",
        "https://redecomciencia.shorthandstories.com/riquezas-da-caatinga/assets/8GYLImceRV/foto-um-800x534.jpeg",
        "https://www.cartacapital.com.br/wp-content/uploads/2021/10/Sem-T%C3%ADtulo-12-1.jpg",
        "https://geoinovacoes.com.br/wp-content/uploads/2021/04/high-angle-shot-of-the-exotic-wild-plants-growing-among-the-rocks-at-the-tatacoa-desert-colombia-1.jpg",
        "https://static.escolakids.uol.com.br/2023/02/mandacuru-em-paisagem-arida-tipica-do-bioma-caatinga.jpg",
        "https://www.alagoasnanet.com.br/v3/wp-content/uploads/2013/06/Piranhas-sediar%C3%A1-nova-UC-implantada-pela-Codevasf-e-IMA.jpg",
        "https://imagens.ebc.com.br/CttIL9kKV-0jeFW-nrklCaheq0c=/754x0/smart/https://tvbrasil.ebc.com.br/sites/default/files/thumbnails/image/nossos_biomas_caatinga_02.jpg?itok=G99iHU-S",
      ],

    },
    {
      id: 2,
      name: "Cerrado",
      description: "O Cerrado, ou Savana Brasileira, é o segundo maior bioma da América do Sul e é conhecido por sua grande biodiversidade e por abrigar muitas nascentes de rios importantes do Brasil. É caracterizado por árvores baixas e arbustos espalhados, além de gramíneas e cactos.",
      image: "https://www.efloraweb.com.br/wp-content/uploads/2020/04/cerrado-1.jpg",
      gallery: [
        "https://static.significados.com.br/foto/savanna-2796791-1920.jpg",
        "https://infoenem.com.br/wp-content/uploads/2015/11/cerrado1.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/b/b9/Chapada_Diamantina_Pai_Inacio.jpg",
        "https://www.buenasdicas.com/wp-content/uploads/2021/07/dicas-chapada-dos-veadeiros.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-s/0b/fc/79/ba/bioma-cerrado.jpg",
        "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/o-cerrado-segundo-maior-bioma-america-sul-segundo-maior-bioma-brasil-uma-formacao-vegetal-rica-em-biodiversidade-5be0a3d2105ea.jpg",
        "https://media.istockphoto.com/id/1180879558/pt/foto/landscape-of-brazilian-cerrado.jpg?s=612x612&w=0&k=20&c=P0c5b4ozGbmIGYYupsnjJyJHsbuVCoLq8SkM83tc20w=",
        "https://images01.brasildefato.com.br/91c399d86532f05061692cda2c8cbda4.jpeg",
        "https://www.amedi.org.br/wp-content/uploads/2019/11/biodiversidade_cerrado_2013-e-finalizacao-audio_010227_22.jpg",
        "https://biologo.com.br/bio/wp-content/uploads/2016/11/Cerrado.jpg",
        "https://www.sna.agr.br/wp-content/uploads/2018/09/cerrado1.jpg",
        "https://www.icmbio.gov.br/projetojalapao/images/stories/IMG_1145.jpg",
      ],

    },
    {
      id: 3,
      name: "Mata Atlântica",
      description: "A Mata Atlântica é um bioma que abriga uma grande variedade de ecossistemas e é conhecida por sua riqueza em espécies animais e vegetais. Apesar de ser um dos biomas mais ameaçados do Brasil, ainda é possível encontrar belas paisagens preservadas.",
      image: "https://www.infoescola.com/wp-content/uploads/2016/01/mata-atlantica-103469276.jpg",
      gallery: [
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/06/area-da-mata-atlantica.jpg",
        "https://ciclovivo.com.br/wp-content/uploads/2020/05/On%C3%A7a-parda-legado-das-aguas.jpg",
        "https://i0.wp.com/jornal.usp.br/wp-content/uploads/2021/01/20210120_00_mata-atlantica-1.jpg?ssl=1",
        "https://s2.glbimg.com/wye4ijAoIa1r9NK-Ntj-1zgBos8=/0x0:4224x2654/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/1/6/7vnjK3Q8y8VPX3SQMwpQ/dji-0001-dji-0009.jpg",
        "https://conexaoplaneta.com.br/wp-content/uploads/2018/02/atlas-da-costa-atlantica-litoral-brasil-foto-pixabay.jpg",
        "https://arquifln.org.br/site/wp-content/uploads/2017/04/DSC_0947.jpg",
        "https://www.neoenergia.com/pt-br/te-interessa/meio-ambiente/PublishingImages/fotos/mata_atlantica_708x324.png",
        "https://s5.static.brasilescola.uol.com.br/img/2019/04/mata-atlantica.jpg",
        "https://terravistabrasil.com.br/wp-content/uploads/2019/03/mataatlantica01.jpg",
        "https://climainfo.org.br/wp-content/uploads/2022/03/mata-atlantica.jpg",
      ],

    },
    {
      id: 4,
      name: "Pampas",
      description: "Os Pampas são uma região de pastagens que se estende do sul do Brasil até a Argentina e o Uruguai. É caracterizada por vegetação rasteira e gramíneas, além de abrigar uma grande variedade de espécies animais.",
      image: "https://beduka.com/blog/wp-content/uploads/2019/03/o-que-%C3%A9-o-pampa.jpg",
      gallery: [
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/paisagem-pampa-brasil.jpg",
        "https://www.estudopratico.com.br/wp-content/uploads/2013/04/estepes-e-pradarias-vegetacao-animais-e-fotos-estepe-1200x675.jpg",
        "https://blog.123milhas.com/wp-content/uploads/2022/12/bioma-pampa-lugares-para-conhecer-o-melhor-do-bioma-terreno-pampa-conexao123.jpg",
        "https://www.mprs.mp.br/media/areas/imprensa/midias_noticias/pampppa.jpg",
        "https://www.coladaweb.com/wp-content/uploads/2017/09/20190218-pampa.jpg",
        "https://biomasbrasileiros.files.wordpress.com/2018/05/resumo-pampa.jpg?w=616",
        "https://www.infoescola.com/wp-content/uploads/2013/02/pampas.jpg",
        "https://www.agricultura.rs.gov.br/upload/recortes/201905/27165110_87823_GDO.jpg",
        "https://beduka.com/blog/wp-content/uploads/2020/06/Flora_do_Pampa.jpg",
        "https://4.bp.blogspot.com/-GIwRmkPaW7E/Wsu6JQx8UXI/AAAAAAAAQzU/gDfS0hVye-IUt72QXLR8cF1p9VH4pAWOgCLcBGAs/s1600/PAMPA.jpg",
      ],

    },
    {
      id: 5,
      name: "Pantanal",
      description: "O Pantanal é a maior área úmida continental do planeta e é considerado um dos maiores tesouros naturais do Brasil. É caracterizado por sua fauna e flora ricas e diversificadas, incluindo espécies raras e ameaçadas de extinção.",
      image: "https://cdn.ambientes.ambientebrasil.com.br/wp-content/uploads/2009/01/capap_geologiarelevoesolos.jpg",
      gallery: [
        "https://s2.glbimg.com/tsrNIKMQFiwGZKEC_jNuvcbOh9Q=/e.glbimg.com/og/ed/f/original/2022/03/30/onca-mati-e1648430339487.jpg",
        "https://beduka.com/blog/wp-content/uploads/2020/06/Fauna_do_Pantanal.jpg.webp",
        "https://www.estudopratico.com.br/wp-content/uploads/2018/08/pantanal-bioma-1200x675.jpg",
        "https://www.essemundoenosso.com.br/wp-content/uploads/2022/09/rio-sucuri-destaque.jpg",
        "https://cdn.ambientes.ambientebrasil.com.br/wp-content/uploads/2009/01/capap_geologiarelevoesolos.jpg",
        "https://cnabrasil.org.br/storage/arquivos/PANTANAL-1.jpg",
        "https://www.sospantanal.org.br/wp-content/uploads/2017/06/slide-2.jpg",
        "https://climainfo.org.br/wp-content/uploads/2021/11/queimadas-Pantanal-810x507.jpg",
        "https://media.primeirapagina.com.br/pp-prod-container/2022/07/50147521098_b3fb2c547d_k-1.jpg",
        "https://s3.static.brasilescola.uol.com.br/be/2020/09/2-pantanal.jpg",
      ],

    }
  ]
};