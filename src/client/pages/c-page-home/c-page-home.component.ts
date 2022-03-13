import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'f-c-page-home',
  templateUrl: './c-page-home.component.html',
  styleUrls: ['./c-page-home.component.scss']
})
export class CPageHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToFitness = () => { this.router.navigate(['fitness']); };

  goToFood = () => { this.router.navigate(['food']); };

}
