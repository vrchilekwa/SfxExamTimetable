import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'InformationSkillsWebPartStrings';
import InformationSkills from './components/InformationSkills';
import { IInformationSkillsProps } from './components/IInformationSkillsProps';

export interface IInformationSkillsWebPartProps {
  description: string;
}

export default class InformationSkillsWebPart extends BaseClientSideWebPart<IInformationSkillsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IInformationSkillsProps > = React.createElement(
      InformationSkills,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
