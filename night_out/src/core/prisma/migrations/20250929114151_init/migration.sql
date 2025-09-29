-- CreateTable
CREATE TABLE "public"."Artista" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "genero" TEXT,
    "nacionalidade" TEXT,
    "dataNascimento" TIMESTAMP(3),
    "biografia" TEXT,
    "cacheMedio" DOUBLE PRECISION,

    CONSTRAINT "Artista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CasaDeShow" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "cidade" TEXT NOT NULL,
    "telefone" TEXT,
    "site" TEXT,

    CONSTRAINT "CasaDeShow_pkey" PRIMARY KEY ("id")
);
