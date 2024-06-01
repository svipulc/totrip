export interface NavType {
    id: string,
    label: string,
    icon?: string,
}

export const navValue: NavType[] = [
    {
        id: "1",
        label: "Home",

    },
    {
        id: "2",
        label: "About",
        icon: "./down-icon.svg"
    },
    {
        id: "3",
        label: "Service",
        icon: "./down-icon.svg"
    },
    {
        id: "4",
        label: "Price",
        icon: "./down-icon.svg"
    },
    {
        id: "5",
        label: "Contact",

    }
]