export const ComponentSocials = (props: any) => {
  return (
    <a
      href={`${props.link}`}
      target="_blank"
      className={`ml-8 hover:text-${props.color} hover:duration-500`}
      rel="noreferrer"
    ></a>
  );
};
