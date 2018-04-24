/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StubModule } from '../../testing/stub.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

/**
 * HomeComponent Unit testing
 */
describe('[Component] HomeComponent', () => {

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  /**
   * Async Before each
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, StubModule],
      declarations: [HomeComponent]
    }).compileComponents();
  }));

  /**
   * Sync before each
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * @Test: Component creation test
   */
  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  /**
   * @Test: Component display external HTML template
   */
  it('Should display external HTML template', () => {
    // query for the message <p> by CSS element selector
    expect(fixture.debugElement.query(By.css('#home'))).toBeTruthy();
  });
});
