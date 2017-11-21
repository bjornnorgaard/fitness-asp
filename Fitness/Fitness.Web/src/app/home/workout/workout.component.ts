import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FitnessService } from '../../shared/service/fitness.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent {

  workoutFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private fitnessService: FitnessService) {
    this.workoutFormGroup = formBuilder.group({
      'title': [null, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)])]
    });
  }

  postWorkout() {
    const title = this.workoutFormGroup.controls['title'].value as string;
    console.log('Creating workout with title: ' + title);
    this.fitnessService.createWorkout(title);

    setTimeout(() => {
      window.location.reload();
      this.router.navigate(['/']);
    }, 50);
  }

  cancel() {
    this.router.navigate(['/']);
  }

}
