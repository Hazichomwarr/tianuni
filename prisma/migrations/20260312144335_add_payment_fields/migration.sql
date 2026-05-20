-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "paymentStatus" TEXT NOT NULL DEFAULT 'pending',
ADD COLUMN     "stripeCustomerId" TEXT,
ADD COLUMN     "stripePaymentId" TEXT;
