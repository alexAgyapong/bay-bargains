import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/services/item.service';
import { FindingService } from './../shared/services/finding.service';
import { RequestOption } from '../shared/models/item';
import { TokenService } from './../shared/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private itemService: ItemService,
              private findingService: FindingService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    const request = {
      query: 'drone',
      limit: 5
    } as RequestOption;
    // this.itemService.searchItem(request).subscribe();
    // this.findingService.searchProductByKeywords().subscribe();
    // this.tokenService.getToken().subscribe();
  }

}
