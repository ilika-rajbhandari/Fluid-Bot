import { Component, OnInit, AfterContentInit, ViewChild, ElementRef} from '@angular/core';
import { $ } from 'protractor';
import { ToastService } from '../_services/toast.service';
import { Router } from '@angular/router';

import {
  areaLocality,
  locality,
  northDelhiLocality, southDelhiLocality
} from '../stats-data';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
  isChangeArea: Boolean;
  public arealocality: locality[] = areaLocality;
  public selectedLocality: locality;
  locality1 = [];
  locality2 = [];
  isVisible: Boolean;


  name:string;
  ngOnInit(): void {
  }
  public async goToSignin() {
    let userType;
    await this.router.navigate([`/signin`], {
    });
  }

  public _values1 = [
    { id: 1, val: "North Delhi" },
    { id: 2, val: "South Delhi" },
    { id: 3, val: "East Delhi" },
  ];
  public _values2 = [];

  constructor( public toastService: ToastService, private router: Router) {
    this.name = 'Angular2'
  }

  firstDropDownChanged(val: any) {
    const obj = this._values1[val];
    

    if (!obj) return;

    if (obj.id == 1) {
      this._values2 = ["Pitampura", "Karol Bagh", "Sadar Paharganj", "Civil Lines"];
    }
    else if (obj.id == 2) {
      this._values2 = ["Central Delhi", "South Delhi", "West Delhi","Najafgarh"];
    }
    else {
      this._values2 = [];
    }
    
  }

  showSuccess() {
        this.toastService.show('Complaint has been registered. Details will be sent to your email address.', {
        classname: 'bg-success text-light',
        delay: 2000,
        autohide: true,
      });
    }
    
  }
 