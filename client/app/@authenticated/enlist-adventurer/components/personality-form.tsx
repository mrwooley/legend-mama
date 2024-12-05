import {TextareaSuggestion} from "@/components/ui/textarea-suggestion";
import SwordGroup from "@/components/sword-group";

export default function PersonalityForm() {
  // TODO: Randomly select suggestions
  const interestSuggestion = "Gardening";
  const disinterestSuggestion = "Broccoli"

  return (
    <div className="flex-auto flex flex-wrap gap-12 px-[5%] pb-[2%] max-md:gap-2">
      <div className="flex flex-col justify-items-start gap-3">
        <h3>Personality Traits</h3>
        <div className="flex flex-col gap-3 origin-top-left max-md:scale-[90%]">
          <SwordGroup title="Openness" labelL="Practical" labelR="Curious" size="default"/>
          <SwordGroup title="Conscientiousness" labelL="Impulsive" labelR="Disciplined" size="default"/>
          <SwordGroup title="Extroversion" labelL="Reserved" labelR="Outgoing" size="default"/>
          <SwordGroup title="Agreeableness" labelL="Critical" labelR="Helpful" size="default"/>
          <SwordGroup title="Neuroticism" labelL="Calm" labelR="Anxious" size="default"/>
        </div>
      </div>
      <div className="flex-auto flex flex-col gap-2 justify-between">
        <div className="flex flex-col gap-3">
          <h3>Interests <span className="text-sm">(optional)</span></h3>
          <TextareaSuggestion suggestion={interestSuggestion} placeholder="Optional"/>
        </div>
        <div className="flex flex-col gap-3">
          <h3>Disinterests <span className="text-sm">(optional)</span></h3>
          <TextareaSuggestion suggestion={disinterestSuggestion} placeholder="Optional"/>
        </div>
      </div>
    </div>
  );
}