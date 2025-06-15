# Frontend Mentor - Contact form solution

Frontend Mentor challenges help you improve your coding skills by building realistic projects that simulate real-world scenarios. 
Challenge link: https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot-Solution)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
This is a responsive design form validation project, with a focus on mobile-first design. In the "Mobile design", all the fields were set to stay in columns, rather than rows. However, as a responsive design project, the form was set to change its layout on the desktop with a minimum of "1440px". The project uses "Media Queries" to achieve this functionality. 
Therefore, on the desktop device, the "First Name", "Last Name", General Enquiry", and "Support Request" stay side-by-side. In other words, they change from columns to rows, while the rest of the fields, such as "Email Address", "Message", and "Submit button" expand their width to align.

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Challenge URL: https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj 
- Solution (Live Site URL): [@Mario-Balde](https://contact-form-xi-sooty.vercel.app/)

### Built with

- Standard Built-in HTML Elements (<form>, <input>, <textarea>, <fieldset>, <button>,)
- CSS 
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library



### What I learned

Throughout this form validation project, I had the opportunity to apply my React theoretical knowledge into practice, such as State Management (useState, formData, errors), Event Handling (onChange, onSubmit,), Conditional Rendering (Render error messages, and success modal dynamically based on the state). In the meantime, I learned how to implement the "Modal Open" React State with CSS for centring and styling the "Modal".

Code snippets:

```React.js
const [successMessage, setSuccessMessage] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    console.log("I'm proud of this")

```
```JS
const handleChange = (e) => {
   console.log("I'm proud of this");
    };
```
```JS
const handleSubmit = (e) => {
  console.log("I'm proud of this");
  };
```

```css
.proud-of-this-css {
  .modal button 
    padding: 10px 20px;
    font-size: 1em;
    color: white;
    background-color: hsl(169, 82%, 27%);
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
```

```css
.proud-of-this-css {
.error 
    color: red;
    font-size: 0.9em;
    margin-top: 5px;
}
```

```css
.proud-of-this-css {

@media (min-width: 1440px)

}
```

### Continued development

Areas of focus/improvements:
REACT: 
------"State Managemnet": useState, formData, erros, etc.
------"Event Handling": like "onChange" and "onSubmit" to handle user inputs and form submissions.
------"Conditional Rendering": Rendering error messages and the success modal dynamically based on the state. 

CCS: Flexbox, Media Query.


### Useful resources

[React](https://reactjs.org/) - JS library: This helped me to understand React features (State Management, Event Handling, Conditional Rendering, etc). 

[MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) - To learn "Flexbox". This website improved my understanding of "Flexbox", such as flex-direction.

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_types) - Through this link, I learned "Media Query" quickly. In the meantime, it helped me to implement responsive design faster. 

## Author

- Frontend Mentor - [@Mario-Balde](https://www.frontendmentor.io/profile/Mario-Balde)
- Linkdin - [@Mario-Balde](https://www.linkedin.com/in/mario-balde-44b994b5)

## Acknowledgments

I'd like to thank "Frontend Mentor" for providing this amazing challenge to test and beef up my skills. 
Though the design folder provided with the images, I was able to understand the project requirements and then built the form to look as closely as possible to the design. 

