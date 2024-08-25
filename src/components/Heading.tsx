type HeadingProps = {
  children: string;
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export default function Heading(props: HeadingProps) {
  const Component = props.size;
  const sizes = {
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-xl",
    h5: "text-lg",
    h6: "text-base",
  };
  return (
    <Component className={`font-thin ${sizes[props.size]}`}>
      {props.children}
    </Component>
  );
}
