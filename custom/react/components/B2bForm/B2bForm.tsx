import React from "react";
import { Formik } from "formik";

import styles from "./B2bForm.css";
import { RegisterSchema } from "./B2bFormValidation";
import { AddressForm } from "./sections/AddressForm";
import { ContactForm } from "./sections/ContactForm";
import { CompanyForm } from "./sections/CompanyForm";

export interface FormFields {
    cnpj: string;
    cep: string;
    endereco: string;
    complemento: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    razaoSocial: string;
    inscricaoEstadual: string;
    nomeFantasia: string;
    telefoneComercial: string;
    telefone: string;
    nome: string;
    email: string;
}

const initialValues: FormFields = {
    cnpj: "",
    cep: "",
    endereco: "",
    complemento: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    razaoSocial: "",
    inscricaoEstadual: "",
    nomeFantasia: "",
    telefoneComercial: "",
    telefone: "",
    nome: "",
    email: "",
};


export const B2bForm: StorefrontFunctionComponent = () => {
    const onSubmit = (values: FormFields, { setSubmitting }: any) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    return (
        <div className={styles.container}>
            <Formik
                initialValues={initialValues}
                validationSchema={RegisterSchema}
                onSubmit={onSubmit}
            >
                {({
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <ContactForm></ContactForm>
                        <CompanyForm></CompanyForm>
                        <AddressForm></AddressForm>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
};
