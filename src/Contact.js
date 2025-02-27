import React from "react";
export default function Contact({img,name,phone,email}) {
  return (
      <article className="contact-card">
          <img
              src={img}
              alt="Photo of Mr. Whiskerson"
        width="20px"  />
          <h3>{name}</h3>
          <div className="info-group">
              
              <img
                  src="
                  
                </svg>
                "
                  alt="phone icon"
                  
              />
              <p>{phone}</p>
              
          </div>
          <div className="info-group">
              <img
                  src="./images/mail-icon.png"
                  alt="mail icon"
              />
              <p>{email}</p>
          </div>
      </article>
  )
}

const person = {
  img: "./images/mr-whiskerson.png",
  name: "Mr. Whiskerson",
  phone: "(800) 555-1234",
  email: "mr.whiskaz@catnap.meow"
}

const {img, name} = person
console.log(img)