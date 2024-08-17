import { UserAnswer as TUserAnswer } from "../api/userAnswer/UserAnswer";

export const USERANSWER_TITLE_FIELD = "id";

export const UserAnswerTitle = (record: TUserAnswer): string => {
  return record.id?.toString() || String(record.id);
};
