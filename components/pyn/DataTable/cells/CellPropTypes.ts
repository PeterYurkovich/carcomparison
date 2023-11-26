type IconCellOption<T> = {
    value: T;
    label: string;
    icon: string;
};
export type IconCellProps<T> = {
    value: T | null;
    options: Array<IconCellOption<T>>;
};

export type TextCellProps<T> = {
    value: T | null;
};

export type FormatCellProps<T> = {
    value: T;
    format: <T>(x: T) => string;
};
