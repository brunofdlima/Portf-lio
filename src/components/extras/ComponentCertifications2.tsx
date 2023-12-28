export const ComponentCertifications2 = (props: any) => {
  return (
    <div>
      <div className="max-w-[36.5rem] h-[70px] rounded-3xl bg-slate-400 flex mt-2 max-[768px]:h-[120px]">
        <div className="flex">
          <div className="my-auto ml-4">{props.initial}</div>
        </div>
        <div className="my-auto ml-8">
          <div>{props.name}</div>
          <div className="text-base">{props.local}</div>
        </div>
      </div>
    </div>
  );
};
