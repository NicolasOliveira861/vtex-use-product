import React from "react";
import { useProduct } from "vtex.product-context";
import styles from "./styles.css";

const SpecificationsProduct = () => {
    const productContext = useProduct();
    if (!productContext) return;

    const especificacoes = productContext.product?.properties;

    return (
        <div className={styles.containerSpecification}>
            <span className={styles.titleSpecification}>Especificações</span>
            <div className={styles.tableSpecifications}>
                {especificacoes &&
                    especificacoes.map((item, index) => {
                        return (
                            <div className={styles.rowSpecification} key={index}>
                                <span>{item.name}:</span>
                                <span>{item.values[0]}</span>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default SpecificationsProduct;