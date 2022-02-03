import { Content } from "src/app/models/content/content.model";
import { ContentFactoryService } from "src/app/services/content-factory/content-factory.service";

export class Courses {
    constructor(private contentFactory: ContentFactoryService) {}

    public data = {
        state: 'courses',
        nodes: [
            new Content(
                this.contentFactory.returnComponent('nav-list'),
                {

                },
                [
                    new Content(
                        this.contentFactory.returnComponent('single-link'),
                        {
                            link: 'courses',
                            id: '3424123',
                            name: 'Foreword',
                            description: 'A quick little thing for us to touch on.'
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('dropdown-links'),
                        {
                            name: 'Intro To Cs',
                            description: 'A little about CS.',
                            children: [
                                {
                                    link: 'courses',
                                    id: '34fdf2',
                                    name: 'Our first deep dive',
                                    description: "Our first deep dive into CS."
                                }
                            ]
                        },
                        []
                    ),
                ]
            )
        ]
    }
}
