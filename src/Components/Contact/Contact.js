import React from "react";

const Contact = () => {
  return (
    <div class="hero min-h-screen bg-base-100">
      <div class="card shadow-2xl bg-base-100">
        <div class="min-w card-body bg-primary">
          <textarea
            class="textarea textarea-accent"
            placeholder="Bio"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
