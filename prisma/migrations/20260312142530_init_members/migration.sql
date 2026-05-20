-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "memberType" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT NOT NULL,
    "motivations" TEXT[],
    "paymentAccepted" BOOLEAN NOT NULL,
    "agreementAccepted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);
