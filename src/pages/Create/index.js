import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { isInt, isFloat } from 'validator';

import {
  Container,
  Animate,
  Button,
  InputContainer,
} from '../../styles/GlobalStyles';
import { PhotoCreate, Preview } from './styled';
import UserHeader from '../../components/UserHeader';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';
import Head from '../../components/Head';

export default function Create() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [src, setSrc] = useState({});
  const user = useSelector((state) => state.auth.user.username);

  function validate() {
    let formErrors = false;

    if (title.length < 3 || title.length > 30) {
      formErrors = true;
      toast.error('Title must be between 3 and 30 characters.');
    }

    if (!isInt(age) || age < 1) {
      formErrors = true;
      toast.error('Age has to be a Integer.');
    }

    if (!isFloat(weight) || weight < 0.1) {
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
      const { status } = get(err, 'response', '');
      const errors = get(err, 'response.data.errors', []);

      if (status === 401) {
        dispatch(actions.loginFailure());
        return toast.error('Login required.');
      }

      if (errors.length > 0) {
        return errors.map((error) => toast.error(error));
      } else {
        return toast.error('Unknown error.');
      }
    }
  };

  function handleChangeImg({ target }) {
    setSrc({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <Container>
      <Head title={`Post at ${user}'s account`} />
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
                step="0.1"
                id="weight"
                onChange={({ target }) => setWeight(target.value)}
              ></input>
            </InputContainer>
            <InputContainer>
              <label htmlFor="Age">Age</label>
              <input
                type="number"
                value={age}
                id="age"
                onChange={({ target }) => setAge(target.value)}
              ></input>
            </InputContainer>
            <input type="file" id="img" onChange={handleChangeImg}></input>
            <Button disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Send'}
            </Button>
          </form>
          <div>
            {src.preview && (
              <Preview
                style={{ backgroundImage: `url('${src.preview}')` }}
              ></Preview>
            )}
          </div>
        </PhotoCreate>
      </Animate>
    </Container>
  );
}
