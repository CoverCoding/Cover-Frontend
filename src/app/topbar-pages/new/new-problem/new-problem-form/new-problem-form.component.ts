import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-problem-form',
  templateUrl: './new-problem-form.component.html',
  styleUrls: ['./new-problem-form.component.sass']
})
export class NewProblemFormComponent implements OnInit {

  title: string = '';
  school: string = '';
  courseNumber: string = '';
  term: string = '';
  year: string = '';
  instructor: string = '';
  problemBody: string = '';
  error: string = 'Title cannot be empty';

  constructor() { }

  ngOnInit() {
  }

}
