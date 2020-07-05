import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../project';
import { label } from '../../priority';

@Component({
  selector: 'app-project-info-card',
  templateUrl: './project-info-card.component.html',
  styleUrls: ['./project-info-card.component.css']
})
export class ProjectInfoCardComponent { // Maybe need an Oninit?
  @Input() project: Project;
  @Input() showTasks: boolean;
  @Output() showTasksChange = new EventEmitter<boolean>();

  getLabel = label; // Can this be cleaner?
  showTask(show: boolean): void {
    this.showTasksChange.emit(show);
    console.log('emitted ' + show);
  }
}

