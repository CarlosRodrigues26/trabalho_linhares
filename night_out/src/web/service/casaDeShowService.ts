import { prisma } from "../libs/prismaClient";
import { CasaDeShowDTO } from "../types/casaDeShowDTO";

export async function listarCasasDeShow() {
  const casas = await prisma.casaDeShow.findMany();
  return casas;
}

export async function buscarCasaDeShowPorId(id: string) {
  const casa = await prisma.casaDeShow.findUnique({
    where: { id },
  });

  return casa;
}

export async function cadastrarCasaDeShow(dados: CasaDeShowDTO) {
  const novaCasa = await prisma.casaDeShow.create({
    data: {
      nome: dados.nome,
      endereco: dados.endereco,
      cidade: dados.cidade,
      telefone: dados.telefone,
    },
  });

  return novaCasa;
}

export async function atualizarCasaDeShow(id: string, dados: CasaDeShowDTO) {
  const casaAtualizada = await prisma.casaDeShow.update({
    where: { id },
    data: {
      nome: dados.nome,
      endereco: dados.endereco,
      cidade: dados.cidade,
      telefone: dados.telefone,
    },
  });

  return casaAtualizada;
}

export async function deletarCasaDeShow(id: string) {
  await prisma.casaDeShow.delete({
    where: { id },
  });
}
