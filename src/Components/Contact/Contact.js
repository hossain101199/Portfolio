import { useForm, ValidationError } from "@formspree/react";
import React from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xdobjdya");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div class="hero min-h-screen bg-base-100">
      <div class="card hover:shadow-2xl shadow-md bg-base-100 m-2">
        <form onSubmit={handleSubmit} class=" w-screen md:w-96  card-body ">
          <input
            type="name"
            placeholder="Name"
            class="input input-bordered input-primary "
            required
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            class="input input-bordered input-primary "
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <input
            type="number"
            placeholder="Phone"
            class="input input-bordered input-primary "
            required
          />
          <textarea
            id="message"
            name="message"
            class="textarea textarea-primary"
            placeholder="Write your message..."
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <input
            disabled={state.submitting}
            type="submit"
            value="Submit"
            class="btn btn-outline"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
