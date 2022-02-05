import { Content } from "src/app/models/content/content.model";
import { ContentFactoryService } from "src/app/services/content-factory/content-factory.service";
import { CodeEditorComponent } from "src/app/ui-elements/advance-elements/code-editor/code-editor.component";
import { ParagraphComponent } from "src/app/ui-elements/basic-elements/paragraph/paragraph.component";
import { FlexContainerComponent } from "src/app/ui-elements/containers/flex-container/flex-container.component";

export class Dashboard {
    constructor(private contentFactory: ContentFactoryService) {}

    public data = {
        state: 'dashboard',
        nodes: [
            new Content(
                this.contentFactory.returnComponent('nav-list'),
                {

                },
                [
                    new Content(
                        this.contentFactory.returnComponent('drag-drop'),
                        {
                            items: [
                                {
                                    label: "paragraph",
                                    icon: 'notes',
                                    component: ParagraphComponent,
                                    description: 'a basic paragraph element'
                                }, {
                                    label: "code",
                                    icon: 'code',
                                    component: CodeEditorComponent,
                                    description: 'code layout'
                                }
                            ]
                        },
                        []
                    )
                ]
            )
        ]
    }
}