import { movieOverview } from './movieOverview.js';
import { movieDetails } from './movieDetails.js';

export function router() {
    routie({'': function() {
        movieOverview()
    }});
    routie({':id': function() {
        movieDetails()
    }})
}