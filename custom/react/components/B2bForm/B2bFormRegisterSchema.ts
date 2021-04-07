import * as Yup from "yup";

const REQUIRED_MENSAGEM = "Campo Obrigatório";
const INVALID_PHONE_MESSAGE = "Numero de Telefone invalido";

const CNPJ_REGEX = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
const CPF_REGEX = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

export const registerSchema = Yup.object().shape({
    corporateDocument: Yup.string().matches(CNPJ_REGEX, "CNPJ invalido").required(REQUIRED_MENSAGEM),
    document: Yup.string().matches(CPF_REGEX, "CPF invalido").required(REQUIRED_MENSAGEM),
    postalCode: Yup.string().required(REQUIRED_MENSAGEM),
    street: Yup.string().required(REQUIRED_MENSAGEM),
    number: Yup.number().required(REQUIRED_MENSAGEM),
    neighborhood: Yup.string().required(REQUIRED_MENSAGEM),
    city: Yup.string().required(REQUIRED_MENSAGEM),
    state: Yup.string().required(REQUIRED_MENSAGEM),
    tradeName: Yup.string().required(REQUIRED_MENSAGEM),
    stateRegistration: Yup.string().required(REQUIRED_MENSAGEM),
    corporateName: Yup.string().required(REQUIRED_MENSAGEM),
    businessPhone: Yup.string().min(8, INVALID_PHONE_MESSAGE).required(REQUIRED_MENSAGEM),
    phone: Yup.string().min(8, INVALID_PHONE_MESSAGE).required(REQUIRED_MENSAGEM),
    firstName: Yup.string().required(REQUIRED_MENSAGEM),
    lastName: Yup.string().required(REQUIRED_MENSAGEM),
    email: Yup.string().email("E-mail Invalido").required(REQUIRED_MENSAGEM),
});
