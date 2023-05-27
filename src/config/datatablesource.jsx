export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "nameProduct",
    headerName: "Nom produit",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.nameProduct}
        </div>
      );
    },
  },
  {
    field: "description",
    headerName: "Description",
    width: 230,
  },

  {
    field: "prix",
    headerName: "Prix",
    width: 100,
  },

  {
    field: "categorie",
    headerName: "Catégorie",
    width: 160,
  },
];

//temporary data
export const productRows = [
  {
    id: 1,
    nameProduct: "Arche",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Une arche",
    categorie: "Mariage",
    prix: 35 + '€',
  },
  {
    id: 2,
    nameProduct: "Ballon",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Des ballons pour mariage",
    categorie: "Mariage",
    prix: 24 + '€',
  },
  {
    id: 3,
    nameProduct: "Lampe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Une superbe lampe",
    categorie: "Anniversaire",
    prix: 61 + '€',
  },
  {
    id: 4,
    nameProduct: "Poster",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Un poster pour décoré",
    categorie: "Religion",
    prix: 16 + '€',
  },
  {
    id: 5,
    nameProduct: "Lumière",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "De jolies lumières",
    categorie: "Gender",
    prix: 22 + '€',
  },
  {
    id: 6,
    nameProduct: "Nappe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Une super nappe de table",
    categorie: "Religion",
    prix: 15 + '€',
  },
  {
    id: 7,
    nameProduct: "Table",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Une grande table",
    categorie: "Gender",
    prix: 448 + '€',
  },
  {
    id: 8,
    nameProduct: "Chaise",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Une chaises",
    categorie: "Religion",
    prix: 376 + '€',
  },
  {
    id: 9,
    nameProduct: "Housse",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Une housse de chaise",
    categorie: "Anniversaire",
    prix: 65 + "€",
  },
  {
    id: 10,
    nameProduct: "Verre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Des verres",
    categorie: "Religion",
    prix: 5 + "€",
  },

];