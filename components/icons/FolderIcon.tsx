export default function FolderIcon({ open }: { open: boolean }) {
    if (open) {
        return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                    d="M2 4V12H12L14 7H5L3 4H2Z"
                    fill="#5AB0F6"
                    stroke="#3B8FD9"
                    strokeWidth="0.5"
                />
                <path
                    d="M2 4H6L7 5H14V7H5L2 4Z"
                    fill="#5AB0F6"
                    stroke="#3B8FD9"
                    strokeWidth="0.5"
                />
            </svg>
        );
    }
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
                d="M2 3H6L7.5 5H14V13H2V3Z"
                fill="#5AB0F6"
                stroke="#3B8FD9"
                strokeWidth="0.5"
            />
        </svg>
    );
}
