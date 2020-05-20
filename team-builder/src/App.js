import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';

//Creating components then importing them here
import TeamMemberForm from './component/TeamMemberForm';
import TeamMember from './component/TeamMember';

// Creating a Teamlist adding id, username, email, and the role
const initialTeamList = [
  {
    id: uuid(),
    username: 'owlspec3086',
    email: 'owlspec@email.com',
    role: 'Web dev learning',
  },
];

// This form will shape the state using initalFormValues leave the information blank
const initialFormValues = {
  username: '',
  email: '',
  role: '',
};

function App() {
  // in this fuction I will use useState for inital form values
  const [teamMembers, setTeamMembers] = useState(initialTeamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setFormValues({
      ...formValues,
      [name]: value, // this is not an Array
    });
  };

  const onSubmit = evt => {
    evt.preventDefault();
    const newTeamMember = {
      id: uuid(),
      username: formValues.username,
      email:formValues.email,
      role: formValues.role,
    }
    setTeamMembers([...teamMembers, newTeamMember])
    setFormValues(initialFormValues)
  }

  return(
    <div className='App'>
      <header>
        <h1 style={{ textAlign: 'center' }}> Building A Team</h1></header>
      {
        teamMembers.map(teamMembers => {
          return (
            <TeamMember key={teamMembers.id} details={teamMembers} />
          )
        })
      }  

      <TeamMemberForm
      values={formValues}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
      />
    </div>
    
  ) 
}

export default App;
