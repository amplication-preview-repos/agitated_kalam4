import { Module } from "@nestjs/common";
import { UserAnswerModuleBase } from "./base/userAnswer.module.base";
import { UserAnswerService } from "./userAnswer.service";
import { UserAnswerController } from "./userAnswer.controller";
import { UserAnswerResolver } from "./userAnswer.resolver";

@Module({
  imports: [UserAnswerModuleBase],
  controllers: [UserAnswerController],
  providers: [UserAnswerService, UserAnswerResolver],
  exports: [UserAnswerService],
})
export class UserAnswerModule {}
