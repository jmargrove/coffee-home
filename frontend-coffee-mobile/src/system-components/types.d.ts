export declare namespace System {
    interface Flex {
        noFlex?: boolean;
        justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
        align?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
        alignContent: "flex-start" | "flex-end " | "center" | "space-between" | "space-around" | "stretch";
        wrap?: "nowrap" | "wrap" | "wrap-reverse";
        direction?: "row" | "row-reverse" | "column" | "column-reverse";
    }
}