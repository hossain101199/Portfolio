import React from "react";

const Contact = () => {
  return (
    <div class="hero min-h-screen bg-base-100">
      <div class="card shadow-2xl bg-base-100">
        <div class="min-w card-body ">
        <input type="name" placeholder="Name" class="input input-bordered input-primary w-full max-w-xs" />
        <input type="email" placeholder="Email" class="input input-bordered input-primary w-full max-w-xs" />
          <textarea
            class="textarea textarea-primary"
            placeholder="Message..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
