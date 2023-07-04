import { Component, OnInit } from '@angular/core';
import { AccordiantFormService } from '../shared/service/accordian-form.service';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {
  accordianList : any;

  constructor(private accordianServe : AccordiantFormService ){}

  ngOnInit(): void {

    this.accordianServe.accordiantSub.subscribe( res => {
      this.accordianList = res ;
    })
    console.log(this.accordianList);
    
  }

}
