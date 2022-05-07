import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>
      <div className="flex w-full py-8 gap-2">
        {
          Object.entries(feedbackTypes).map(([ key, value ]) => {
            return (
              <button
                type="button"
                className="flex flex-col items-center flex-1 w-24 py-5 border-2 border-transparent rounded-lg bg-zinc-800 gap-2 hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                key={key}
                onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            );
          })
        }
      </div>
    </>
  );
}
