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
                    dir: "column",
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
                    )
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
                            body: `Here I assume you have no, or very little knowledge of what Computer Science is. I also assume that if you had to describe what a computer is, you would hestiate momentarily before spouting out sometype of nonsense over how the internet is made up of a series of tubes, and that the monitor is actually the computer as that is where the visuals come out of. Which there is nothing wrong with at all. If you are pass that point in your learning, maybe still read through this, as you never know what you may learn.`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: `So with this out of the way, let us go ahead and start with our journey!`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('h2'),
                        {
                            body: `What is Computer Science`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: `The first question we should have is pretty simple, what is computer science? It is such a fundamental question that so many people have trouble answering, and naturally is our starting position. So let us define what exactly computer science really is. At the highest level, we can view computer science as the process of solving a problem. Now obviously this definition abstracts away a lot of what makes computer science what it is, but it is a good stepping stone that we can build up as time goes by. To build on this a little more, we can further denote that computer science involves the process of taking some type of input, and from that input, generating some type of output. There, now that definition has a little bit more meat on it.`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: `By taking this new definition, we can break it down into three steps:`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('list'),
                        {
                            items: [
                                {
                                    item: 'Input for the problem'
                                },
                                {
                                    item: 'The Black Box (Where the computer comes into play as well as the algorithm)'
                                },
                                {
                                    item: 'The output produced from the Black Box'
                                }
                            ],
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: `At the most basic level, this is how we can view computer science. Just a way that we take our inputs for our problem, manipulate it in some way through an algorithm on our computer, and then produce an output with the intention of solving our initial problem. Don't worry about the term Black Box. For now, when you encounter it, just think of your computer, and how you don't truly understand what is going on inside of it, but you do know that it is responsible for generating your output.`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: `Pretty much every computer science problem can be boiled down into this. Furthermore, there is a reason why we do not explicitly mention a computer in the second step. First, it would probably be more apt to just call it an algorithm instead, as that is what we really will be focusing on. Second, despite computer being in the name, computer science isn't really the study of the computer itself. Instead, we are focusing on the study of software and software systems. As you can tell, maybe the above definition isn't has encompassing as we might have though. Perhaps it is even purposely a little misleading. How about we build on it a little more with a slightly more complex definition.`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: `So keeping the original definition we gave for computer science, we can say that computer science is the study of information, protocols, and algorithms for idealized and real automata. Pretty simple, and at this point if you don't understand that, I'm not sure if I can help you. Just kidding. I had no idea in hell what that meant when I first read it myself years back. So for the sake of our sanity, let us break it down into digeastible parts:`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('h3'),
                        {
                            body: `Information`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('list'),
                        {
                            items: [
                                {
                                    item: 'Knowledge that is represented in a form that is suitable for transmission and manipulation.'
                                },
                                {
                                    item: 'This is obviously step 1 of our previous definition, as this would be our inout data.'
                                }
                            ],
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('h3'),
                        {
                            body: `Protocol`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('list'),
                        {
                            items: [
                                {
                                    item: 'Rules for exchanging information without problems.'
                                },
                                {
                                    item: 'This is the bridge between step 1 and step 2 of our previous definition.'
                                },
                                {
                                    item: 'We will be breaking this down further once we tackle binery, but it deals with making our input something that we can process.'
                                }
                            ],
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('h3'),
                        {
                            body: `Algorithm`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('list'),
                        {
                            items: [
                                {
                                    item: 'An algorithm is an unambiquous, finite description in simple steps or actions.'
                                },
                                {
                                    item: 'This is our black box, or our second step of our original definition.'
                                },
                                {
                                    item: 'This is a very essential concept within computer science, and one that we will be talking about in great detail.'
                                }
                            ],
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('h3'),
                        {
                            body: `Automata/Automation`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('list'),
                        {
                            items: [
                                {
                                    item: 'This is probably the one that you will have the hardest time wrapping your head around.'
                                },
                                {
                                    item: 'Automata and automation is a self deciding or autonomous mechanism with bounded resources (which could be time and/or space).'
                                },
                                {
                                    item: 'We can view this as the process of our computer or program moving through a series of states.'
                                },
                                {
                                    item: 'This idea is a very important one, which may be hard to wrap your head around at this moment.'
                                }
                            ],
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: `One thing you should keep in mind is that computer science is a very broad field, like most other disciplines. You can view it as this, just because you are a lawyer, doesn't mean that you practice both family law and corporate law. I'm not even sure if those are both true law fields, but all I am saying is that I am not hiring a divorce lawyer to help with my anti-trust case. Within computer science, there are also many different disciplines, though they tend to be much more closely connected than my previous, terrible, analogy. The way I view it is that it is very helpful to have an understanding of many of the different disciplines within computer science, but you should really only master a few.`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: `So let's look at just a few of these disciplines:`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('list'),
                        {
                            items: [
                                {
                                    item: 'Artificial Intelligence'
                                },
                                {
                                    item: 'Computer-Human Interface / UX UI'
                                },
                                {
                                    item: 'Game Design'
                                },
                                {
                                    item: 'Networks'
                                },
                                {
                                    item: 'Computer Graphics'
                                },
                                {
                                    item: 'Information Security'
                                },
                                {
                                    item: 'Data Science'
                                },
                                {
                                    item: 'Software Engineering'
                                },
                                {
                                    item: 'Systems Engineering'
                                }
                            ],
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: `Now these are far from all encompassing, and within these disciplines, there are further sub-disciplines, but the aim of this is to give you some things for you to research yourself.`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: `One thing is that you really do not have to choose a discipline right now. You can just follow through with this, learning whatever you want, and choose one later one when you are working professionally. There really isn't any reason why you can't move between disciplines, as long as you have a good foundation in knowledge. That foundation is what I am really hoping to depart to you.`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('h2'),
                        {
                            body: `What is a Computer`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: `So we have talked long enough about the basics of what computer science is. Now I want to touch on the machine you are using right now. Despite what I said before, about computer science not really being about the study of the actual computer, it is still important to have an understanding of what it is.`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: `I get it, though, you probably know what a computer is. Especially at a high level. I am not here to insult your intelligence, or basic understanding of technology. Instead I want to try to setup the idea of a computer in the context of computer science itself.`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: `So let's define our computer as a machine whose purpose is to perform calculations and remember the results of said calculations. Viewing the computer through this lens will make it generic enough to encompass a bunch of different types of "computers", as well as having it fit nicely into our definition for computer science. It also allows to compare the computer against humans. It is this comparison that truly shows the power of the computer. See any person can perform calculations and remember the results of those calculations, but it is the power and efficiency of the computer which makes it stand out.`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: `A computer has the ability to perform these calculations billions of times per second, and has the capability of holding tetrabytes of information. I'm not sure how much information a human brain can hold, though I do bet it is a lot, but I doubt it can stand toe to toe with a computer. Ontop of this, we have manufacturers who are constantly pushing the limits of what we know a computer is capable of. If you need proof, just look at a mid-range computer even 10 years ago. Computers now, at the same price range, can vastly out perform. Now take an average kid from 10 years ago and compare to a kid now. The only difference is that they probably aren't on facebook.`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: `Despite all of this, there are still problems that are simply unattainable, at least within a reasonable time, which a computer cannot feasibly solve. Irregardless of this, computers are still able to push the limits of what humans are able to achieve.`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: `So much like how our definition of computer science evolved, let's evolve our definition of the computer. Now we want to say that a computer is a programmable machine which can perform both arithmetic, as well as logical, operations in an automatic and sequential way. It also has the ability to store, process, and receive data.`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: `To wrap this snuggly into our definition of computer science, we can say that at its most base level, programming is just about how we store and process data. With this, we can also say that a computer is just a data processor. Furthermore, we can break the idea of a data processor down into three core parts:`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('list'),
                        {
                            items: [
                                {
                                    item: 'Input of Data'
                                },
                                {
                                    item: 'Manipulation/Processing of Data'
                                },
                                {
                                    item: 'Giving Output'
                                }
                            ],
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: `This should really look familar, as it is our definition of what computer science is. Though a computer now does much more than just simple data processing, the intial computers were built for this express purpose. To be honest, I would even argue that most, if not all, processes involve some form of data processing, even if in the most abstract of ways.`,
                            devMode: false
                        },
                        []
                    ),
                    new Content(
                        this.contentFactory.returnComponent('paragraph'),
                        {
                            body: `So now that we have a working model of what a computer is, we want to also define its major functions as well:`,
                            devMode: false
                        },
                        []
                    )
                ]
            ),
        ]
    }
}
