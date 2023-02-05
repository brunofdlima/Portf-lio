export const Techs = (props: any) => {
  return (
    <div>
      <div className="hover:text-slate-200 hover:duration-700">
        {<props.icon className="w-16 h-16" />}
      </div>
      <div className="mt-6">{props.name}</div>
    </div>
  );
};
