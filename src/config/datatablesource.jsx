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
          {params.row.nom}
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
