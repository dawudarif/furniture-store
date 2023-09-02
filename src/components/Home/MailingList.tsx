import React from 'react';

const MailingList = () => {
  return (
    <section className='mailing-section flex'>
      <div className='mailing-text flex'>
        <h1>Join Our Mailing List</h1>
        <p>
          Sign up to receive inspiration, product updates, and special offers
          from our team.
        </p>
      </div>
      <form className='flex mailing-form'>
        <input type='email' required placeholder='example@gmail.com' />
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default MailingList;
