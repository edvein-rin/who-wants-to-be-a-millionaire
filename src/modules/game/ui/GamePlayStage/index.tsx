import classNames from "classnames";

import { Button } from "@/modules/shared";
import { Question } from "@/modules/question";

export type GamePlayStageProps = {
  question: Question;
  onCorrectAnswer: () => void;
  onWrongAnswer: () => void;
  className?: string;
};

export const GamePlayStage = ({
  className,
  question,
  onCorrectAnswer,
  onWrongAnswer,
}: GamePlayStageProps) => (
  <div className={classNames(className)}>
    <p>{question.body}</p>
    <div>
      {question.answers.map((answer) => {
        const isCorrectAnswer = question.correctAnswerIds.includes(answer.id);

        return (
          <Button
            key={answer.id}
            onClick={isCorrectAnswer ? onCorrectAnswer : onWrongAnswer}
          >
            {answer.body}
          </Button>
        );
      })}
    </div>
  </div>
);
