export const ComponentCertifications2 = (props: any) => {
  return (
    <div>
      <div className="max-w-[37.5rem] h-[4.375rem] rounded-3xl bg-slate-400 flex mt-2 max-[48rem]:h-[7.5rem]">
        <div className="flex">
          <div className="my-auto ml-4">{props.initial}</div>
        </div>
        <div className="my-auto ml-4">
          <div>{props.name}</div>
          <div className="text-base">{props.local}</div>
        </div>
      </div>
    </div>
  );
};
