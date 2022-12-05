import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {
  group:any;
  showNameEmail:boolean=false;

  requireName:boolean=false;
  requireEmail:boolean=false;

  constructor() { }

  ngOnInit(): void {
    this.group=new FormGroup({
      name:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required]),
      bio:new FormControl("",[Validators.required]),
      select:new FormControl("",[Validators.required])
    });
  }

  buttonClick():void{
    this.showNameEmail=!this.showNameEmail;
  }

  checkIfRequireEmail():void{
    if(this.group.get("email").value.length>0){
      this.requireEmail=false;
    }else{
      this.requireEmail=true;
    }
  }

  checkIfRequireName():void{
    // alert("called")
    // alert(this.group.get("name").value.length)
    
    if(this.group.get("name").value.length>0){
      this.requireName=false;
    }else{
      this.requireName=true;
    }
  }



}
