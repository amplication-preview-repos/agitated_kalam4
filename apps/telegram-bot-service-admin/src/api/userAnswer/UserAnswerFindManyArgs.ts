import { UserAnswerWhereInput } from "./UserAnswerWhereInput";
import { UserAnswerOrderByInput } from "./UserAnswerOrderByInput";

export type UserAnswerFindManyArgs = {
  where?: UserAnswerWhereInput;
  orderBy?: Array<UserAnswerOrderByInput>;
  skip?: number;
  take?: number;
};
