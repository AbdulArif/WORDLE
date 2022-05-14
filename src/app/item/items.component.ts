import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Button, EventData, maxLengthProperty, Page, TextField } from '@nativescript/core';

import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  testForm: FormGroup
  name = "Arif"
  @ViewChild("input2") input2: TextField
  constructor(public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildTestForm()
  }
  buildTestForm() {
    this.testForm = this.formBuilder.group({
      firstLetter: ['', Validators.required],
      secondLetter: ['', Validators.required]
    })
  }

  onButtonTap(args: EventData) {
    console.log(args.eventName)
    console.log("hiiiiiiii");
    //const button = <Button>args.object; 
    //console.log(button.text);
  }

  onKeydown(event: Event) {
    console.log(event)
  }
  onTextChange(args: EventData) {
    let tf = args.object as TextField;

    console.log(args.eventName)
    console.log(tf.text.length)
    if (tf.text.length == 1) {
      //this.input2?.focus()
      var Forename = document.getElementById("input2");
      Forename.focus();

    }

  }
  emitTap(a: any) {
    console.log(a)
    console.log("AAAAAAAAAAAAAAA")
  }


}
