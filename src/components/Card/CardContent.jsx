import clsx from "clsx";

export function CardContent({ className, children }) {
  return <div className={clsx("card-content", className)}>{children}</div>;
}
