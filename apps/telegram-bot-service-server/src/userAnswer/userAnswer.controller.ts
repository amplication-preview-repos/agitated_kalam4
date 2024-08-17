import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserAnswerService } from "./userAnswer.service";
import { UserAnswerControllerBase } from "./base/userAnswer.controller.base";

@swagger.ApiTags("userAnswers")
@common.Controller("userAnswers")
export class UserAnswerController extends UserAnswerControllerBase {
  constructor(protected readonly service: UserAnswerService) {
    super(service);
  }
}
