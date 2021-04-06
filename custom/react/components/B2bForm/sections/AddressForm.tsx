import React from "react";
import { M3CepField } from "../Fields/M3CepField";
import { M3Field } from "../Fields/M3Field";

import styles from "./SectionFormStyles.css";

export const AddressForm: StorefrontFunctionComponent = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>ENDEREÇO COMERCIAL</h2>
            <div className={styles.sectionGroup}>
                <M3CepField name="cep" label="CÓDIGO POSTAL:"></M3CepField>
                <M3Field name="endereco" label="ENDEREÇO:"></M3Field>
                <M3Field name="numero" label="NÚMERO:" type="number"></M3Field>
                <M3Field name="complemento" label="COMPLEMENTO:"></M3Field>
                <M3Field name="bairro" label="BAIRRO:"></M3Field>
                <M3Field name="cidade" label="CIDADE:"></M3Field>
                <M3Field name="estado" label="ESTADO:"></M3Field>
            </div>
        </section>
    );
};
