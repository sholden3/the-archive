import { DirectorySubItem } from "../directory-sub-item/directory-sub-item.model";

export class DirectoryItem {
    id: string;
    state: string;
    name: string;
    description: string;
    type: string;
    children: DirectorySubItem[] | null;

    constructor(
        id: string,
        state: string,
        name: string,
        description: string,
        type: string,
        children: DirectorySubItem[] | null
    ) {
        this.id = id;
        this.state = state;
        this.name = name;
        this.description = description;
        this.type = type;
        this.children = children;
    }
}
