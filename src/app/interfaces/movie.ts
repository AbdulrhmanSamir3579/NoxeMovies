export interface Movie {
    page:          number;
    results:       MovieResults[];
    total_pages:   number;
    total_results: number;
}

export interface MovieResults {
    adult:             boolean;
    backdrop_path:     string;
    id:                number;
    title:             string;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    poster_path:       string;
    media_type:        MediaType;
    genre_ids:         number[];
    popularity:        number;
    release_date:      Date;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum MediaType {
    Movie = "movie",
}

export enum OriginalLanguage {
    En = "en",
    Fr = "fr",
    Ja = "ja",
    Zh = "zh",
}
