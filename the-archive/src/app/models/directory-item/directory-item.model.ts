import { DirectorySubItem } from "../directory-sub-item/directory-sub-item.model";

export class DirectoryItem {
    id: string;
    name: string;
    description: string;
    type: string;
    children: DirectoryItem[] | null;

    constructor(
        id: string,
        name: string,
        description: string,
        type: string,
        children: DirectoryItem[] | null
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.children = children;
    }
}
