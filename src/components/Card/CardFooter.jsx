import clsx from "clsx";

export function CardFooter({ className, children }) {
  return <div className={clsx("card-footer", className)}>{children}</div>;
}
