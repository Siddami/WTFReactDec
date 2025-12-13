import "./Button.css";
import clsx from "clsx";

const Button = ({ children, variant, size, rounded = false, ...rest }) => {
  return (
    <button
      className={clsx(
        "btn",
        `btn-${variant}`,
        `btn-${size}`,
        `btn-${rest.radius}`
      )}
    >
      {rest.prefix && (
        <span className={clsx("icon", rounded && "rounded")}>
          {rest.prefix}
        </span>
      )}
      <span className="btn-children">{children}</span>
      {rest.suffix && (
        <span
          className={clsx(
            "icon",
            rounded && "rounded",
            rounded && `rounded-${variant}`
          )}
        >
          {rest.suffix}
        </span>
      )}
    </button>
  );
};

export default Button;
