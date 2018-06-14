/* tslint:disable */
import * as React from 'react';
import {IMemberEntity} from '../../model';
import {memberAPI} from '../../../api/member';
import {ApiTest} from './ApiTest';
//import {ApiTest} from './ApiTest';


interface IState {
  members: any;
}

export default class MembersPage extends React.Component<{}, IState> {
  constructor() {
    super();
    this.state = { members: Object};
  }

  public componentDidMount() {
    memberAPI.fetchMembersAsync()
      .then((members) => {
        this.setState({ members });
      });
  }

  public render() {

      let obj = this.state.members.results;
    return (
        <div>test
            <table className="table">
                <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {
                    obj.map((member) =>
                        <ApiTest
                            key={member.id}
                            member={member}
                        />
                    )
                }
                </tbody>
            </table>
        </div>
    );
  }
};
