-- CreateTable
CREATE TABLE "public"."Artista" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "genero" TEXT,
    "nacionalidade" TEXT,
    "dataNascimento" TIMESTAMP(3),

    CONSTRAINT "Artista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CasaDeShow" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "telefone" TEXT,

    CONSTRAINT "CasaDeShow_pkey" PRIMARY KEY ("id")
);
