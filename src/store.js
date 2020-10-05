function showDir(item) {
  return item;
}

const devs = [
  {
    id: 1,
    img: '01.png',
    name: 'Sung Jin-Woo',
    specialization: 'Caçador Rank Nacionl, Monarca das sombras',
    like: 8000000000,
    age: 23,
    description:
      'Por muito tempo eu fui fraco, foi subjugado, maltratado, desprezado como se fosse um líxo, mas agora isso mudou, eu ganhei um poder sem igual, agora, eu sou o deus "Sungsung"',
  },
  {
    id: 2,
    img: '02.jpeg',
    name: 'Kishimoto',
    specialization: 'Mangaka Profissional, criador de Naruto',
    like: 40000000,
    age: 23,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
  {
    id: 3,
    img: '03.jpg',
    name: 'Akira Toriyama',
    specialization: 'Mangaka Profissional, criador de Dragon Ball',
    like: 38400000,
    age: 23,
    description:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
  },
  {
    id: 4,
    img: '04.png',
    name: 'Uzumaki Naruto',
    specialization: 'Hokage da aldeia da folha',
    like: 2000000000,
    age: 23,
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of ',
  },
  {
    id: 5,
    img: '05.jpg',
    name: 'Daenerys Targaryen',
    specialization: 'Khaleesi dos Dothraki,Rainha dos Ândalos e dos pri...',
    like: 80000000,
    age: 23,
    description:
      'the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" he Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet',
  },
  {
    id: 6,
    img: '06.jpg',
    name: 'Eiichiro Oda',
    specialization: 'Mangaka Profissional, criador de One Piece',
    like: 33900000,
    age: 23,
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you',
  },
  {
    id: 7,
    img: '07.jpg',
    name: 'John Snow',
    specialization: 'Rei do Norte, Lorde comandate do castelo black',
    like: 98000000,
    age: 23,
    description:
      'need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200',
  },
  {
    id: 8,
    img: '08.jpg',
    name: 'Yoshihiro Togashi',
    specialization: 'Mangaka profissional, criador de Hunter x Hunter',
    like: 80000000,
    age: 23,
    description:
      'Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc',
  },
  {
    id: 9,
    img: '09.jpeg',
    name: 'Tite Kubo',
    specialization: 'Mangaka profissional, criador de Bleach',
    like: 107000000,
    age: 23,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 10,
    img: '10.jpg',
    name: 'Hiromu Arakawa',
    specialization: 'Mangaka profissioanal, criadora de Fullmetal Alchemist',
    like: 800000000,
    age: 23,
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 11,
    img: '11.png',
    name: 'Tyrion Lannister',
    specialization: 'Conselheiro da rainha dos Ândalos e dos primeiros ho... ',
    like: 89500000,
    age: 23,
    description:
      'Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
  },
  {
    id: 12,
    img: '12.jpg',
    name: 'Brandon Stark',
    specialization: 'O corvo de três olhos',
    like: 77700000,
    age: 23,
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,',
  },
  {
    id: 13,
    img: '13.jpg',
    name: 'Roronoa Zoro',
    specialization: 'Caçador de Piratas, imediato dos Mugiwara',
    like: 7900000000,
    age: 23,
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.',
  },
  {
    id: 14,
    img: '14.jpg',
    name: 'Rei da Noite',
    specialization: 'Rei dos vagantes da noite',
    like: 880700000,
    age: 23,
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
  },
];

module.exports = { devs };
