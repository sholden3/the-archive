export class DirectorySubItem {
    parentId: string;
    id: string;
    itemNm: string;
    description: string;

    constructor(
        parentId: string,
        id: string,
        itemNm: string,
        description: string
    ) {
        this.parentId = parentId;
        this.id = id;
        this.itemNm = itemNm;
        this.description = description
    }
}
