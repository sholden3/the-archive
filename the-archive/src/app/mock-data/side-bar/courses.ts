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
                        this.contentFactory.returnComponent('dropdown-links'),
                        {
                            name: 'Intro To Cs',
                            description: 'A little about CS.',
                            children: [
                                {
                                    link: 'courses',
                                    id: 'fac3456',
                                    name: 'Foreword',
                                    description: "A quick foreword"
                                },
                                {
                                    link: 'courses',
                                    id: 'gdfg67f',
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
