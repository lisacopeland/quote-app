import {Component, OnInit} from '@angular/core';
import { AlertController, NavParams} from "ionic-angular";
import { Quote } from "../../data/quote.interface";
import { QuotesService } from "../../services/quotes";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
    quoteGroup: { category: string, quotes: Quote[], icon: string };

    constructor(
      private quotesService: QuotesService,
      private alertCtrl: AlertController,
      private navParams: NavParams) {}

    ngOnInit() {
      this.quoteGroup = this.navParams.data;
    }

    onAddToFavorite(selectedQuote: Quote) {
      // Add the role when you want to specify the handler for any cancel
      // actions
        const alert = this.alertCtrl.create({
          title: 'Add Quote',
          subTitle: 'Are you sure?',
          message: 'Are you sure you want to add the quote?',
          buttons: [
            {
              text: 'No, I changed my mind',
              handler: () => {
                console.log('no');
              }
            },
            {
              text: 'Yes, go ahead',
              handler: () => {
                console.log('ok');
                this.quotesService.addToFavorites(selectedQuote);
              }
            }

            ]
        });
        alert.present();
    }

  onUnFavorite(quote: Quote) {
     this.quotesService.removeFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
      return this.quotesService.isFavorite(quote);
  }
}
