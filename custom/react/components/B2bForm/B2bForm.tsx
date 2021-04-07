import React from "react";
import { Formik, FormikHelpers } from "formik";

import styles from "./B2bForm.css";
import { RegisterSchema } from "./B2bFormValidation";
import { AddressForm } from "./sections/AddressForm";
import { ContactForm } from "./sections/ContactForm";
import { CompanyForm } from "./sections/CompanyForm";

export interface FormFields {
    corporateDocument: string;
    postalCode: string;
    street: string;
    complement: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    corporateName: string;
    stateRegistration: string;
    tradeName: string;
    businessPhone: string;
    phone: string;
    firstName: string;
    lastName: string;
    email: string;
}

const initialValues: FormFields = {
    corporateDocument: "",
    postalCode: "",
    street: "",
    complement: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
    corporateName: "",
    stateRegistration: "",
    tradeName: "",
    businessPhone: "",
    phone: "",
    firstName: "",
    lastName: "",
    email: "",
};


export const B2bForm: StorefrontFunctionComponent = () => {
    const onSubmit = (values: FormFields, { setSubmitting }: FormikHelpers<FormFields>) => {
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
