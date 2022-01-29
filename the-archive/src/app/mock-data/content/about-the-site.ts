import { Content } from "src/app/models/content/content.model";
import { ContentFactoryService } from "src/app/services/content-factory/content-factory.service";

export class AboutTheSite {
    constructor(private contentFactory: ContentFactoryService) {}

    public data = {
        id: "3154dfs",
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
                            body: "A Little About the Site",
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
                            body: "This site is largely data driven, which makes sense as it is an Angular SPA, but all that aside, my big push was to make this as data driven as I can. You may ask what I mean by this, and I will show you that in a minute, but first, I want to break out the technical aspects of this site.",
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('h2'),
                        {
                            body: "The front-end",
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: "The front-end makes use of Angular, as I mentioned earlier. More importantly, I use Angular 12, with Angular Material. Purpose of this is because, let's be honest, I am not a graphic designer. At the same time, though I will use bootstrap when I need to, I am not the biggest fan of that either.",
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: "Now, while I do know React, I am a huge fan of Angular. Especially for larger scale projects. The ability to easily create a modular application cannot be understated, though the learning curve can be a bit larger.",
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: "So one thing I do want to talk about in regards to this site, is how we handle the data in the backend. As I have mentioned before, this site is data driven. But there is a bit more in regards to that. Here is an example of the data that we use within the site:",
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('code-editor'),
                        {
                            language: 'typescript',
                            code: `data = {
    id: '231fdsa',
    nodes: [
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
                    this.contentFactory.returnComponent('h1'),
                    {
                        body: "Just a quick example!",
                        devMode: false
                    },
                    []
                ),
                new Content(
                    this.contentFactory.returnComponent('paragraph'),
                    {
                        body: "Here is a little quick example of us constructing our site through code:",
                        devMode: false
                    },
                    []
                ),
                new Content(
                    this.contentFactory.returnComponent('container-flex'),
                    {
                        dir: "row",
                        padding: 30,
                        layout: "start",
                        devMode: false
                    },
                    [
                        new Content(
                            this.contentFactory.returnComponent('paragraph'),
                            {
                                body: "Here is some code in typescript:",
                                devMode: false
                            },
                            []
                        ),
                        new Content(
                            this.contentFactory.returnComponent('code-editor'),
                            {
                                language: "typescript",
                                code: 'public word: string = "Word";'
                            },
                            []
                        ),
                    ]
                )
            ]
        ),
    ]
}
`
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: "Now if we were to actually add that code, it's output would look like:",
                            devMode: false
                        },
                        []
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
                                this.contentFactory.returnComponent('h1'),
                                {
                                    body: "Just a quick example!",
                                    devMode: false
                                },
                                []
                            ),
                            new Content(
                                this.contentFactory.returnComponent('paragraph'),
                                {
                                    body: "Here is a little quick example of us constructing our site through code:",
                                    devMode: false
                                },
                                []
                            ),
                            new Content(
                                this.contentFactory.returnComponent('container-flex'),
                                {
                                    dir: "row",
                                    padding: 10,
                                    layout: "start",
                                    devMode: false
                                },
                                [
                                    new Content(
                                        this.contentFactory.returnComponent('paragraph'),
                                        {
                                            body: "Here is some code in typescript:",
                                            devMode: false
                                        },
                                        []
                                    ),
                                    new Content(
                                        this.contentFactory.returnComponent('code-editor'),
                                        {
                                            language: "typescript",
                                            code: 'public word: string = "Word";'
                                        },
                                        []
                                    ),
                                ]
                            )
                        ]
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: "You may ask why I did this, instead of just having more generic text get provided, or create some type of component that I just feed data into and it outputs my desired end state for that page. Like a simple blog. Well, the answer to that is that I wanted a more powerful, and customizable, application. I don't know what I am going to need to add from one course to another. I don't want a huge and complicated component that tries to handle every case.",
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: "Through this, I simply create a new component that handles the core logic, add it to my registry, and create it by passing in an object which contains the data that I want it to use. I don't want to have to worry about anything except for the parameters I want to pass it. Here is the cool thing, though. Our main component which is responsible for rendering all of this, makes use of recursive calls to nest our data together. This means that we can pass into it whatever format we want. This makes is extremely useful in regards to us creating a drag and drop site builder.",
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: "Because all of the logic is ferretted away into each of these individual components, which we are calling with our factory and resolving them at runtime, we can put some additional logic, aka, have a unique modal created which when we drop our element onto our page, it will ask for its metadata, and save that in the back-end. That means that we are not just limited to simple elements, but complex elements as well, which you saw with the code-editor.",
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: "This leaves the best part last, with some additional code, and manipulation of the compiler, we can also allow for the uploading of user created components as plugins, which a user can register, have saved to their account, and use them to create their own content. I am not showcasing that at this time, but I do have the working code on my computer. Pretty nifty.",
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('h2'),
                        {
                            body: "The back-end",
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: "The back-end is, in my opinion, much less complicated. It makes use of spring boot, with a mysql database. If you are interested, though, the site itself is containerized, and hosted on a managed k8s. Though I am never expecting to need to scale my application in this way, this does enable me to leverage cloud native ideologies. Remember that cloud native does not mean that an application lives within the cloud. It means that it makes use of those advantages gaines from the cloud computing delivery model.",
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: "I can easily extend this site, and I do plan to as time goes on, but if you are ever interested on how I did something, or why I did something one way over another, you can always reach out to me and just ask. I like CS and developing applications, and I am always looking to discuss and work with anyone.",
                            devMode: false
                        },
                        []
                    ),
                ]
            ),
        ]
    }
}
