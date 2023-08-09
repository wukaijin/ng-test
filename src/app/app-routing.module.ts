/*
 * @Author: Carlos
 * @Date: 2023-07-29 17:29:05
 * @LastEditTime: 2023-08-09 11:45:52
 * @FilePath: \ng-test\src\app\app-routing.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'store',
    loadChildren: () =>
      import('./pages/store/store.module').then(
        (m) => m.StoreModule
      ),
  },
  {
    path: 'todo-list',
    loadChildren: () =>
      import('./pages/todo-list/todo-list.module').then(
        (m) => m.TodoListModule
      ),
  },
  {
    path: 'slot',
    loadChildren: () =>
      import('./pages/slot/slot.module').then((m) => m.SlotModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
