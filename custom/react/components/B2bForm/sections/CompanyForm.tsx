import { M3Field } from "../Fields/M3Field";
import React from "react";

import styles from "./SectionFormStyles.css";
import { M3PhoneField } from "../Fields/M3PhoneField";

export const CompanyForm: StorefrontFunctionComponent = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Empresa</h2>
            <div className={styles.sectionGroup}>
                <M3Field name="corporateDocument" label="CNPJ:"></M3Field>
                <M3Field name="tradeName" label="NOME FANSTASIA:"></M3Field>
                <M3PhoneField name="businessPhone" label="TELEFONE COMERCIAL:"></M3PhoneField>
                <M3Field name="stateRegistration" label="INSCRIÇÃO ESTADUAL:"></M3Field>
                <M3Field name="corporateName" label="RAZÃO SOCIAL:"></M3Field>
            </div>
        </section>
    );
};
