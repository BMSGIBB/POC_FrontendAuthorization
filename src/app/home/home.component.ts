import {Component, OnInit, Type} from '@angular/core';
import {AbsenzenComponent} from '../absenzen/absenzen.component';
import {AbsenzenEditComponent} from '../absenzen/absenzen-edit/absenzen-edit.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  componentAbsenzen: Type<AbsenzenComponent> = AbsenzenComponent;
  componentEditAbsenzent: Type<AbsenzenEditComponent> = AbsenzenEditComponent;

  constructor() { }

  ngOnInit() {
  }

}
