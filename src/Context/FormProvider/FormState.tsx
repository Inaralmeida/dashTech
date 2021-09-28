import { createContext } from "react";
import { dataAtual } from "../../Utils/datas";

export const InitalState: any = {
  loading: false,
  usuario: {
    id: null,
    categoria: "",
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
      complemento: "",
    },
    profissional: {
      cargo: "",
      salario: "",
      escala: "",
      horasSemanais: "",
      admissao: "",
      demissao: "",
      complemento: ""
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
    id:'',
    nome: "",
    url: "",
    descricao: "",
    categoriaId: '',
    fornecedorID: '',
    marcaId: '',
    valorBruto: '',
    valorVenda: '',
    vendido: '',
    estoque: '',
    adicionadoEm: dataAtual(),
    avaliacoes: [
      {
        clienteId: "",
        nota: 0,
        descricao: "",
      },
    ],
  },
  categoria: {
    id: null,
    nome: "",
  },
};

export const FormState = createContext(InitalState);
