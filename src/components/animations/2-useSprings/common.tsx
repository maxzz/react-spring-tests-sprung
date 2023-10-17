import { NewHookExplanation } from "@/components/ui";

//Our dataset
export const elements = [1, 2, 3, 4];

export function CommonExplanation() {
    return (<>
        <NewHookExplanation>
            There are a few ways to animate multiple elements. We can use useSpring
            or use the dedicated useSprings hook
        </NewHookExplanation>
    </>);
}
