import React from "react";
import { Formik, FormikHelpers } from "formik";

import styles from "./B2bForm.css";
import { registerSchema } from "./B2bFormRegisterSchema";
import { AddressForm } from "./sections/AddressForm";
import { ContactForm } from "./sections/ContactForm";
import { CompanyForm } from "./sections/CompanyForm";
import saveData from "./B2bFormSaveData";

export interface FormFields {
    corporateDocument: string;
    document: string;
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
    document: "",
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
    const onSubmit = async (values: FormFields, { setSubmitting }: FormikHelpers<FormFields>) => {
        try {
            await saveData(values);
            setSubmitting(false);
            console.log("sucesso");
        } catch (error) {
            setSubmitting(false);
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
        }
    };

    return (
        <div className={styles.container}>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
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
