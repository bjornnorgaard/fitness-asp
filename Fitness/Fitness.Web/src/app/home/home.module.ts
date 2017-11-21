import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { ExerciseComponent } from './exercise/exercise.component';
import { HomeComponent } from './home/home.component';
import { WorkoutComponent } from './workout/workout.component';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule
  ],
  declarations: [HomeComponent, WorkoutComponent, ExerciseComponent],
})
export class HomeModule {
}
