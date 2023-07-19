import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  Questions = [
    {
      Type: 'Radio',
      label: 'Expirience',
      id: 'exp',
      description: 'How much is your expirience?',
      options: ['0', '1-5', '6-9', '10-12'],
    },
    {
      Type: 'Check_box',
      label: 'Favourite Fruits',
      id: 'fruits',
      description: 'What is your favourite fruit?',
      options: ['Apple', 'Banana', 'Mango', 'Orange'],
    },
    {
      Type: 'Radio',
      label: 'Age_Group',
      id: 'age',
      description: 'How old is you?',
      options: ['18-22', '22-25', '26-29', '30-32'],
    },
    {
      Type: 'Radio',
      label: 'Height',
      id: 'height',
      description: 'How much is your height',
      options: ['3-4', '4-6', '6-9', '10-12'],
    },
    {
      Type: 'Short-Answer',
      label: 'Note',
      id: 'note',
      description:
        'Write a note on the current situation of the financial system',
    },
    {
      Type: 'Detail-Answer',
      label: 'Essay',
      id: 'essay',
      description: 'Write an essay on cow',
    },
  ];
  forms = {
    title: 'Title',
    path: '/path',
    ques: this.Questions,
  };
  constructor() {}
  getforms(): any {
    return this.forms;
  }
}
