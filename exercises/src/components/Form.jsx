// import { Formik } from 'formik';

const Form = () => {
    return (
    <div>
    <h1>Form Exercise</h1>;
    <form action="" method="post">
        <label htmlFor="firstName">
            <input type="text" id="firstName" placeholder ="Enter your First Name">First Name: </input>
        </label>
        <label htmlFor="lastName">
            <input type="text" id="lastName" defaultValue="Enter your Last Name">Last Name: </input>
        </label>
        <label htmlFor="age">
            <input type="number" id="age" defaultValue="Enter your Age">Age: </input>
        </label>
        <label htmlFor="email">
            <input type="email" id="email" defaultValue="john.doe@gmail.com">Email: </input>
        </label>
        <label htmlFor="address">
            <input type="address" id="address" defaultValue="Enter your address">Address: </input>
        </label>
        <label htmlFor="narration">
            <textarea id="narration" defaultValue ="Narration">Enter your narration: </textarea>
        </label>

    </form>
    </div>
    )
}

export default Form;