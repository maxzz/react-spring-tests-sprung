import { HookExplanation } from "../../styles/styles";

//Our dataset
export const elements = [1, 2, 3, 4];

export function CommonExplanation() {
    return (<>
        <HookExplanation>
            There are a few ways to animate multiple elements. We can use useSpring
            or use the dedicated useSprings hook
        </HookExplanation>
    </>);
}
