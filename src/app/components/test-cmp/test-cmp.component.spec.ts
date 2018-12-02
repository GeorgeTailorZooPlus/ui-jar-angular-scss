import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCmpComponent } from './test-cmp.component';
import { By } from 'protractor';

describe('TestCmpComponent', () => {
  let component: TestCmpComponent;
  let fixture: ComponentFixture<TestCmpComponent>;

  beforeEach(async(() => {

	/**
	 * @uijar TestCmpComponent
	 */
    TestBed.configureTestingModule({
      declarations: [ TestCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    /** @uijarexample Buttons */
	it('should be created and set correct CSS-classes', () => {
		
	});
});
