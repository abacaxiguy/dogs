import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { isInteger } from 'lodash';

import {
  Container,
  Animate,
  Button,
  InputContainer,
} from '../../styles/GlobalStyles';
import { PhotoCreate } from './styled';
import UserHeader from '../../components/UserHeader';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Create() {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [src, setSrc] = useState({});

  function validate() {
    let formErrors = false;

    if (title.length < 3 || title.length > 30) {
      formErrors = true;
      toast.error('Title must be between 3 and 30 characters.');
    }

    if (!isInteger(age)) {
      formErrors = true;
      toast.error('Age has to be a Integer.');
    }

    if (!isInteger(weight)) {
      formErrors = true;
      toast.error('Weight has to be a Integer.');
    }

    if (!src.raw) {
      formErrors = true;
      toast.error('Image is required.');
    }

    return formErrors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) return;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('weight', weight);
    formData.append('age', age);
    formData.append('src', src.raw);

    try {
      setIsLoading(true);
      console.log(formData);
      await axios.post('/photos/', formData, {
        headers: {
          ...axios.defaults.headers,
          Authorization: axios.defaults.headers.Authorization,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Post created successfully!');
      history.push('/account');

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const errors = get(err, 'response.data.errors', []);

      if (errors.length > 0) {
        return errors.map((error) => toast.error(error));
      } else {
        return toast.error('Unknown error.');
      }
    }
  };

  function handleChangeImg({ target }) {
    setSrc({
      raw: target.files[0],
    });
  }
  return (
    <Container>
      <UserHeader />
      <Animate>
        <PhotoCreate>
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                value={title}
                id="title"
                onChange={({ target }) => setTitle(target.value)}
              ></input>
            </InputContainer>
            <InputContainer>
              <label htmlFor="weight">Weight</label>
              <input
                type="number"
                value={weight}
                id="weight"
                onChange={({ target }) => setWeight(Number(target.value))}
              ></input>
            </InputContainer>
            <InputContainer>
              <label htmlFor="Age">Age</label>
              <input
                type="number"
                value={age}
                id="age"
                onChange={({ target }) => setAge(Number(target.value))}
              ></input>
            </InputContainer>
            <input type="file" id="img" onChange={handleChangeImg}></input>
            <Button disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Send'}
            </Button>
          </form>
        </PhotoCreate>
      </Animate>
    </Container>
  );
}
