export const ComponentNavbar = (props: any) => {
  return (
    <a
      href={`${props.link}`}
      className="ml-10 hover:text-slate-400 hover:duration-500 max-[768px]:ml-4"
    >
      {props.item}
    </a>
  );
};
