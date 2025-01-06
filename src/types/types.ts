export type CategoryProps = {
    name: string,
    email: string,
    role: string,
    lastSeen: string,
    lastSeenDateTime: string,
    url: string,
    places: PlaceProps[],
    icon?: JSX.Element,
    transports?: TransportProps[],
}

export interface IListItem {
    name: string;
    url?: string;
    role?: string;
    places?: PlaceProps[];
    transports?: TransportProps[];
    icon?: JSX.Element;
    email?: string,
    lastSeen?: string,
    lastSeenDateTime?: string,
}

type PlaceProps = {
    place_name: string,
    imageUrl: string,
    ubication?: string,
    page?: string
}

type TransportProps = {
    name: string,
    appUrl: string,
    appImage: string
}
