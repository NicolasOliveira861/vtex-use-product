import React from "react";
import { M3Field } from "../Fields/M3Field";
import { M3PhoneField } from "../Fields/M3PhoneField";

import styles from "./SectionFormStyles.css";

export const ContactForm: StorefrontFunctionComponent = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contato</h2>
            <div className={styles.sectionGroup}>
                <M3Field name="nome" label="NOME:"></M3Field>
                <M3Field name="email" label="E-MAIL:"></M3Field>
                <M3PhoneField name="telefone" label="TELEFONE:"></M3PhoneField>
            </div>
        </section>
    );
};
