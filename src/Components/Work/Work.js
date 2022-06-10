import React from "react";
import aitch from "../IMG/Screenshot_4.png";
import health from "../IMG/Screenshot_1.png";
import samiha from "../IMG/Screenshot_2.png";

const Work = () => {
  return (
    <div className=" container mx-auto grid lg:grid-cols-3">
      <div class="card card-compact max-w-md m-2 bg-base-100 shadow-xl">
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
            <button class="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
      <div class="card card-compact  max-w-md m-2 bg-base-100 shadow-xl">
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
            <button class="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
      <div class="card card-compact max-w-md m-2 bg-base-100 shadow-xl">
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
            <button class="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
