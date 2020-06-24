import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      category: [''],
      searchTerm: ['']
    });
  }

  search() {
    const searchTermControl = this.searchForm.get('searchTerm');
    console.log('search', searchTermControl);
    if (searchTermControl.value) {
      this.router.navigate(['/items'], { queryParams: { searchTerm: searchTermControl.value } });
    }
  }
}
