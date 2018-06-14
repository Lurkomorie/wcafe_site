import {IResults} from './IResults';

export interface IMemberEntity {
    count: number;
    next: string;
    previous: string;
    results: IResults;
}
