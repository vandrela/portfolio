import React, { useState } from 'react';

function UserDataForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3001/saveUserData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName }),
      });
  
      if (response.ok) {
        setMessage('Данные успешно сохранены.');
        setFirstName('');
        setLastName('');
      } else {
        setMessage('Произошла ошибка при отправке данных.');
      }
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
      setMessage('Произошла ошибка при отправке данных.');
    }
  };

  return (
    <div>
      <h1>Введите свои данные</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Имя:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Фамилия:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <div>
          <button type="submit">Сохранить данные</button>
        </div>
      </form>
      <div>{message}</div>
    </div>
  );
}

export default UserDataForm;