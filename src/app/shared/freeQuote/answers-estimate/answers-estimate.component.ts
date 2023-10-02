import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-answers-estimate',
  templateUrl: './answers-estimate.component.html',
  styleUrls: ['./answers-estimate.component.scss']
})
export class AnswersEstimateComponent implements OnInit{
  coverage: number = 100;
  term: number = 10;
  termRate: number =1;  
  genderRate:number =1;
  quote: number = this.caculateQuote();
  answer: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute){

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(data =>{
      this.answer= JSON.parse(data['detail']);
      console.log(this.answer);
    })
    if(this.answer.gender=='female'){
      this.genderRate=0.8;
      this.quote= this.caculateQuote();
    }
  }

  sliderFormatter(value: number):string{
    var showValue = (value*1000).toString();
    return '$ '+`${showValue}`;
  }
  termFormatter(value: number):string{
    if(value==1){
      return `${value}`+' year';
    }
    return `${value}`+' years';
  }

  caculateQuoteByCoverage(value: number){
    this.quote = this.caculateQuote();
  }

  caculateQuoteByTerm(value: number){
    this.term = value;
    if(value<=10){
      this.termRate=1;
    }else if(value<=15){
      this.termRate=1.25;
    }else if(value<=20){
      this.termRate=1.5;
    }else if(value<=25){
      this.termRate=1.75;
    }else if(value<=30){
      this.termRate=2;
    }
    this.quote = this.caculateQuote();
  }

  editAnswer(){
    const routerParams: NavigationExtras = {
      queryParams: {
        detail: JSON.stringify(this.answer)
      }
    };
    this.router.navigate(['answers'],routerParams);
  }

  caculateQuote():number{
    return this.coverage*0.01*this.termRate*this.genderRate;
  }

}
