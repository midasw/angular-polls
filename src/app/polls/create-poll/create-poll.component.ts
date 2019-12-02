import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { CreatePollDto } from '../models/create-poll-dto.model';
import { PollsService } from '../polls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private _pollsService: PollsService, private _router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      formArray: this.fb.array([
        this.initItemRow(),
        this.initItemRow()
      ])
    });
  }

  initItemRow() {
    return this.fb.group({
      answer: ['']
    });
  }

  addInput() {
    const arrayControl = <FormArray>this.myForm.controls['formArray'];
    arrayControl.push(this.initItemRow());
  }

  delInput(index: number) {
    const arrayControl = <FormArray>this.myForm.controls['formArray'];
    arrayControl.removeAt(index);
  }

  onSubmit() {
    let name = this.myForm.value.name;
    let answers = this.myForm.value.formArray;

    let answersArray: string[] = [];

    answers.forEach(a => {
      answersArray.push(a.answer);
    });

    let dto = new CreatePollDto(name, answersArray);

    this._pollsService.createPoll(dto).subscribe(result => {
      this._router.navigate(['/poll/' + result.pollID]);
    }, error => {
      console.log(error);
    });
  }
}
