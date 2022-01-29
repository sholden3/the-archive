import { Content } from "src/app/models/content/content.model";
import { ContentFactoryService } from "src/app/services/content-factory/content-factory.service";

export class IntroToCsAndComputers {
    constructor(private contentFactory: ContentFactoryService) {}
    public data = {
        id: "gdfg67f",
        nodes: [
            new Content(
                this.contentFactory.returnComponent('container-flex'),
                {
                    dir: "row",
                    padding: 10,
                    layout: "center",
                    devMode: false
                },
                [
                    new Content(
                        this.contentFactory.returnComponent('h1'),
                        {
                            body: "Intro to CS and Computers",
                            devMode: false
                        },
                        []
                    ),
                ]
            ),
        ]
    }
}
