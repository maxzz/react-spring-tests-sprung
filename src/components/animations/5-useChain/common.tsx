import { SpringRef, SpringValue } from "@react-spring/web";

export type ExampleProps = {
    trail: {
        opacity: SpringValue<number>;
        transform: SpringValue<string>;
    }[];
    elements: {
        id: number;
        message: string;
        offset: string;
    }[];
    trailRef: SpringRef<any>;
    firstAnimationTriggered: boolean;
    setFirstAnimationTriggered: React.Dispatch<React.SetStateAction<boolean>>;
    setSecondAnimationTriggered: React.Dispatch<React.SetStateAction<boolean>>;
};
