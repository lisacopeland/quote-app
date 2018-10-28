import {Quote} from "../data/quote.interface";

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }
  removeFromFavorites(quote: Quote) {
    const position = this.favoriteQuotes.findIndex(x => x.id === quote.id);
    this.favoriteQuotes.splice(position, 1);
  }

  getFavorites() {
    return this.favoriteQuotes.slice();
  }

  isFavorite(quote) {
    return this.favoriteQuotes.find(x => x.id === quote.id);
    }
}
