import React from 'react';
import 'tachyons';

const Form = () => (
  <div formContainer>
    <legend id="form-title">ADD NEW BOOK</legend>
    <form>
      <label htmlFor="title">
        <input type="text" placeholder="Book Title" id="title" />
      </label>
      <label htmlFor="author">
        <input type="text" placeholder="Author" id="author" />
      </label>
      <button type="submit" className="formBtn pointer">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
