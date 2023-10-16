import { TransitionFn } from "@react-spring/web";

export type ExampleProps = {
    transition: TransitionFn<boolean, {
        opacity: number;
        transform: string;
        backgroundColor: string;
        color: string;
    }>;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
