function getRandomTexture() {
  const textures = ['Smooth', 'Textured', 'Patterned', 'Grainy'];
  const randomIndex = Math.floor(Math.random() * textures.length);
  return textures[randomIndex];
}

// Function to generate random weight
function getRandomWeight() {
  const minWeight = 1; // Minimum weight in kg
  const maxWeight = 50; // Maximum weight in kg
  const randomWeight = Math.random() * (maxWeight - minWeight) + minWeight;
  return `${randomWeight.toFixed(2)} kg`;
}

// Function to generate random dimensions
function getRandomDimensions() {
  const randomWidth = Math.floor(Math.random() * 200) + 50; // Random width between 50 and 250 cm
  const randomHeight = Math.floor(Math.random() * 150) + 30; // Random height between 30 and 180 cm
  const randomDepth = Math.floor(Math.random() * 100) + 20; // Random depth between 20 and 120 cm
  return `${randomWidth}x${randomHeight}x${randomDepth} cm`;
}

export const ShopData: ShopData[] = [
  {
    id: 1,
    title: 'MALM',
    img: [
      'https://www.ikea.com/ca/en/images/products/malm-bed-frame-high-black-brown-luroey__0638608_pe699032_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/malm-bed-frame-high-black-brown-luroey__0355811_pe383063_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/malm-bed-frame-high-black-brown-luroey__1101514_pe866693_s5.jpg?f=xl',
    ],
    desc: 'Bed frame, high, black-brown/Luröy, Queen',
    texture: getRandomTexture(),
    weight: getRandomWeight(),
    dimensions: getRandomDimensions(),
    type: 'bed',
    price: '399.99',
  },
  {
    id: 2,
    title: 'KLEPPSTAD',
    img: [
      'https://www.ikea.com/ca/en/images/products/kleppstad-bed-frame-white-vissle-beige__1035340_pe840527_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/kleppstad-bed-frame-white-vissle-beige__1035342_pe840529_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/kleppstad-bed-frame-white-vissle-beige__1116344_pe872490_s5.jpg?f=xl',
    ],
    desc: 'Bed frame, white/Vissle beige, Queen',
    texture: getRandomTexture(),
    weight: getRandomWeight(),
    dimensions: getRandomDimensions(),
    type: 'bed',
    price: '199.00',
  },
  {
    id: 3,
    title: 'SLATTUM',
    img: [
      'https://www.ikea.com/ca/en/images/products/slattum-upholstered-bed-frame-knisa-light-gray__0768244_pe754388_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/slattum-upholstered-bed-frame-knisa-light-gray__0800854_ph163486_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/slattum-upholstered-bed-frame-knisa-light-gray__1101374_pe866634_s5.jpg?f=xl',
    ],
    desc: 'Upholstered bed frame, Knisa light gray, Queen',
    texture: getRandomTexture(),
    weight: getRandomWeight(),
    dimensions: getRandomDimensions(),
    type: 'bed',

    price: '279.00',
  },
  {
    id: 4,
    title: 'BLÅKULLEN',
    img: [
      'https://www.ikea.com/ca/en/images/products/blakullen-uph-bed-frame-with-corner-headboard-knisa-medium-blue__0997123_pe822608_s5.jpg?f=xl',

      'https://www.ikea.com/ca/en/images/products/blakullen-uph-bed-frame-with-corner-headboard-knisa-medium-blue__1036897_pe838565_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/blakullen-uph-bed-frame-with-corner-headboard-knisa-medium-blue__1063812_ph182862_s5.jpg?f=xl',
    ],
    desc: 'Uph bed frame with corner headboard, Knisa medium blue, Twin',
    texture: getRandomTexture(),
    weight: getRandomWeight(),
    dimensions: getRandomDimensions(),
    type: 'bed',
    price: '249.00',
  },
  {
    id: 5,
    title: 'SANDSBERG',
    img: [
      'https://www.ikea.com/ca/en/images/products/sandsberg-table-black__1074348_pe856162_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/sandsberg-table-black__1016429_pe830390_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/sandsberg-table-black__1056656_pe848458_s5.jpg?f=xl',
    ],
    desc: 'Table, black, 110x67 cm (43 1/4x26 3/8 ")',
    texture: getRandomTexture(),
    weight: getRandomWeight(),
    dimensions: getRandomDimensions(),
    type: 'table',
    price: '59.99',
  },
  {
    id: 6,
    title: 'NORDVIKEN',
    img: [
      'https://www.ikea.com/ca/en/images/products/nordviken-bar-table-black__0714197_pe729961_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/nordviken-bar-table-black__0797141_pe766707_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/nordviken-bar-table-black__0797161_pe766760_s5.jpg?f=xl',
    ],
    desc: 'Bar table, black, 140x80x105 cm (55 1/8x31 1/2x41 3/8 ")',
    texture: getRandomTexture(),
    weight: getRandomWeight(),
    dimensions: getRandomDimensions(),
    type: 'table',
    price: '399.00',
  },
  {
    id: 7,
    title: 'LACK',
    img: [
      'https://www.ikea.com/ca/en/images/products/lack-side-table-white__0702210_pe724345_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/lack-side-table-white__1057263_pe848812_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/lack-side-table-white__0702212_pe724346_s5.jpg?f=xl',
    ],
    desc: 'Side table, white, 55x55 cm (21 5/8x21 5/8 ")',
    texture: getRandomTexture(),
    weight: getRandomWeight(),
    dimensions: getRandomDimensions(),
    type: 'table',
    price: '19.99',
  },
  {
    id: 8,
    title: 'ÖSTANÖ',
    img: [
      'https://www.ikea.com/ca/en/images/products/oestanoe-chair-red-brown-remmarn-red-brown__1120081_pe873713_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/oestanoe-chair-red-brown-remmarn-red-brown__1175276_ph190422_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/oestanoe-chair-red-brown-remmarn-red-brown__1218939_ph190421_s5.jpg?f=xl',
    ],
    desc: 'Chair, red-brown Remmarn/red-brown',
    texture: getRandomTexture(),
    weight: getRandomWeight(),
    dimensions: getRandomDimensions(),
    type: 'chair',
    price: '30.00',
  },
  {
    id: 9,
    title: 'BERGMUND',
    img: [
      'https://www.ikea.com/ca/en/images/products/bergmund-chair-cover-gunnared-medium-gray__0859533_pe780957_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/bergmund-chair-cover-gunnared-medium-gray__0930216_pe790638_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/bergmund-chair-cover-gunnared-medium-gray__1142350_pe881249_s5.jpg?f=xl',
    ],
    desc: 'Chair cover, Gunnared medium gray',
    texture: getRandomTexture(),
    weight: getRandomWeight(),
    dimensions: getRandomDimensions(),
    type: 'chair',
    price: '25.00',
  },
  {
    id: 10,
    title: 'HUVUDSPELARE',
    img: [
      'https://www.ikea.com/ca/en/images/products/huvudspelare-gaming-chair-black__1039672_pe840417_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/huvudspelare-gaming-chair-black__1039673_pe840419_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/huvudspelare-gaming-chair-black__1039674_pe840418_s5.jpg?f=xl',
    ],
    desc: 'Gaming chair, black',
    texture: getRandomTexture(),
    weight: getRandomWeight(),
    dimensions: getRandomDimensions(),
    type: 'chair',
    price: '129.00',
  },
  {
    id: 11,
    title: 'STEFAN',
    img: [
      'https://www.ikea.com/ca/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/stefan-chair-brown-black__0209638_pe222050_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/stefan-chair-brown-black__1052538_pe846195_s5.jpg?f=xl',
    ],
    desc: 'Chair, brown-black',
    texture: getRandomTexture(),
    weight: getRandomWeight(),
    dimensions: getRandomDimensions(),
    type: 'chair',
    price: '55.00',
  },
  {
    id: 12,
    title: 'LINANÄS',
    img: [
      'https://www.ikea.com/ca/en/images/products/linanaes-sofa-vissle-dark-gray__1013898_pe829450_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/linanaes-sofa-vissle-dark-gray__1013900_pe829454_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/linanaes-sofa-vissle-dark-gray__1013901_pe829453_s5.jpg?f=xl',
    ],
    desc: 'Sofa, Vissle dark gray',
    texture: getRandomTexture(),
    weight: getRandomWeight(),
    dimensions: getRandomDimensions(),
    type: 'sofa',
    price: '399.00',
  },
  {
    id: 13,
    title: 'MORABO',
    img: [
      'https://www.ikea.com/ca/en/images/products/morabo-sofa-gunnared-dark-gray-wood__0602117_pe680186_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/morabo-sofa-gunnared-dark-gray-wood__0815940_pe773127_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/morabo-sofa-gunnared-dark-gray-wood__0813416_ph166494_s5.jpg?f=xl',
    ],
    desc: 'Sofa, Gunnared dark gray/wood',
    texture: getRandomTexture(),
    weight: getRandomWeight(),
    dimensions: getRandomDimensions(),
    type: 'sofa',
    price: '799.00',
  },
  {
    id: 14,
    title: 'JÄTTEBO',
    img: [
      'https://www.ikea.com/ca/en/images/products/jaettebo-sectional-6-seat-with-chaise-right-with-headrests-samsala-gray-beige__1179838_pe896111_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/jaettebo-sectional-6-seat-with-chaise-right-with-headrests-samsala-gray-beige__1179837_pe896113_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/jaettebo-sectional-6-seat-with-chaise-right-with-headrests-samsala-gray-beige__1109648_pe870137_s5.jpg?f=xl',
    ],
    desc: 'Sectional, 6-seat, with chaise, right with headrests/Samsala gray-beige',
    texture: getRandomTexture(),
    weight: getRandomWeight(),
    dimensions: getRandomDimensions(),
    type: 'sofa',
    price: '6110.00',
  },

  {
    id: 15,
    title: 'BARLAST',
    img: [
      'https://www.ikea.com/ca/en/images/products/barlast-floor-lamp-black-white__0957676_pe805130_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/barlast-floor-lamp-black-white__0957677_pe805131_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/barlast-floor-lamp-black-white__0957678_pe805133_s5.jpg?f=xl',
    ],
    desc: 'Floor lamp, black/white, 150 cm (59 ")',
    texture: getRandomTexture(),
    weight: getRandomWeight(),
    dimensions: getRandomDimensions(),
    type: 'lamp',
    price: '18.99',
  },

  {
    id: 16,
    title: 'TVÄRHAND',
    img: [
      'https://www.ikea.com/ca/en/images/products/tvaerhand-table-lamp-black-bamboo__1013660_pe829291_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/tvaerhand-table-lamp-black-bamboo__1013687_pe829293_s5.jpg?f=xl',
      'https://www.ikea.com/ca/en/images/products/tvaerhand-table-lamp-black-bamboo__1013683_pe829292_s5.jpg?f=xl',
    ],
    desc: 'Table lamp, black/bamboo',
    texture: getRandomTexture(),
    weight: getRandomWeight(),
    dimensions: getRandomDimensions(),
    type: 'lamp',
    price: '16.99',
  },
];
