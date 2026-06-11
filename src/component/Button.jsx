

export const Button = ({ className, size ="default", children }) => {

    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    }
    const classes = `${baseClasses} ${sizeClasses[size]}`;
    return (

        <button className={classes}>
            <span className="relative flex itens-ceter jusify-center gap-2 ">

                {children}</span>
        </button>

        );
};