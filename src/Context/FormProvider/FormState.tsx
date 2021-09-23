import { createContext } from "react";

export const InitalState: any = {
  loading: false,
  cliente: {
    id: null,
    pessoal: {
      nome: "",
      CPF: "",
      email: "",
      nascimento: "",
      telefone: "",
      celular: "",
    },
    logon: {
      username: "",
      senha: "",
      token: "",
    },
    endereco: {
      cep: "",
      UF: "",
      cidade: "",
      logradouro: "",
      Numero: "",
    },
  },
  fornecedor: {
    id: null,
    fiscal: {
      cnpj: "",
      razaoSocial: "",
      segmento: "",
    },
    logon: {
      username: "",
      senha: "",
      token: "",
    },
    endereco: {
      cep: "",
      UF: "",
      cidade: "",
      logradouro: "",
      Numero: "",
    },
  },
  marca: {
    id: null,
    nome: "",
  },
  cupom: {
    id: null,
    nome: "",
    desconto: 0,
  },
  produto: {
    id: null,
    nome: '',
    url: '',
    descricao: '',
    fornecedorId: 0,
    categoriaId: 0,
    marcaId: 0,
    preco: 0,
    vendido: 0,
    avaliacoes: [
      {
        clienteId: '',
        nota: 0,
        descricao: ''
      }
    ]
  },
  categoria:{
    id: null,
    nome: ''
  }
};

export const FormState = createContext(InitalState);
