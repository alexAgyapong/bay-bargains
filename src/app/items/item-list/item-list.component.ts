import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/shared/services/item.service';
import { RequestOption } from 'src/app/shared/models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  searchTerm: string;

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.searchTerm = this.route.snapshot.queryParamMap.get('searchTerm');
    this.route.queryParamMap.subscribe(params => {
      this.searchTerm = params.get('searchTerm');
      console.log('search term in list', this.searchTerm);
      this.getSearchedItems();
    });
  }


  private getSearchedItems() {
    const request = {
      query: this.searchTerm || 'drone',
      limit: 5
    } as RequestOption;

    this.itemService.searchItem(request).subscribe();
  }
}
