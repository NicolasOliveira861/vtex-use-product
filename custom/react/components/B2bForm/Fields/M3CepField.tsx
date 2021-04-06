import { useFormikContext } from "formik";
import React from "react";
import cep, { CEP } from "cep-promise";
import InputMask from "react-input-mask";

import styles from "./M3Field.css";
import { FormFields } from "../B2bForm";
import { FieldProps } from "./M3Field";

let cepConsult = 0;
export const M3CepField: StorefrontFunctionComponent<FieldProps> = (
    { type, name, label }: FieldProps) => {
    const { values, touched, handleChange, handleBlur, errors, setFieldValue } = useFormikContext<FormFields>();

    const handleCepChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        const cleanCep = value.replace("-", "").replace("_", "").trim();
        console.log(cleanCep);
        if (cleanCep.length === 8 && cepConsult <= 2) {
            cep(cleanCep).then((data: CEP) => {
                setFieldValue("cidade", data.city);
                setFieldValue("endereco", data.street);
                setFieldValue("estado", data.state);
                setFieldValue("bairro", data.neighborhood);
            });

            cepConsult++;
        }
        handleChange(e);
    };

    return <div className={styles.fieldGroup}>
        <label htmlFor={name} className={styles.fieldLabel}>{label}</label>
        <InputMask
            mask="99999-999"
            type={type ? type : "text"}
            name={name}
            onChange={handleCepChange}
            onBlur={handleBlur}
            value={values[name]}
            className={styles.fieldInput}
        />
        <span className={styles.error}> {errors[name] && touched[name] && errors[name]}</span>
    </div>;
};
