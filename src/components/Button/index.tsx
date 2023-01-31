interface iButton {
    title: string;
    onClickButton: () => void;
    isDisabled?: boolean;
}

const Button = ({ isDisabled, onClickButton, title }: iButton) => {
    return (
        <button disabled={isDisabled} onClick={onClickButton}>
            {isDisabled ? "..." : title}
        </button>
    );
};

export default Button;
