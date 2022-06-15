/// <reference types="react" />
declare type Props = {
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
declare function Loading({ loading, size, kind }: Props): JSX.Element;
export default Loading;
