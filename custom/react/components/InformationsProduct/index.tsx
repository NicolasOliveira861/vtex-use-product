import React from "react";
import { useProduct } from "vtex.product-context";
import styles from "./styles.css";

const InformationsProduct = () => {
    const productContext = useProduct();
    if (!productContext) return;

    console.log("Contexto");
    console.log(productContext);

    const colection = productContext.product?.productClusters.find((item) => item.name === "Novo");

    console.log(colection);

    return (
        <div className={styles.containerInformations}>
            {
                colection &&
                <div className={styles.flagNovo}>
                    <span>{colection.name}</span>
                </div>
            }
            <span className={styles.text}>Marca: {productContext.product?.brand}</span>
            <span className={styles.text}>Referência: {productContext.product?.productReference}</span>
            <span className={styles.text}>Vendido por: {productContext.selectedItem?.sellers[0].sellerName}</span>
        </div>
    );
};

export default InformationsProduct;