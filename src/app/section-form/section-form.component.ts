import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AccordiantFormService } from '../shared/service/accordian-form.service';

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.css']
})
export class SectionFormComponent implements OnInit {
  accordianForm : NgForm | any;
  // mylist : Accordiant[] | any ;
  // isCollapse : boolean = true;
  
  constructor(private accordiantServ : AccordiantFormService){}
  
  onMyBtnClick(eve : any){
    console.log(eve.currentTarget.ariaExpanded);

    if(eve.currentTarget.ariaExpanded){
      eve.currentTarget.lastChild.classList.toggle('fa-minus');
    }
  }

  ngOnInit(): void {
    this.accordianForm = new FormGroup({
      heading : new FormControl('' , [Validators.required]),
      details : new FormControl('', [Validators.required])
    })
  }
  onSubmitEve(){
    this.accordiantServ.getBlogFromForm(this.accordianForm.get('heading').value , this.accordianForm.get('details').value);
    this.accordianForm.reset();
  }
}
