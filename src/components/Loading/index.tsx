import React, { useState, useEffect } from "react";
import cx from "classnames";

type Props = {
  /** If the spinner should currently be shown. */
  loading?: boolean;

  /** The relative size of the spinner. Defaults to 12. */
  size?: number;

  /**
   * The visual appearance of the spinner.
   * - *clear* – Renders only the spinner and nothing else.
   * - *background* – Renders a solid gray background behind the spinner.
   * - *over-table* – Renders a semi-transparent background behind the spinner.
   */
  kind?: "clear" | "background" | "blue" | "over-table";
};

/**
 * Shows a loading spinner.
 */
function Loading({ loading = true, size = 12, kind = "background" }: Props) {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(true);
    }, 100);
    return () => clearTimeout(timeout);
  });

  return (
    <div
      role={loading ? "alert" : undefined}
      aria-label={loading ? "loading" : undefined}
      className={cx("ride-ui-kit-loading", kind, { show: loading })}
      style={{ fontSize: Math.round(size * 12) + "rem" }}
    >
      <div
        className={cx("ride-ui-kit-loading-spinner", {
          "loading-spinner-active": showSpinner && loading,
        })}
      />
    </div>
  );
}

export default Loading;
