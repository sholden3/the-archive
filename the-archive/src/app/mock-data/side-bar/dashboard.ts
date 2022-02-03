import { Content } from "src/app/models/content/content.model";
import { ContentFactoryService } from "src/app/services/content-factory/content-factory.service";

export class Dashboard {
    constructor(private contentFactory: ContentFactoryService) {}

    public data = {
        state: 'dashboard',
        nodes: [
            new Content(
                this.contentFactory.returnComponent('single-link'),
                {
                    link: 'dashboard',
                    id: 'sdf32424wdf',
                    name: 'Config',
                    description: 'Our configuration'
                },
                []
            )
        ]
    }
}