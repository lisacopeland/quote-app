import { Component, OnInit } from '@angular/core';
import { ModalController} from "ionic-angular";

import { Quote } from "../../data/quote.interface";
import { QuotesService } from "../../services/quotes";
import { QuotePage } from "../quote/quote";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit {
  quotes: Quote[];

  constructor(private modalCtrl: ModalController,
              private quotesService: QuotesService) {}

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavorites();
  }

  ngOnInit() {

  }

  onDisplayQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        console.log('got result = ' + remove);
        this.onUnFavorite(quote);
      }
    })
  }

  onUnFavorite(quote: Quote) {
    this.quotesService.removeFromFavorites(quote);
    // Reload the quotes when you remove one
    this.quotes = this.quotesService.getFavorites();
  }

}
