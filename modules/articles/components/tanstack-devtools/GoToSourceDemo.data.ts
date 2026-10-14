export interface CodeLine {
  num: number;
  code: string;
}

export interface ElementSpec {
  id: string;
  file: string;
  line: number;
  col: number;
  code: CodeLine[];
}

export const ELEMENTS: ElementSpec[] = [
  {
    id: 'logo',
    file: 'Navbar.tsx',
    line: 4,
    col: 5,
    code: [
      {num: 2, code: 'export function Navbar() {'},
      {num: 3, code: '  return ('},
      {num: 4, code: '    <img className={styles.logo} src="/logo.svg" alt="Logo" />'},
      {num: 5, code: '    <nav className={styles.links}>{links}</nav>'},
      {num: 6, code: '  );'},
    ],
  },
  {
    id: 'hero',
    file: 'ProductGallery.tsx',
    line: 9,
    col: 7,
    code: [
      {num: 7, code: 'export function ProductGallery({ images }: Props) {'},
      {num: 8, code: '  return ('},
      {num: 9, code: '    <img className={styles.hero} src={images[0]} alt="" />'},
      {num: 10, code: '  );'},
    ],
  },
  {
    id: 'title',
    file: 'ProductTitle.tsx',
    line: 14,
    col: 3,
    code: [
      {num: 12, code: 'export function ProductTitle({ name }: Props) {'},
      {num: 13, code: '  return ('},
      {num: 14, code: '    <h1 className={styles.title}>{name}</h1>'},
      {num: 15, code: '  );'},
    ],
  },
  {
    id: 'price',
    file: 'ProductPrice.tsx',
    line: 6,
    col: 5,
    code: [
      {num: 4, code: 'export function ProductPrice({ amount }: Props) {'},
      {num: 5, code: '  return ('},
      {num: 6, code: '    <span className={styles.price}>{formatPrice(amount)}</span>'},
      {num: 7, code: '  );'},
    ],
  },
  {
    id: 'description',
    file: 'ProductDescription.tsx',
    line: 5,
    col: 5,
    code: [
      {num: 3, code: 'export function ProductDescription({ text }: Props) {'},
      {num: 4, code: '  return ('},
      {num: 5, code: '    <p className={styles.description}>{text}</p>'},
      {num: 6, code: '  );'},
    ],
  },
  {
    id: 'cta',
    file: 'AddToCartButton.tsx',
    line: 22,
    col: 3,
    code: [
      {num: 20, code: 'export function AddToCartButton({ onAdd }: Props) {'},
      {num: 21, code: '  return ('},
      {num: 22, code: '    <button className={styles.cta} onClick={onAdd}>'},
      {num: 23, code: '      Add to cart'},
      {num: 24, code: '    </button>'},
    ],
  },
];

export const FILE_TREE = [
  'Navbar.tsx',
  'ProductGallery.tsx',
  'ProductTitle.tsx',
  'ProductPrice.tsx',
  'ProductDescription.tsx',
  'AddToCartButton.tsx',
];
