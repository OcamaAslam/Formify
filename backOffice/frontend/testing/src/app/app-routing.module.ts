import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  { path: '', component: QuestionComponent },
  { path: 'input', component: InputComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
