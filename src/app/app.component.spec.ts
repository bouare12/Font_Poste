import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

/**
 * HomeComponent Unit testing
 */
describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  /**
   * Async Before each
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  /**
   * Sync before each
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * @Test: Component creation test
   */
  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  /**
   * @Test: Component creation test
   */
  it(`should have as title mentionned in environment file`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.appName).toEqual(environment.application_name);
  }));

});
