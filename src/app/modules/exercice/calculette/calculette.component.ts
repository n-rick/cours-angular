import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent implements OnInit {

  result:number | null = null;
  // calculetteForm = new FormGroup({
  //   value1: new FormControl(0, Validators.required),
  //   value2: new FormControl(0, Validators.required),
  //   result: new FormControl(0),
  // })

  // avec formBuilder :
  calculetteForm = this.fb.group({
    value1: [null, Validators.required],
    value2: [null, Validators.required],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  compute(op:string){
    this.result = eval(this.calculetteForm.value.value1 + op + this.calculetteForm.value.value2)
  }

}
