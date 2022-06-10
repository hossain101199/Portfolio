import React from "react";
import aitch from "../IMG/Screenshot_4.png";
import aitch2 from "../IMG/Screenshot_3.png";
import aitch3 from "../IMG/Screenshot_5.png";
import health from "../IMG/Screenshot_1.png";
import samiha from "../IMG/Screenshot_2.png";

const Work = () => {
  return (
    <div className=" container mx-auto grid lg:grid-cols-3">
      <div class="card card-compact max-w-md m-2 bg-base-100 hover:shadow-xl shadow-md">
        <figure>
          <img src={aitch} alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Aitch's Light</h2>
          <p>
            <a
              className="text-blue-600"
              href="https://aitch-s-light.web.app/"
              rel="noreferrer"
              target="_blank"
            >
              live site
            </a>{" "}
            |{" "}
            <a
              className="text-blue-600"
              href="https://github.com/hossain101199/manufacturer-website-server-side"
              rel="noreferrer"
              target="_blank"
            >
              server-side code
            </a>{" "}
            |{" "}
            <a
              className="text-blue-600"
              href="https://github.com/hossain101199/manufacturer-website-client-side"
              rel="noreferrer"
              target="_blank"
            >
              client-side code
            </a>
            .
          </p>
          <p>
            Introducing a manufacturing website that interacts with both
            end-users and system administrators. Users can order products, pay
            with cards, and cancel orders before payment. Users can also rate
            and review. In contrast, the system administrator can manage orders,
            cancel orders prior to receiving payment, and add products. Lastly,
            the administrator can grant access to the administrative
            capabilities to any user.
          </p>
          <div class="card-actions justify-end">
            <label for="my-modal-1" class="btn btn-outline">
              Details
            </label>
          </div>
        </div>
      </div>
      <div class="card card-compact  max-w-md m-2 bg-base-100 hover:shadow-xl shadow-md">
        <figure>
          <img src={health} alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Healthy Health</h2>
          <p>
            <a
              className="text-blue-600"
              href="https://healthy-health-ade6b.web.app/"
              rel="noreferrer"
              target="_blank"
            >
              live site
            </a>{" "}
            |{" "}
            <a
              className="text-blue-600"
              href="https://github.com/hossain101199/warehouse-management-server-side"
              rel="noreferrer"
              target="_blank"
            >
              server-side code
            </a>{" "}
            |{" "}
            <a
              className="text-blue-600"
              href="https://github.com/hossain101199/warehouse-management-client-side"
              rel="noreferrer"
              target="_blank"
            >
              client-side code
            </a>
            .
          </p>
          <p>
            This warehouse management website has several interesting features.
            It starts with a homepage showing inventory items. Managed products,
            a feature of the website, allow users to make changes to the
            required quantity and product specifications. Users can utilise the
            "Add items" tool to add items, and logged-in users are the only ones
            who can interact with the site.
          </p>
          <div class="card-actions justify-end">
            <label for="my-modal-2" class="btn btn-outline">
              Details
            </label>
          </div>
        </div>
      </div>
      <div class="card card-compact max-w-md m-2 bg-base-100 hover:shadow-xl shadow-md">
        <figure>
          <img src={samiha} alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Samiha's Mehendi</h2>
          <p>
            <a
              className="text-blue-600"
              href="https://samiha-s-mehendi.web.app/"
              rel="noreferrer"
              target="_blank"
            >
              live site
            </a>{" "}
            |{" "}
            <a
              className="text-blue-600"
              href="https://github.com/hossain101199/independent-service-provider"
              rel="noreferrer"
              target="_blank"
            >
              code
            </a>
            .
          </p>
          <p>
            Introducing an independent service provider website, which is, at
            its core, pretty straightforward: Only logged-in users can select a
            package and schedule an appointment at a convenient time.
          </p>
          <div class="card-actions justify-end">
            <label for="my-modal-3" class="btn btn-outline">
              Details
            </label>
          </div>
        </div>
      </div>
      {/* =============================================================================================== */}
      <input type="checkbox" id="my-modal-1" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-1"
            class="btn btn-sm btn-circle absolute right-2 bottom-2"
          >
            ✕
          </label>
          <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
              <img alt="" src={aitch} class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
              <img alt="" src={aitch3} class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
              <img alt="" src={aitch2} class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <h2 class="card-title">Aitch's Light</h2>
          <p>
            <a
              className="text-blue-600"
              href="https://aitch-s-light.web.app/"
              rel="noreferrer"
              target="_blank"
            >
              live site
            </a>{" "}
            |{" "}
            <a
              className="text-blue-600"
              href="https://github.com/hossain101199/manufacturer-website-server-side"
              rel="noreferrer"
              target="_blank"
            >
              server-side code
            </a>{" "}
            |{" "}
            <a
              className="text-blue-600"
              href="https://github.com/hossain101199/manufacturer-website-client-side"
              rel="noreferrer"
              target="_blank"
            >
              client-side code
            </a>
            .
          </p>
          <p>
            Introducing a manufacturing website that interacts with both
            end-users and system administrators. Users can order products, pay
            with cards, and cancel orders before payment. Users can also rate
            and review. In contrast, the system administrator can manage orders,
            cancel orders prior to receiving payment, and add products. Lastly,
            the administrator can grant access to the administrative
            capabilities to any user.
          </p>
          <p>
            <span className="font-semibold">Technologies:</span> React,
            Firebase, Express.js, JWT, MongoDB, Stripe, Tailwind, React Query,
            DaisyUI, React Toastify, React Hook Form, React Firebase Hooks
          </p>
        </div>
      </div>
      {/* =============================================================================================== */}
      <input type="checkbox" id="my-modal-2" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-2"
            class="btn btn-sm btn-circle absolute right-2 bottom-2"
          >
            ✕
          </label>
          <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
              <img alt="" src={aitch} class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
              <img alt="" src={aitch3} class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
              <img alt="" src={aitch2} class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <h2 class="card-title">Healthy Health</h2>
          <p>
            <a
              className="text-blue-600"
              href="https://healthy-health-ade6b.web.app/"
              rel="noreferrer"
              target="_blank"
            >
              live site
            </a>{" "}
            |{" "}
            <a
              className="text-blue-600"
              href="https://github.com/hossain101199/warehouse-management-server-side"
              rel="noreferrer"
              target="_blank"
            >
              server-side code
            </a>{" "}
            |{" "}
            <a
              className="text-blue-600"
              href="https://github.com/hossain101199/warehouse-management-client-side"
              rel="noreferrer"
              target="_blank"
            >
              client-side code
            </a>
            .
          </p>
          <p>
            This warehouse management website has several interesting features.
            It starts with a homepage showing inventory items. Managed products,
            a feature of the website, allow users to make changes to the
            required quantity and product specifications. Users can utilise the
            "Add items" tool to add items, and logged-in users are the only ones
            who can interact with the site.
          </p>
          <p>
            <span className="font-semibold">Technologies:</span> React,
            Firebase, Express.js, MongoDB, Bootstrap, React Toastify, React
            Firebase Hooks.
          </p>
        </div>
      </div>
      {/* =============================================================================================== */}
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 bottom-2"
          >
            ✕
          </label>
          <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
              <img alt="" src={aitch} class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
              <img alt="" src={aitch3} class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
              <img alt="" src={aitch2} class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <h2 class="card-title">Samiha's Mehendi</h2>
          <p>
            <a
              className="text-blue-600"
              href="https://samiha-s-mehendi.web.app/"
              rel="noreferrer"
              target="_blank"
            >
              live site
            </a>{" "}
            |{" "}
            <a
              className="text-blue-600"
              href="https://github.com/hossain101199/independent-service-provider"
              rel="noreferrer"
              target="_blank"
            >
              code
            </a>
            .
          </p>
          <p>
            Introducing an independent service provider website, which is, at
            its core, pretty straightforward: Only logged-in users can select a
            package and schedule an appointment at a convenient time.
          </p>
          <p>
            <span className="font-semibold">Technologies:</span> React,
            Firebase, Bootstrap, React Toastify, React Firebase Hooks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
