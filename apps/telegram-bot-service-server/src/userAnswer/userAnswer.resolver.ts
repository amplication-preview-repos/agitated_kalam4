import * as graphql from "@nestjs/graphql";
import { UserAnswerResolverBase } from "./base/userAnswer.resolver.base";
import { UserAnswer } from "./base/UserAnswer";
import { UserAnswerService } from "./userAnswer.service";

@graphql.Resolver(() => UserAnswer)
export class UserAnswerResolver extends UserAnswerResolverBase {
  constructor(protected readonly service: UserAnswerService) {
    super(service);
  }
}
