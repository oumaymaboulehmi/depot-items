import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { ItemService } from '../../services/item-service.service';
import { Review } from '../../model/review.model';
import { Item } from '../../model/item.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  items: Item[] = [];
  reviews: Review[] = [];
  selectedItem: Item | null = null;

  constructor(private reviewService: ReviewService, private itemService: ItemService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe((items) => {
      this.items = items;
    });
  }

  onItemSelected(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const itemId = selectElement.value;
  
    this.reviewService.getReviewsByItemId(itemId).subscribe(
      (reviews) => {
        console.log('Reviews fetched:', reviews); // Vérification des données
        this.reviews = reviews;
      },
      (error) => {
        console.error('Error fetching reviews:', error); // Gérer les erreurs éventuelles
      }
    );
  }
  
}
