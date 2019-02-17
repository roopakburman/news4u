import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { NewsFeedPage } from "../news-feed/news-feed.page";

const routes: Routes = [
  {path: 'tabs',component: TabsPage,
    children: [
      {path: 'tab1',children: [{path: '',loadChildren: '../tab1/tab1.module#Tab1PageModule'}]},
      {path: 'tab2',children: [{path: '',loadChildren: '../tab2/tab2.module#Tab2PageModule'}]},
      {path: 'tab3',children: [{path: '',loadChildren: '../tab3/tab3.module#Tab3PageModule'}]},
      { path: 'news-feed',children: [{path: '',loadChildren: '../news-feed/news-feed.module#NewsFeedPageModule'}]},
      { path: 'news-detail', loadChildren: '../news-detail/news-detail.module#NewsDetailPageModule'},
      {path: '',redirectTo: '/tabs/news-feed',pathMatch: 'full'}
    ]
  },
  {path: '',redirectTo: '/tabs/news-feed',pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
