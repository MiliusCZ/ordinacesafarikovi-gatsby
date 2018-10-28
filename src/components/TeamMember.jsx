import React from "react";

import "./TeamMember.scss";

export const TeamMember = ({ data }) => (
    <div className="teamMember">
        <img src={data.photo} alt={data.name} />
        <div className="description">
            <h3>{data.name}</h3>
            <span>{data.specialization}</span>
        </div>
    </div>
);
