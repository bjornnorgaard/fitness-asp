import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseComponent } from './home/exercise/exercise.component';
import { HomeModule } from './home/home.module';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgMaterialModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    UserModule,
  ],
  entryComponents: [
    ExerciseComponent
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard]
})
export class AppModule {
}
