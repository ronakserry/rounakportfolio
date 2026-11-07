
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

type AddBtnProps = {
    onClick: () => void;
    className?: string;
    ariaLabel?: string;
};

function AddBtn({
    onClick,
    className = "",
    ariaLabel = "افزودن",
}: AddBtnProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={ariaLabel}
            className={`bg-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${className}`}
        >
            <FontAwesomeIcon
                icon={faAdd}
                className="add text-white"
            />
        </button>
    );
}

export default AddBtn;



