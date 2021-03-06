import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {Link} from "../../../../../../../shared/Link";

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class LinkComponent implements OnInit {

  @Input()
  link: Link;

  constructor() { }

  ngOnInit() {
  }
}
