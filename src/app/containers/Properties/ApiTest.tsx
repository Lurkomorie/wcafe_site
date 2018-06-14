/* tslint:disable */
import * as React from 'react';
import {IResults} from '../../model/IResults';

interface Props {
    member: IResults;
}

export const ApiTest: React.StatelessComponent<Props> = ({member}) => {
    return (
        <tr>
            <td>
                <span>{member.id}</span>
            </td>
            <td>
                <span>{member.title}</span>
            </td>
            <td>
                <span>{member.wcafe}</span>
            </td>
        </tr>
    );
};
