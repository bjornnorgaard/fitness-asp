import { Exercise } from './exercises';

export interface Workout {
  _id: Number;
  title: String;
  exercises: Exercise[];
}
