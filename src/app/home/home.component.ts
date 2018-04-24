import { Component, OnInit } from '@angular/core';
import { UitBreadcrumbService } from '@laposte/ui-theme';
import { environment } from '../../environments/environment';

/**
 * HomeComponent
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
   * Application name
   */
  appName: string;

  /**
   * HomeComponent Constructor
   */
  constructor(
    public breadcrumbService: UitBreadcrumbService
  ) {
    this.appName = environment.application_name;
  }

  /**
   * OnInit Event
   */
  ngOnInit() {
    // Reset breadcrumb
    this.breadcrumbService.set([]);
  }

}
