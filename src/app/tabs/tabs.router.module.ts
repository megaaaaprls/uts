import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'tab7',
        children: [
          {
            path: '',
            loadChildren: '../tab7/tab7.module#Tab7PageModule'
          }
        ]
      },
      {
        path: 'tab8',
        children: [
          {
            path: '',
            loadChildren: '../tab8/tab8.module#Tab8PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tab5',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tab5',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
