import Image from "next/dist/client/image";

const CountdownDeal: React.FC<{className?: string}> = ({className=""}) => {
  return (
    <div className={`relative h-[30vh] lg:h-[40vh] ${className}`}>
      <Image
        src="/static/images/marketing1.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="right"
        className="rounded-2xl"
      />
      <div>
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-10 rounded-2xl" />
      </div>
      <div className="absolute left-8 top-10">
        <p className="text-primary text-lg font-semibold">Deal of the Day</p>
        <h5 className="text-white text-3xl font-bold">Aqua Globes 2</h5>
        <p className="text-primary font-bold text-xl">
          <span className="text-xs line-through  font-light text-white">
            $299.99
          </span>{" "}
          $249.99
        </p>
        <div className="mt-4" />
        <DealTimeLeftTimer />
      </div>
    </div>
  );
};

const DealTimeLeftTimer: React.FC = () => {
  return (
    <div className="grid gap-2 text-center text-white grid-cols-3">
      <TimeBlock label="Hours" time={8} />
      <TimeBlock label="Minutes" time={40} />
      <TimeBlock label="Seconds" time={13} />
    </div>
  );
};

const TimeBlock: React.FC<{ label: string; time: number }> = ({
  label,
  time,
}) => {
  return (
    <div>
      <div className="bg-white bg-opacity-40 text-3xl font-bold flex items-center justify-center w-16 h-16 rounded-lg">
        {time}
      </div>
      <p className="font-light text-sm">{label}</p>
    </div>
  );
};

export default CountdownDeal;
