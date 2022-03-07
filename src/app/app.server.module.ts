import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxFileDropComponent } from './ngx-file-drop/ngx-file-drop.component';

const routes: Routes = [
  //{ path: 'shell', component: NgxFileDropComponent }
];

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
  declarations: [
    //NgxFileDropComponent
  ],
  exports: [
    //NgxFileDropComponent
  ]
})
export class AppServerModule {}
