import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    Phone: '',
    Branch: '',
    interest: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

const postData = async(e) => {
    const {username, email, Phone, Branch, interest} = values;
    const res = await fetch("https://college-club-83f73-default-rtdb.firebaseio.com/form.json", 
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            email,
            Phone,
            Branch,
            interest
        })
    })
}

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
          
        callback();
        postData()
      }
    },
    [errors, callback,postData, isSubmitting]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;