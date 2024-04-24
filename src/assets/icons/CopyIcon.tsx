import { IconProps } from "types/iconProps";

export function CopyIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.5 11.5V13.75C10.5 14.1642 10.1642 14.5 9.75 14.5H3.25C2.83579 14.5 2.5 14.1642 2.5 13.75V5.25C2.5 4.83579 2.83579 4.5 3.25 4.5H4.5C4.84071 4.5 5.17479 4.5284 5.5 4.58296M10.5 11.5H12.75C13.1642 11.5 13.5 11.1642 13.5 10.75V7.5C13.5 4.527 11.3377 2.05904 8.5 1.58296C8.17479 1.5284 7.84071 1.5 7.5 1.5H6.25C5.83579 1.5 5.5 1.83579 5.5 2.25V4.58296M10.5 11.5H6.25C5.83579 11.5 5.5 11.1642 5.5 10.75V4.58296M13.5 9V7.75C13.5 6.50736 12.4926 5.5 11.25 5.5H10.25C9.83579 5.5 9.5 5.16421 9.5 4.75V3.75C9.5 2.50736 8.49264 1.5 7.25 1.5H6.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
