import { movieOverview } from './movieOverview.js';
import { movieDetails } from './movieDetails.js';

export function router() {
    routie({':id': movieDetails});
    routie({'': movieOverview('none')});
};

