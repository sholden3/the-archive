import { Content } from "src/app/models/content/content.model";
import { ContentFactoryService } from "src/app/services/content-factory/content-factory.service";

export class Portfolio {
    constructor(private contentFactory: ContentFactoryService) {}

    public data = {
        state: 'portfolio',
        nodes: [
            new Content(
                this.contentFactory.returnComponent('single-link'),
                {
                    link: 'portfolio',
                    id: '3424123',
                    name: 'About Me',
                    description: 'A little about me.'
                },
                []
            )
        ]
    }
}