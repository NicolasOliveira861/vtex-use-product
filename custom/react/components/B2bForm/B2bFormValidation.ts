import * as Yup from "yup";

const REQUIRED_MENSAGEM = "Campo Obrigatório";
const INVALID_PHONE_MESSAGE = "Numero de Telefone invalido";

export const RegisterSchema = Yup.object().shape({
    cnpj: Yup.string().required(REQUIRED_MENSAGEM),
    cep: Yup.string().required(REQUIRED_MENSAGEM),
    endereco: Yup.string().required(REQUIRED_MENSAGEM),
    complemento: Yup.string().required(REQUIRED_MENSAGEM),
    numero: Yup.number().required(REQUIRED_MENSAGEM),
    bairro: Yup.string().required(REQUIRED_MENSAGEM),
    cidade: Yup.string().required(REQUIRED_MENSAGEM),
    estado: Yup.string().required(REQUIRED_MENSAGEM),
    razaoSocial: Yup.string().required(REQUIRED_MENSAGEM),
    inscricaoEstadual: Yup.string().required(REQUIRED_MENSAGEM),
    nomeFantasia: Yup.string().required(REQUIRED_MENSAGEM),
    telefoneComercial: Yup.string().min(8, INVALID_PHONE_MESSAGE).required(REQUIRED_MENSAGEM),
    telefone: Yup.string().min(8, INVALID_PHONE_MESSAGE).required(REQUIRED_MENSAGEM),
    nome: Yup.string().required(REQUIRED_MENSAGEM),
    email: Yup.string().email("E-mail Invalido").required(REQUIRED_MENSAGEM),
});
