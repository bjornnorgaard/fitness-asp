import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Exercise } from '../../shared/class/exercises';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {

  public exerciseName: string;
  public repsAmount: string;
  public exerciseDescription: string;
  public setsAmount: string;

  constructor(public dialogRef: MatDialogRef<ExerciseComponent>) {
  }

  closeDialog() {
    this.dialogRef.close(undefined);
  }

  saveDialog() {
    const exercise = new Exercise(undefined,
      this.exerciseName,
      this.exerciseDescription,
      this.setsAmount,
      this.repsAmount);

    this.dialogRef.close(exercise);
  }
}
