import {Routes} from "@angular/router";
import {ROUTES} from "../app/core/constants/routes.const";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTES.HOME.BASE
  },
  {
    path: ROUTES.HOME.BASE,
    loadChildren: () => import('../routes/home.routes').then((m) => m.HomeRoutes)
  },
  {
    path: ROUTES.PRODUCT.BASE,
    loadChildren: () => import('../routes/product.routes').then((m) => m.ProductRoutes)
  },
  {
    path: ROUTES.USER.BASE,
    loadChildren: () => import('../routes/user.routes').then(m => m.UserRoutes)
  },
  {path: '**', redirectTo: ROUTES.HOME.BASE},
]
