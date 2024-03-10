-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'user');

-- CreateTable
CREATE TABLE "check" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "otp" TEXT NOT NULL,
    "img" TEXT NOT NULL DEFAULT 'nophoto.jpg',
    "update" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "check_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "firstname" VARCHAR(400) NOT NULL,
    "lastname" VARCHAR(400) NOT NULL,
    "email" VARCHAR(400) NOT NULL,
    "password" VARCHAR(400) NOT NULL,
    "img" TEXT NOT NULL DEFAULT 'nophoto.jpg',
    "otp" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'user',
    "update" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ip" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "update" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "month" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(400) NOT NULL,
    "year" VARCHAR(400) NOT NULL,
    "userId" INTEGER NOT NULL,
    "update" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "month_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "person" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "hazira" TEXT NOT NULL,
    "rate" TEXT NOT NULL,
    "mot" TEXT NOT NULL,
    "khoraki" TEXT NOT NULL,
    "barti" TEXT NOT NULL,
    "gotoMas" TEXT NOT NULL,
    "paona" TEXT NOT NULL,
    "monthId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "update" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "about" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "fb" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "longDes" TEXT NOT NULL,
    "update" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "about_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "longDes" TEXT NOT NULL,
    "update" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "work_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "longDes" TEXT NOT NULL,
    "update" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "check_email_key" ON "check"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "ip" ADD CONSTRAINT "ip_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "month" ADD CONSTRAINT "month_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_monthId_fkey" FOREIGN KEY ("monthId") REFERENCES "month"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
