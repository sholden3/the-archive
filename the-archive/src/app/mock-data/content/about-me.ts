import { Content } from "src/app/models/content/content.model";
import { ContentFactoryService } from "src/app/services/content-factory/content-factory.service";

export class AboutMe {
    constructor(private contentFactory: ContentFactoryService) {}
    public data = {
        id: "3424123",
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
                  body: "About Me",
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
                  body: "I'm just a gamer and aspiring software developer. Throughout my professional career, I have always strived to not only learn, but push the boundaries of what I want to create. Whether this is on the business side of the house, or corraborating with my IT partners.",
                  devMode: false
                },
                []
              ),
              new Content(
                this.contentFactory.returnComponent('paragraph'),
                {
                  body: "My personal goal is to one day start my own company, or lead my own department. Through this goal, I have learned one important fact. This fact is that if you want to succeed yourself, you need to raise up the others around you. It is through this ideal that I have spent my last few years helping and training others around me.",
                  devMode: false
                },
                []
              ),
              new Content(
                this.contentFactory.returnComponent('paragraph'),
                {
                  body: "This is why my portfolio also includes courses on CS that I have hand-written myself. These courses are a multi-year long process, which I dive into different books, tutorials, and videos to learn all I can about a subject. I then aim to create my own material in a way that I wish it was taught to me. Now, it may not be your cup of tea, but if it helps just one person become a developer themselves, that is all that matters to me.",
                  devMode: false
                },
                []
              )
            ]
          ),
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
                  body: "My Journey into CS",
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
                  body: "I first started getting into programming when my uncle lent me my first computer when I was 8. While all of the other kids had their N64s, and PS1s, I was playing Counter Strike and Diablo. I graduated from that to eventually spending most of my time playing BroodWar and Morrowind. One great benefit from this was that anytime my game broke, or I wanted to install a new game, I was forced to figure out how to do it myself. Especially in the case of Morrowind. This was my first real foray into what would become my love of computers.",
                  devMode: false
                },
                []
              ),
              new Content(
                this.contentFactory.returnComponent('paragraph'),
                {
                  body: "Despite this, it took me a long time to really get into programming in any capacity, but my interest first peaked when my step dad, who was an engineer, gave me his copy of the NeverWinter Nights modding book. I never did learn how to actually mod the game, but I did read a great deal of the book itself. It wasn't until college that I actually started to attempt to learn how to program. I first started with learning R and Python for my econometrics class. Soon after that I decided I wanted to dive into C++.",
                  devMode: false
                },
                []
              ),
              new Content(
                this.contentFactory.returnComponent('paragraph'),
                {
                  body: "Was this a mistake, perhaps. It did teach me one important thing though, and that was just simply knowing how to program is not enough. I could learn the syntax all day, but when I hit the wall when it came to simply compiling and linking my code, I knew that I dadn't know enough. So over the years, I tried, and failed largely, in learning how to program. I didn't know where to start in regards to learning the CS behind it in a meaningful way. Despite that I never gave up.",
                  devMode: false
                },
                []
              ),
              new Content(
                this.contentFactory.returnComponent('paragraph'),
                {
                  body: "Eventually, I started rubbing shoulders with the Senior SWE's and Staff SWE's in my company. This is when I really started pivoting from learning how to program, and learning how to become a computer scientist. At this point, I started seeing where my knowledge was really lacking. Where I needed to focus my efforts. I decided to completely restart my learning progress from step one, attempting to focus on what I thought should be focused on.",
                  devMode: false
                },
                []
              ),
              new Content(
                this.contentFactory.returnComponent('paragraph'),
                {
                  body: "That is largely what my goal is in my courses. I aim to give a rundown of what I believe are important topics you should know, with a sprinkling of real world applications that you can use with them. I won't lie, it won't be the easy to follow, nor am I the expert at anything. I may miss topics, and I will try to relay them in the best way I can, but I may get somethings wrong. If I do, I will try to go back and change them. Despite all of this, I do think that if you go through these in order, you will come out a stronger programmer, if not a stronger computer scientist yourself.",
                  devMode: false
                },
                []
              ),
            ]
          ),
        ]
      }
}
