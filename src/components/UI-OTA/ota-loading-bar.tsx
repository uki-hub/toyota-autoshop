type Props = {
  orientation?: "horizontal" | "vertical" | undefined;
  backgroundClassName?: string;
  barClassName?: string;
  value: number;
};

const OtaLoadingBar = (props: Props) => {
  let className = "";

  return (
    <div className="relative h-2 w-full rounded-l-full rounded-r-full bg-secondary">
      <div
        className="absolute top-0 left-0 h-full rounded-l-full rounded-r-full bg-primary"
        style={{width: `${props.value}%`}}
      />
    </div>
  );
};

export default OtaLoadingBar;
