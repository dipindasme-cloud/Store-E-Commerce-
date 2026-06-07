import { type ElementType, type ReactNode, forwardRef } from "react";


type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
};

export default forwardRef(function Container<T extends ElementType = "div">(
  { as, children, className = "" }: ContainerProps<T>,
  ref: React.ComponentPropsWithRef<T>["ref"]
) {
  const Tag = as ?? "div";

  return (
    <Tag ref={ref} className={`container-custom ${className}`.trim()}>
      {children}
    </Tag>
  );
}) as <T extends ElementType = "div">(props: ContainerProps<T> & React.RefAttributes<HTMLElement>) => ReactNode;