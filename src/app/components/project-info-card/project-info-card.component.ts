import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../project';
import { label } from '../../priority';

@Component({
  selector: 'app-project-info-card',
  templateUrl: './project-info-card.component.html',
})
export class ProjectInfoCardComponent { // Maybe need an Oninit?
  @Input() project: Project;
  @Input() showTasks: boolean;
  @Output() showTasksChange = new EventEmitter<boolean>();

  public getLabel = label; // Can this be cleaner?
  showTask(show: boolean): void {
    this.showTasksChange.emit(show);
  }
}

