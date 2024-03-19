-- CreateTable
CREATE TABLE "Admin" (
    "id_admin" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "postnom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "numero_telephone" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id_admin")
);

-- CreateTable
CREATE TABLE "Client" (
    "id_client" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "postnom" TEXT NOT NULL,
    "numero_telephone" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "note" TEXT,
    "objet" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id_client")
);

-- CreateTable
CREATE TABLE "Paiement" (
    "id_paie" SERIAL NOT NULL,
    "montant" DOUBLE PRECISION NOT NULL,
    "date_paie" TIMESTAMP(3) NOT NULL,
    "id_client" INTEGER NOT NULL,

    CONSTRAINT "Paiement_pkey" PRIMARY KEY ("id_paie")
);

-- CreateTable
CREATE TABLE "Materiels" (
    "id_mat" SERIAL NOT NULL,
    "panneau" TEXT NOT NULL,
    "cable" TEXT NOT NULL,
    "batterie" TEXT NOT NULL,
    "ondulaire" TEXT NOT NULL,

    CONSTRAINT "Materiels_pkey" PRIMARY KEY ("id_mat")
);

-- CreateTable
CREATE TABLE "Contrat" (
    "id_contrat" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "montant" DOUBLE PRECISION NOT NULL,
    "date_finale" TIMESTAMP(3) NOT NULL,
    "id_admin" INTEGER NOT NULL,
    "id_client" INTEGER NOT NULL,

    CONSTRAINT "Contrat_pkey" PRIMARY KEY ("id_contrat")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id_client") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contrat" ADD CONSTRAINT "Contrat_id_admin_fkey" FOREIGN KEY ("id_admin") REFERENCES "Admin"("id_admin") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contrat" ADD CONSTRAINT "Contrat_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id_client") ON DELETE RESTRICT ON UPDATE CASCADE;
