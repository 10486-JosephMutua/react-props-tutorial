import React from "react";
import "./style.css";

import Contact from "./Contact";

export default function App() {
    return (
        <div className="contacts">
            <Contact
                img="https://images.unsplash.com/photo-1598992156182-cc4fa54fdb52?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzMxMzMzNzF8&ixlib=rb-4.0.3&q=85"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img="https://images.unsplash.com/photo-1587006856624-ccbe6e345c4d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzMxMzMzNzF8&ixlib=rb-4.0.3&q=85"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                img="https://images.unsplash.com/photo-1548366086-7f1b76106622?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzMxMzMzNzF8&ixlib=rb-4.0.3&q=85"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="https://images.unsplash.com/photo-1591017320663-dc3334ff1dcc?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzMxMzMzNzF8&ixlib=rb-4.0.3&q=85"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

