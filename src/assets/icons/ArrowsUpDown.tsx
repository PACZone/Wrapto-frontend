import { IconProps } from "types/iconProps";

export function ArrowsUpDown({ className }: IconProps) {
    return (
        <svg
            className={className}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.5 6.25L6.25 2.5M6.25 2.5L10 6.25M6.25 2.5V13.75M17.5 13.75L13.75 17.5M13.75 17.5L10 13.75M13.75 17.5L13.75 6.25"
                stroke="currentColor"
                strokeWidth="1.90909"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
