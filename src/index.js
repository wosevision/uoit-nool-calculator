import angular from 'angular';

import { RoundFilter } from './calculator/common/round.filter';
import { GpaField } from './calculator/gpa/gpa.component';
import { GradeForm } from './calculator/form/form.component';
import { GradeGoal } from './calculator/goal/goal.component';
import { GradeDisplay } from './calculator/display/display.component';
import { GradeCalculator } from './calculator/calculator.component';

export default angular.module('gradeCalculator', [])
  .filter('round', RoundFilter)
  .component('gpaField', GpaField)
  .component('gradeForm', GradeForm)
  .component('gradeGoal', GradeGoal)
  .component('gradeDisplay', GradeDisplay)
  .component('gradeCalculator', GradeCalculator)
  .name;
