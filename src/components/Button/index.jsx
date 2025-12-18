import "./Button.css";
import clsx from "clsx";

const Button = ({
  children,
  variant,
  size,
  rounded = false,
  as = "button",
  prefix,
  suffix,
  ...rest
}) => {
  const Component = as;

  if (as === "a" && !rest.href) {
    console.warn("Button rendered as <a> requires an href");
  }

  return (
    <Component
      className={clsx(
        "btn",
        `btn-${variant}`,
        `btn-${size}`,
        rest.radius && `btn-${rest.radius}`
      )}
      {...rest}
    >
      {prefix && (
        <span className={clsx("icon", rounded && "rounded")}>{prefix}</span>
      )}

      <span className="btn-children">{children}</span>

      {suffix && (
        <span
          className={clsx(
            "icon",
            rounded && "rounded",
            rounded && `rounded-${variant}`
          )}
        >
          {suffix}
        </span>
      )}
    </Component>
  );
};

export default Button;
