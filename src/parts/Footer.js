import React from "react";

import Button from "elements/Button";
import IconText from "parts/IconText";

export default function Footer() {
  return (
    <footer className="container">
      <div className="row">
        <div className="col">
          <IconText></IconText>
          <p className="brand-tagline">
            We Kaboom your beauty holiday bla bla bla
          </p>
        </div>
        <div className="col-2 mr-5">
          <h6 className="mt-2">For Beginners</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Button type="link" href="/register">
                New Acount
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/register">
                Start Booking a Room
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/proprties">
                Use Payments
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/use-payments">
                New Acount
              </Button>
            </li>
          </ul>
        </div>
        <div className="col-2 mr5">
          <h6 className="mt-2">Explore Us</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Button type="link" href="/career">
                Our Career
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/privacy">
                Privacy
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/terms">
                Terms & Condition
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/use-payments">
                New Acount
              </Button>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h6 className="mt-2">Connect Us</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Button
                isExternal
                type="link"
                href="mailto:support@staycation.id"
              >
                support@staycation.id
              </Button>
            </li>
            <li className="list-group-item">
              <Button isExternal type="link" href="tel:+622122081996">
                021 - 2208 - 1996
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/terms">
                Terms & Condition
              </Button>
            </li>
            <li className="list-group-item">
              <span>Staycation, Kemang, Jakarta</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col text-center copyrights">
          Copyrights 2021 All rights reserved Stayation
        </div>
      </div>
    </footer>
  );
}
