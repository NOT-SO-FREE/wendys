import { Snowflake, Gift } from 'lucide-react';

const steps = [
{
  icon: Snowflake,
  text: 'Click the "Start Review" button'
},
{
  icon: Gift,
  text: 'Enter your email and basic details'
},
{
  icon: Snowflake,
  text: 'Answer the required questions'
},
{
  icon: Snowflake,
  text: 'Complete 3–5 partner offers'
},
{
  icon: Snowflake,
  text: 'Receive your STARBUCKS gift card'
}];


const StepsCard = () => {
  return (
    <div className="relative bg-primary/40 backdrop-blur-sm rounded-lg mb-2 border border-accent/20 shadow-2xl overflow-hidden !my-0 !p-2.5 !rounded-[17px]">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover pointer-events-none opacity-10"
        style={{
          backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d864f204-e1ba-40f7-aac1-205adffe8fde-bucksxmas-com/assets/images/holiday-cups-bg-BhWQ8nCZ-9.png')"
        }}>
      </div>
      <ol className="relative z-10 text-left space-y-1 text-foreground">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <li key={index} className="flex items-start gap-1.5 text-[11px] md:text-xs">
              <span className="flex-shrink-0 w-4 h-4 bg-accent/80 text-primary rounded-full flex items-center justify-center font-bold text-[9px] mt-0.5">
                {index + 1}
              </span>
              <div className="flex items-center gap-1 flex-1">
                <span className="text-accent flex-shrink-0">
                  <Icon className="w-2.5 h-2.5" />
                </span>
                <span className="text-foreground font-medium">{step.text}</span>
              </div>
            </li>);

        })}
      </ol>
    </div>);

};

export default StepsCard;