import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {ROUTES} from './core/constants/routes.const';
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, NzBreadCrumbModule, NzIconModule, NzMenuModule, NzLayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isCollapsed = false;

  title = 'app-ngrx';
  urls = [
    {
      title: 'Home',
      url: ROUTES.HOME.BASE
    },
    {
      title: 'Product',
      url: ROUTES.PRODUCT.BASE
    },
    {
      title: 'User',
      url: ROUTES.USER.BASE
    },
  ]
}
