import { Content } from "src/app/models/content/content.model";
import { ContentFactoryService } from "src/app/services/content-factory/content-factory.service";

export class Foreword {
    constructor(private contentFactory: ContentFactoryService) {}
    public data = {
        id: "fac3456",
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
                            body: "A Quick Foreward",
                            devMode: false
                        },
                        []
                    ),
                ]
            ),
            new Content(
                this.contentFactory.returnComponent('container-flex'),
                {
                    dir: "column",
                    padding: 10,
                    layout: "center",
                    devMode: false
                },
                [
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: "One of the big things in my journey to teach my self computer science, is how can I take what I learn, both in my personal journey, as well as my professional journey, and create an all encompassing curriculum for others to follow. How can I take the many lessons I learned, the paths I have foolhardely followed, and set up a course that will teach you what you need to know in a non-shallow fashion.",
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: "Now, I am not saying that I learned every single thing there is to know in my journey, nor am I saying that I am the expert and you should take everything I say as gospel. Instead, what I am proposing is a path for students, prospective students, and hopefuls to follow to get you up to the point of getting your first interview, and hopefully more.",
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: "In order to do this, I suggest following through in the order I present. When I have branching trees, you may follow those trees, and the subjects do not feed into each other in any meaningful way. If I set up a path for your to follow web development, versus game development, you can choose one or the other. If in the game development path, we cut our teeth on webgl, I will teach you just enough to set up a static website. If you want to learn more, you will need to follow the web development path.",
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: "Currently, this will flow into the following path:",
                            devMode: false
                        },
                        []
                    ),
                ]
            ),
        ]
    }
}
