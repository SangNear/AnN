import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./shared/pages/home/home.component";

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "home",
    },
    {
        path: "home",
        component: HomeComponent,
    },
    // {
    //     path: "login",
    //     component: LoginComponent,
    // },
    {
        path: "login",
        loadChildren: () =>
            import("./authentication/authentication.module").then(
                (mod) => mod.AuthenticationModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule],
})
export class AppRoutingModule {}
