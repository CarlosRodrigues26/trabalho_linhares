import * as artistaService from "../service/artistaService";
export async function listarArtistas(req, res) {
    try {
        const artistas = await artistaService.listarArtistas();
        res.status(200).json(artistas);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao listar artistas." });
    }
}
export const buscarArtistaPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const artista = await artistaService.buscarArtistaPorId(id);
        if (!artista) {
            res.status(404).json({ message: "Artista não encontrado." });
            return;
        }
        res.status(200).json(artista);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao buscar artista." });
    }
};
export async function cadastrarArtista(req, res) {
    try {
        const dados = req.body;
        const novoArtista = await artistaService.cadastrarArtista(dados);
        res.status(201).json(novoArtista);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao cadastrar artista." });
    }
}
export const atualizarArtista = async (req, res) => {
    try {
        const { id } = req.params;
        const dados = req.body;
        const artistaAtualizado = await artistaService.atualizarArtista(id, dados);
        res.status(200).json(artistaAtualizado);
    }
    catch (error) {
        console.error(error);
        if (error.code === "P2025") {
            res.status(404).json({ message: "Artista não encontrado." });
        }
        res.status(500).json({ message: "Erro ao atualizar artista." });
    }
};
export const deletarArtista = async (req, res) => {
    try {
        const { id } = req.params;
        await artistaService.deletarArtista(id);
        res.status(200).json({ message: "Artista deletado com sucesso." });
    }
    catch (error) {
        console.error(error);
        if (error.code === "P2025") {
            res.status(404).json({ message: "Artista não encontrado." });
        }
        res.status(500).json({ message: "Erro ao deletar artista." });
    }
};
