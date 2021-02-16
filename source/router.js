import { movieOverview } from './movieOverview.js';
import { movieDetails } from './movieDetails.js';

export function router() {
    routie({'': movieOverview});
    routie({':id': movieDetails});
}