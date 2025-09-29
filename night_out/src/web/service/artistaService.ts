import { prisma } from "../libs/prismaClient";
import { ArtistaDTO } from "../types/artistaDTO";

export async function listarArtistas() {
  const artistas = await prisma.artista.findMany();
  return artistas;
}

export async function buscarArtistaPorId(id: string) {
  const artista = await prisma.artista.findUnique({
    where: { id },
  });

  return artista;
}

export async function cadastrarArtista(dados: ArtistaDTO) {
  const novoArtista = await prisma.artista.create({
    data: {
      nome: dados.nome,
      genero: dados.genero,
      nacionalidade: dados.nacionalidade,
      dataNascimento: dados.dataNascimento,
    },
  });

  return novoArtista;
}

export async function atualizarArtista(id: string, dados: ArtistaDTO) {
  const artistaAtualizado = await prisma.artista.update({
    where: { id: id },
    data: {
      nome: dados.nome,
      genero: dados.genero,
      nacionalidade: dados.nacionalidade,
      dataNascimento: dados.dataNascimento,
    },
  });

  return artistaAtualizado;
}

export async function deletarArtista(id: string) {
  await prisma.artista.delete({
    where: { id: id },
  });
}
