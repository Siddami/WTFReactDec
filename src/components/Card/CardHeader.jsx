import clsx from "clsx";
import "./Card.css";

export function CardHeader({ className, children }) {
  return <div className={clsx("card-header", className)}>{children}</div>;
}

export function CardTitle({ children, className}) {
  return <h3 className={clsx("card-title", className)}>{children}</h3>;
}

export function CardDescription({ children }) {
  return <p className="card-description">{children}</p>;
}
