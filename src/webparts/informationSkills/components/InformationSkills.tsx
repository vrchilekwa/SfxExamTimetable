import * as React from 'react';
import styles from './InformationSkills.module.scss';
import { IInformationSkillsProps } from './IInformationSkillsProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class InformationSkills extends React.Component<IInformationSkillsProps, {}> {
  public render(): React.ReactElement<IInformationSkillsProps> {
    return (
      <div className={ styles.informationSkills }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Information Skills</span>
              <p className={ styles.subTitle }>Book interventions for students</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
