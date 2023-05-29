import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns } from "../../config/datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import {
    collection,
    deleteDoc,
    doc,
    onSnapshot,
} from "firebase/firestore";
import Footer from "../Footer/Footer";

const Datatable = () => {
    const [data, setData] = useState([]);



    useEffect(() => {
        const unsub = onSnapshot(
            collection(db, "produits"),
            (snapShot) => {
                let list = [];
                snapShot.docs.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setData(list);
            },
            (error) => {
                console.log(error);
            }
        );

        return () => {
            unsub();
        };
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "produits", id));
            setData(data.filter((item) => item.id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={`/zoneadmin/${params.row.id}`}  style={{ textDecoration: "none" }}>
                            <div className="viewButton">Modifier</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Supprimer
                        </div>
                    </div>
                );
            },
        },
    ];
      
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Vos produits ajoutés à la boutique :
                <Link to="/zoneadmin/new" className="link">
                    Ajouter un produit
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={productColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
            <Footer/>
        </div>
    );
};



export default Datatable;