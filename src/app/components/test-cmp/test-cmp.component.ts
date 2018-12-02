import { Component, OnInit } from '@angular/core';

/**
 * @group Forms
 * @component Test
 * @description
 * <div>It's possible use <b>html</b> in the description</div>
 */
@Component({
  selector: 'app-test-cmp',
  templateUrl: './test-cmp.component.html',
  styleUrls: ['./test-cmp.component.scss']
})
export class TestCmpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
