import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css'],
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingService: ListingsService) {}

  ngOnInit(): void {
    this.listingService
      .getListings()
      .subscribe((listings) => (this.listings = listings));
  }
}
