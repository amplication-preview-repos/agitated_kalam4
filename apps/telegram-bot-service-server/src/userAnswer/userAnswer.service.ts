import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserAnswerServiceBase } from "./base/userAnswer.service.base";

@Injectable()
export class UserAnswerService extends UserAnswerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
