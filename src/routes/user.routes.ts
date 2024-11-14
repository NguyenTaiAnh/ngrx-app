import {Routes} from "@angular/router";
import {UserPage} from "../app/UI/user/user.page";

export const UserRoutes: Routes = [
  {
    path: '',
    component: UserPage,
    data: { breadcrumb: 'Users' }
  }
]
