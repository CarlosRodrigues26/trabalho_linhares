import { Request, RequestHandler, Response } from "express";
import * as casaDeShowService from "../service/casaDeShowService";

export async function listarCasasDeShow(req: Request, res: Response) {
  try {
    const casas = await casaDeShowService.listarCasasDeShow();
    res.status(200).json(casas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao listar casas de show." });
  }
}

export const buscarCasaDeShowPorId: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const casa = await casaDeShowService.buscarCasaDeShowPorId(id);

    if (!casa) {
      res.status(404).json({ message: "Casa de show não encontrada." });
      return;
    }

    res.status(200).json(casa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar casa de show." });
  }
};

export async function cadastrarCasaDeShow(req: Request, res: Response) {
  try {
    const dados = req.body;
    const novaCasa = await casaDeShowService.cadastrarCasaDeShow(dados);
    res.status(201).json(novaCasa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao cadastrar casa de show." });
  }
}

export const atualizarCasaDeShow: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const dados = req.body;

    const casaAtualizada = await casaDeShowService.atualizarCasaDeShow(id, dados);
    res.status(200).json(casaAtualizada);
  } catch (error: any) {
    console.error(error);

    if (error.code === "P2025") {
      res.status(404).json({ message: "Casa de show não encontrada." });
      return;
    }

    res.status(500).json({ message: "Erro ao atualizar casa de show." });
  }
};

export const deletarCasaDeShow: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    await casaDeShowService.deletarCasaDeShow(id);
    res.status(200).json({ message: "Casa de show deletada com sucesso." });
  } catch (error: any) {
    console.error(error);

    if (error.code === "P2025") {
      res.status(404).json({ message: "Casa de show não encontrada." });
      return;
    }

    res.status(500).json({ message: "Erro ao deletar casa de show." });
  }
};
