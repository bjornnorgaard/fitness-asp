import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Workout } from '../class/workout';
import { Exercise } from '../class/exercises';

@Injectable()
export class FitnessService {

  private baseUrl = environment.fitnessApiUrl;

  constructor(private http: HttpClient) {
  }

  getAllWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.baseUrl + '/workouts');
  }

  createExercise(exercise: Exercise): void {
    this.http.post(this.baseUrl + '/exercises', exercise).subscribe();
  }

  createWorkout(title: string): void {
    this.http.post(this.baseUrl + '/workouts', {title}).subscribe();
  }

  createLog(workoutId: number): void {
    this.http.post(this.baseUrl + '/logs', {workoutId}).subscribe();
  }

}
