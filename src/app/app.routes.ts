
import { Routes } from '@angular/router';


export const routes: Routes = [
  

      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
      {
        path: "home",
        loadComponent: () =>
          import("./Component/home/home.component").then((m) => m.HomeComponent),
      },
      {
        path: "about",
        loadComponent: () =>
          import("./Component/about/about.component").then((m) => m.AboutComponent),
      },
      {
        path: "services",
        loadComponent: () =>
          import("./Component/services/services.component").then(
            (m) => m.ServicesComponent
          ),
      },
      {
        path: "contact",
        loadComponent: () =>
          import("./Component/contact/contact.component").then((m) => m.ContactComponent),
      },
      {
        path: "**",
        loadComponent: () =>
          import("./Component/not-found/not-found.component").then(
            (m) => m.NotFoundComponent
          ),
      },
      
      
    ]
