/**
 * Created by harryliu on 12/25/16.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SchoolsComponent} from "./schools.component";
/**
 * Created by harryliu on 12/18/16.
 */
const schoolRoutes: Routes = [
  {path: 'schools', component: SchoolsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(schoolRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SchoolsRoutingModule {}
