import { Component, OnInit } from '@angular/core';
import { DataService } from './../shared/services/data.service';
import { FindingService } from './../shared/services/finding.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService, private findingService: FindingService) { }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe();
  }

}
