import { IMemberEntity } from '../../app/model';
import { members } from './mockData';

const baseURL = 'http://api.worldcafe.ru/pub/objects/';

const fetchMembers = (): Promise<IMemberEntity> => {
    return Promise.resolve(members);
};

const fetchMembersAsync = (): Promise<IMemberEntity> => {
    const membersURL = `${baseURL}`;

    return fetch(membersURL)
        .then((response) => (response.json()));
};
/*
const mapToMembers = (objects: any[]): IMemberEntity[] => {
    return objects.map(mapToMember);
};

const mapToMember = (object): IMemberEntity => {
    return {
        count: null,
        next: object.next,
        previous: object.previous,
        results: object.results,
    };
};*/

export const memberAPI = {
    fetchMembers,
    fetchMembersAsync,
};
